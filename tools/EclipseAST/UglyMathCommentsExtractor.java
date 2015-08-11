
//===========================================================================
//
//  This program use Eclipse JDT to parse java source files 
//  and dumps resulting AST in JSON representation.
//
//---------------------------------------------------------------------------
//
//  Copyright (C) 2015
//  by Oleg Mazko(o.mazko@mail.ru).
//
//  The author gives unlimited permission to copy and distribute
//  this file, with or without modifications, as long as this notice
//  is preserved, and any changes are properly documented.
//

import java.io.Closeable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.jdt.core.dom.ASTNode;
import org.eclipse.jdt.core.dom.AbstractTypeDeclaration;
import org.eclipse.jdt.core.dom.AnnotationTypeMemberDeclaration;
import org.eclipse.jdt.core.dom.Comment;
import org.eclipse.jdt.core.dom.CompilationUnit;
import org.eclipse.jdt.core.dom.EnumConstantDeclaration;
import org.eclipse.jdt.core.dom.FieldDeclaration;
import org.eclipse.jdt.core.dom.MethodDeclaration;
import org.eclipse.jdt.core.dom.PackageDeclaration;

public final class UglyMathCommentsExtractor implements ICommentsExtractor, Closeable {
	private final CompilationUnit cu;
	private final String src;
	private final List<?> comments;
	private final boolean[] commentsVisited;

	public UglyMathCommentsExtractor(final CompilationUnit cu, final String src) {
		this.cu = cu;
		this.src = src;
		this.comments = cu.getCommentList();
		/* For type boolean the default value is false */
		commentsVisited = new boolean[this.comments.size()];
	}

	private static int getNodeStartPosition(final ASTNode node) {
		if (node instanceof MethodDeclaration) {
			MethodDeclaration decl = (MethodDeclaration) node;
			return decl.isConstructor() ? decl.getName().getStartPosition() : decl.getReturnType2().getStartPosition();
		} else if (node instanceof FieldDeclaration) {
			return ((FieldDeclaration) node).getType().getStartPosition();
		} else if (node instanceof AbstractTypeDeclaration) {
			return ((AbstractTypeDeclaration) node).getName().getStartPosition();
		} else if (node instanceof AnnotationTypeMemberDeclaration) {
			return ((AnnotationTypeMemberDeclaration) node).getName().getStartPosition();
		} else if (node instanceof EnumConstantDeclaration) {
			return ((EnumConstantDeclaration) node).getName().getStartPosition();
		} else if (node instanceof PackageDeclaration) {
			return ((PackageDeclaration) node).getName().getStartPosition();
		}
		/* TODO: Initializer */

		return node.getStartPosition();
	}

	private final CommentItem extractCommentItem(final int index) {
		if (commentsVisited[index]) {
			return null;
		} else {
			final Comment comment = (Comment) comments.get(index);
			if (comment.isDocComment()) {
				/* Interpret DocComment as Line or Block */
				comment.delete();
			}
			final int start = comment.getStartPosition();
			final int end = start + comment.getLength();
			final String value = this.src.substring(start, end);
			return new CommentItem(comment, value);
		}
	}

	private final int getNodeFirstLeadingCommentIndex(final ASTNode node) {
		if (node instanceof PackageDeclaration) {
			if (commentsVisited.length > 0) {
				final Comment comment = (Comment) comments.get(0);
				if (comment.getStartPosition() + comment.getLength() <= ((PackageDeclaration) node).getName()
						.getStartPosition()) {
					return 0;
				}
			}
			return -1;
		} else {
			return cu.firstLeadingCommentIndex(node);
		}
	}

	@Override
	public CommentItem[] leadingComments(final ASTNode node) {
		final int index = getNodeFirstLeadingCommentIndex(node);
		final List<CommentItem> items = new ArrayList<>();

		if (index != -1) {
			final int nodeStart = getNodeStartPosition(node);
			for (int i = index; i < commentsVisited.length; i++) {
				final CommentItem item = extractCommentItem(i);
				if (item != null) {
					final int commentEnd = item.node.getStartPosition() + item.node.getLength();
					if (commentEnd > nodeStart) {
						break;
					}
					commentsVisited[i] = true;
					items.add(item);
				}
			}
		}
		return items.toArray(new CommentItem[items.size()]);
	}

	@Override
	public CommentItem[] trailingComments(final ASTNode node) {
		final int index = cu.lastTrailingCommentIndex(node);
		final List<CommentItem> items = new ArrayList<>();

		if (index != -1) {
			final int nodeEnd = node.getStartPosition() + node.getLength();
			for (int i = index; i >= 0; i--) {
				final CommentItem item = extractCommentItem(i);
				if (item != null) {
					if (item.node.getStartPosition() < nodeEnd) {
						break;
					}
					commentsVisited[i] = true;
					items.add(item);
				}
			}
		}

		return items.toArray(new CommentItem[items.size()]);
	}

	@Override
	public void close() throws IOException {
		for (int i = 0; i < commentsVisited.length; i++) {
			if (commentsVisited[i] == false) {
				System.err.println("Orphan comment is lost:");
				System.err.println(extractCommentItem(i).value);
			}
		}
	}
}
