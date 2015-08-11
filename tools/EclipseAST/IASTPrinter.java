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

/**
 * SAX-style printer for outputting AST nodes.
 */
public interface IASTPrinter {

	/**
	 * Flags the start of the print job.
	 */
	public void startPrint();

	/**
	 * Flags the end of the print job.
	 */
	public void endPrint();

	/**
	 * Starts an AST element.
	 *
	 * @param name
	 *            the name of the AST element.
	 * @param isList
	 *            indicates whether the element is a list container.
	 */
	public void startElement(String name, boolean isList);

	/**
	 * Starts an AST element type.
	 *
	 * @param name
	 *            the name of the type.
	 * @param parentIsList
	 *            indicates whether the parent node is a list or not.
	 */
	public void startType(String name, boolean parentIsList);

	/**
	 * Ends the element type.
	 *
	 * @param name
	 *            the name of the type.
	 * @param parentIsList
	 *            indicates whether the parent node is a list or not.
	 */
	public void endType(String name, boolean parentIsList);

	/**
	 * Ends an AST element.
	 *
	 * @param name
	 *            the name of the AST element.
	 * @param isList
	 *            indicates whether the item is a list or not.
	 */
	public void endElement(String name, boolean isList);

	/**
	 * Some literal value.
	 *
	 * @param name
	 *            the name of the literal.
	 * @param value
	 *            the value to write.
	 */
	public void literal(String name, Object value);
}
