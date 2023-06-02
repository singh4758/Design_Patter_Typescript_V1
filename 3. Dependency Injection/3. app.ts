export function disable(target: Object, methodName: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => {
    throw new Error("Metod is disabled");
  }
}

export function before(hook: Function) {
  return function<T extends Function>(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    return {
      get: function(this: T) {
        let originalMethod = descriptor.value!.bind(this);
        hook = hook.bind(this);

        return () => {
          hook();
          originalMethod();
        }
      }
    };
  }
}

export function capitalize() {
  return function<T extends {new (...args: any): {}}>(constructor: T): T {
    return class extends constructor {
      _a = 'A';
      _b = 'B';
    }
  }
}

export class Whatever {
  private _a: string = 'a';
  private _b: string = 'b';

  @disable
  foo() {
    console.log('foo');
  }

  @before(() => { console.log('before hook') })
  bar() {
    console.log('bar');
  }

  baz() {
    console.log(this._a, this._b);
  }
}