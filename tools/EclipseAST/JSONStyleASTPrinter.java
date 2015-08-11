
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

import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

import org.apache.commons.lang3.StringEscapeUtils;

/**
 * Outputs the AST in JSON-style format.
 *
 * NOTE: This is not intended as legitimate JSON.
 */
public class JSONStyleASTPrinter extends Indenter implements IASTPrinter {

	private final PrintWriter printer;

	private final Stack<Boolean> hasItemsStack = new Stack<Boolean>() {
		private static final long serialVersionUID = 1L;

		{
			// Make sure there is one item on the stack which represents
			// the root node.
			push(false);
		}
	};

	public JSONStyleASTPrinter(OutputStream destination) {
		this.printer = new PrintWriter(destination);
	}

	public void startElement(String name, boolean isList) {
		if (hasItemsStack.peek() == true) {
			printer.println(",");
		} else {
			hasItemsStack.pop();
			hasItemsStack.push(true);
		}

		printer.println(getIndentString() + name + ": " + (isList ? "[" : "{"));
		indent();
		hasItemsStack.push(false);
	}

	public void endElement(String name, boolean isList) {
		unindent();
		printer.print("\n" + getIndentString() + (isList ? "]" : "}"));
		hasItemsStack.pop();
	}

	public void startType(String name, boolean parentIsList) {
		if (hasItemsStack.peek() == true) {
			printer.println(",");
		} else {
			hasItemsStack.pop();
			hasItemsStack.push(true);
		}

		if (parentIsList) {
			printer.println(getIndentString() + "{");
			indent();
		}

		printer.print(getIndentString() + "node: \"" + name + "\"");
	}

	public void endType(String name, boolean parentIsList) {
		if (parentIsList) {
			unindent();
			printer.print("\n" + getIndentString() + "}");
		}
	}

	private static final Set<Class<? extends Object>> JSON_ALLOWED_WRAPPER_TYPES = new HashSet<Class<? extends Object>>(
			Arrays.asList(Boolean.class, Byte.class, Short.class, Integer.class, Long.class, Float.class, Double.class,
					ArrayList.class));

	private static boolean isJsonAllowedType(Class<? extends Object> clazz) {
		return JSON_ALLOWED_WRAPPER_TYPES.contains(clazz);
	}

	public void literal(String name, Object value) {
		if (hasItemsStack.peek() == true) {
			printer.println(",");
		} else {
			hasItemsStack.pop();
			hasItemsStack.push(true);
		}

		printer.print(getIndentString() + name + ": " + (value == null || isJsonAllowedType(value.getClass()) ? value
				: "\"" + StringEscapeUtils.escapeJson(value.toString()) + "\""));
	}

	public void startPrint() {
		printer.println("{");
		indent();
	}

	public void endPrint() {
		printer.println();
		unindent();
		printer.println("}");
		printer.flush();
		printer.close();
	}
}
