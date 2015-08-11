
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

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.eclipse.jdt.core.dom.ASTNode;
import org.eclipse.jdt.core.dom.ChildListPropertyDescriptor;
import org.eclipse.jdt.core.dom.ChildPropertyDescriptor;
import org.eclipse.jdt.core.dom.SimplePropertyDescriptor;

/**
 * Dumps the AST to a supplied "printer".
 */
public class ASTDumper {

	/**
	 * The printer to send events to.
	 */
	private final IASTPrinter printer;

	/**
	 * By default comments detached from AST. This feature helps to dump
	 * comments too.
	 */
	private final ICommentsExtractor comments;

	/**
	 * Constructs an AST dumper with a {@link ASTPrinter} and
	 * {@link ICommentsExtractor} specified.
	 *
	 * @param printer
	 *            the {@link ASTPrinter} to send events to.
	 * 
	 * @param comments
	 *            the {@link ICommentsExtractor} to extract comments from
	 *            ASTNode.
	 */
	public ASTDumper(final IASTPrinter printer, final ICommentsExtractor comments) {
		this.printer = printer;
		this.comments = comments;
	}

	/**
	 * Constructs an AST dumper with a {@link ICommentsExtractor} specified.
	 *
	 * @param comments
	 *            the {@link ICommentsExtractor} to extract comments from
	 *            ASTNode.
	 */
	public ASTDumper(final ICommentsExtractor comments) {
		this(new JSONStyleASTPrinter(System.out), comments);
	}

	/**
	 * Default constructor which outputs JSON-style AST trees to stdout.
	 */
	public ASTDumper() {
		this(null);
	}

	/**
	 * Dumps a root node and all it's child nodes as a tree.
	 *
	 * @param rootNode
	 *            the node to start at.
	 */
	public void dump(final ASTNode rootNode) {
		printer.startPrint();
		walk(rootNode);
		printer.endPrint();
	}

	/**
	 * Returns the output of the dumper as a string.
	 */
	@Override
	public String toString() {
		return printer.toString();
	}

	/**
	 * Walks the tree of objects from the specified node, sending events to the
	 * specified printer.
	 *
	 * @param node
	 *            the root node.
	 */

	private void walk(final ASTNode node) {
		walk(node, false);
	}

	/**
	 * Walks through list of comments.
	 *
	 * @param comments
	 *            list.
	 * @param leading
	 *            true if leading, false for trailing.
	 */

	private void dumpComments(final ICommentsExtractor.CommentItem[] comments, final boolean leading) {
		if (comments != null && comments.length > 0) {

			final String id = leading ? "leadingComments" : "trailingComments";
			printer.startElement(id, true);

			for (ICommentsExtractor.CommentItem comment : comments) {
				final String commentId = comment.node.isLineComment() ? "LineComment"
						: comment.node.isDocComment() ? "DocComment" : "BlockComment";
				printer.startType(commentId, true);
				printer.literal("value", comment.value);
				printer.endType(commentId, true);
			}

			printer.endElement(id, true);
		}
	}

	/**
	 * Walks the tree of objects from the specified node, sending events to the
	 * specified printer.
	 *
	 * @param node
	 *            the root node.
	 * @param parentIsList
	 *            indicates whether the parent node is a list or not.
	 */
	private void walk(final ASTNode node, final boolean parentIsList) {
		printer.startType(node.getClass().getSimpleName(), parentIsList);
		final List<?> properties = node.structuralPropertiesForType();

		if (comments != null) {
			dumpComments(comments.leadingComments(node), true);
			dumpComments(comments.trailingComments(node), false);
		}
		for (Iterator<?> iterator = properties.iterator(); iterator.hasNext();) {
			final Object desciptor = iterator.next();

			if (desciptor instanceof SimplePropertyDescriptor) {
				SimplePropertyDescriptor simple = (SimplePropertyDescriptor) desciptor;
				Object value = node.getStructuralProperty(simple);
				printer.literal(simple.getId(), value);
			} else if (desciptor instanceof ChildPropertyDescriptor) {
				ChildPropertyDescriptor child = (ChildPropertyDescriptor) desciptor;
				ASTNode childNode = (ASTNode) node.getStructuralProperty(child);
				if (childNode != null) {
					printer.startElement(child.getId(), false);
					walk(childNode);
					printer.endElement(child.getId(), false);
				} else {
					printer.literal(child.getId(), null);
				}
			} else {
				ChildListPropertyDescriptor list = (ChildListPropertyDescriptor) desciptor;
				List<?> value = new ArrayList<>((List<?>) node.getStructuralProperty(list));
				if (value.size() > 0) {
					printer.startElement(list.getId(), true);
					walk(value);
					printer.endElement(list.getId(), true);
				} else {
					printer.literal(list.getId(), value);
				}
			}
		}

		printer.endType(node.getClass().getSimpleName(), parentIsList);
	}

	/**
	 * Walks through list of nodes.
	 *
	 * @param nodes
	 *            list.
	 */

	private void walk(final List<?> nodes) {
		for (Iterator<?> iterator = nodes.iterator(); iterator.hasNext();) {
			ASTNode node = (ASTNode) iterator.next();
			walk(node, true);
		}
	}
}