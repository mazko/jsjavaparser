
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

import org.eclipse.jdt.core.dom.ASTNode;
import org.eclipse.jdt.core.dom.Comment;

public interface ICommentsExtractor {
	public final class CommentItem {
		protected CommentItem(final Comment node, final String value) {
			this.node = node;
			this.value = value;
		}

		public final Comment node;
		public final String value;
	}

	CommentItem[] leadingComments(final ASTNode node);

	CommentItem[] trailingComments(final ASTNode node);
}
