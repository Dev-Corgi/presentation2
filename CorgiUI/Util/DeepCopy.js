export function deepCopy(instance) {
    const newInstance = new instance.constructor(...Object.values(instance));
    return newInstance;
  }