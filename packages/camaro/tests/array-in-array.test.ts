import { test, describe, expect } from 'vitest'
import { transform } from '../src/js/index.js'

const xml = `
    <element>
        <item>outer0.arr0.0</item>
        <item>outer0.arr0.1</item>
        <item>outer0.arr0.2</item>
    </element>
    <element>
        <item>outer0.arr1.0</item>
        <item>outer0.arr1.1</item>
        <item>outer0.arr1.2</item>
    </element>
    <element>
        <item>outer1.arr0.0</item>
        <item>outer1.arr0.1</item>
        <item>outer1.arr0.2</item>
    </element>
    <element>
        <item>outer1.arr1.0</item>
        <item>outer1.arr1.1</item>
        <item>outer1.arr1.2</item>
    </element>
`

describe('array-in-array test', () => {
  test('should match all nodes', async () => {
    const template = {
      elements: ['//element', {
        items: ['.//item', '.']
      }]
    }

    const result = await transform(xml, template)

    expect(result).toEqual({
      elements: [
        { items: ['outer0.arr0.0', 'outer0.arr0.1', 'outer0.arr0.2'] },
        { items: ['outer0.arr1.0', 'outer0.arr1.1', 'outer0.arr1.2'] },
        { items: ['outer1.arr0.0', 'outer1.arr0.1', 'outer1.arr0.2'] },
        { items: ['outer1.arr1.0', 'outer1.arr1.1', 'outer1.arr1.2'] }
      ]
    })
  })
})
