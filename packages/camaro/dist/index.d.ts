/**
 * Convert an XML string to JSON based on the XPath template object.
 * @param xml The XML string.
 * @param template An XPath template object.
 * @returns The xml converted to json object based on the template.
 */
declare function transform(xml: string, template: Object): Promise<any>;
/**
 * Convert an XML string to JSON object.
 * @param xml The xml string.
 * @returns A JSON object converted from the input XML string.
 */
declare function toJson(xml: string): Promise<void>;
interface PrettyPrintOptions {
    /**
     * The size of the indent.
     * @default 2
     */
    indentSize?: number;
}
/**
 * pretty print xml string
 * @param xml The XML string.
 * @param opts Options.
 * @returns Pretty-printed XML string.
 */
declare function prettyPrint(xml: string, opts?: PrettyPrintOptions): Promise<any>;

export { PrettyPrintOptions, prettyPrint, toJson, transform };
