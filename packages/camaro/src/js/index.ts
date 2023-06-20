import { resolve } from 'path'
import WorkerPool from '@ap0nia/piscina'
import yeet from './worker.js'

let pool = createPool()

function createPool() {
  const NODE_MAJOR_VERSION = parseInt(process.versions.node.split('.')[0])

  if (NODE_MAJOR_VERSION >= 12) {
    const pool = new WorkerPool({ 
      fn: yeet,
      filename: resolve('worker.js') 
    })
    return pool
  }

  console.warn('[camaro] worker_threads is not available, expect performance drop. Try using Node version >= 12.')

  const workerFn = require('./worker')

  const pool = {
    run: async (...args: unknown[]) => workerFn(...args)
  }

  return pool
}

/**
 * Convert an XML string to JSON based on the XPath template object.
 * @param xml The XML string.
 * @param template An XPath template object.
 * @returns The xml converted to json object based on the template.
 */
export function transform(xml: string, template: Object): Object {
  if (!isNonEmptyString(xml)) {
    throw new TypeError('1st argument (xml) must be a non-empty string')
  }

  if (!template || typeof template !== 'object' || isEmptyObject(template)) {
    throw new TypeError('2nd argument (template) must be an object')
  }

  return pool.run({
    fn: 'transform',
    args: [xml, JSON.stringify(template)],
  })
}

/**
 * Convert an XML string to JSON object.
 * @param xml The xml string.
 * @returns A JSON object converted from the input XML string.
 */
export function toJson(xml: string): Object {
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
export function prettyPrint(xml: string, opts: PrettyPrintOptions = { indentSize: 2 }) {
  if (!isNonEmptyString(xml)) {
    throw new TypeError('expecting xml input to be non-empty string')
  }
  return pool.run({ fn: 'prettyPrint', args: [xml, opts] })
}

function isNonEmptyString(str: unknown) {
  return typeof str === 'string' && str.length > 0
}

function isEmptyObject(obj: Object) {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

