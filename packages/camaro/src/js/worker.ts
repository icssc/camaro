import Module from './camaro.js'

let cachedInstance: any

function callWasmBinding(methodName: keyof typeof cachedInstance, ...args: any[]) {
  if (!cachedInstance) throw new Error('camaro is not initialized yet.')
  return cachedInstance[methodName](...args)
}

const ready = new Promise<void>((resolve, _reject) => {
  if (!cachedInstance) {
    Module().then((instance: any) => {
      cachedInstance = instance
      resolve()
    })
  } else {
    resolve()
  }
})

async function yeet({ fn, args }: any) {
  await ready
  return callWasmBinding(fn, ...args)
}

export default yeet
