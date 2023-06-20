import Module from './camaro.js'

let cachedInstance: Awaited<ReturnType<typeof Module>>

async function callWasmBinding(methodName: keyof typeof cachedInstance, ...args: any[]) {
  if (!cachedInstance) throw new Error('camaro is not initialized yet.')
  return cachedInstance[methodName](...args)
}

const ready = new Promise<void>((resolve, _reject) => {
  if (!cachedInstance) {
    Module().then((instance) => {
      cachedInstance = instance
      resolve()
    })
  } else {
    resolve()
  }
})

async function camaroWasm({ fn, args }: any) {
  await ready
  return callWasmBinding(fn, ...args)
}

/**
 * Convert an XML string to JSON based on the XPath template object.
 * @param xml The XML string.
 * @param template An XPath template object.
 * @returns The xml converted to json object based on the template.
 */
export async function transform(xml: string, template: Object) {
  if (!isNonEmptyString(xml)) {
    throw new TypeError('1st argument (xml) must be a non-empty string')
  }

  if (!template || typeof template !== 'object' || isEmptyObject(template)) {
    throw new TypeError('2nd argument (template) must be an object')
  }

  return await camaroWasm({
    fn: 'transform',
    args: [xml, JSON.stringify(template)],
  })
}

/**
 * Convert an XML string to JSON object.
 * @param xml The xml string.
 * @returns A JSON object converted from the input XML string.
 */
export async function toJson(xml: string) {
  throw new Error('Not yet implemented')
  // if (!isNonEmptyString(xml)) {
  //   throw new TypeError('expecting xml input to be non-empty string')
  // }
  // return pool.run({ fn: 'toJson', args: [xml] })
}

export interface PrettyPrintOptions {
  /**
   * The size of the indent.
   * @default 2
   */
  indentSize?: number
}

/**
 * pretty print xml string
 * @param xml The XML string.
 * @param opts Options.
 * @returns Pretty-printed XML string.
 */
export async function prettyPrint(
  xml: string,
  opts: PrettyPrintOptions = { indentSize: 2 }
) {
  if (!isNonEmptyString(xml)) {
    throw new TypeError('expecting xml input to be non-empty string')
  }
  return camaroWasm({ fn: 'prettyPrint', args: [xml, opts] })
}

function isNonEmptyString(str: unknown) {
  return typeof str === 'string' && str.length > 0
}

function isEmptyObject(obj: Object) {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

