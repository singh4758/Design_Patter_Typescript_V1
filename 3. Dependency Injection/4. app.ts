import { IocContainer } from "./2. di container";
import { Register } from "./4. adding decorator in container";

interface IDepA {
  doA(): void;
}

interface IDepB {
  doB(): void;
}

interface IDepC {
  doC(): void;
}

@Register('IDepA', [])
class ConcreteA implements IDepA {
  doA(): void {
      console.log('Doing A');
  }
}

@Register('IDepB', [])
class ConcreteB implements IDepB {
  doB(): void {
      console.log('Doing A');
  }
}

class ConcreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {

  }
  doC(): void {
    this._concreteA.doA();
    this._concreteB.doB();
    console.log('Doing A');
  }
}

let container = IocContainer.instance;
container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);

// let a = container.resolve<IDepA>('IDepA');
// a.doA();

// let b = container.resolve<IDepB>('IDepB');
// b.doB();

let c = container.resolve<IDepC>('IDepC');
c.doC();