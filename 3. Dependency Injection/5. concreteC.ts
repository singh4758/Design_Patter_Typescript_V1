import { inject, injectable } from "inversify";
import { IDepA } from "./5. idepA";
import { IDepB } from "./5. idepB";
import { IDepC } from "./5. idepC";

@injectable()
export class ConcreteC implements IDepC {
  constructor(
    @inject('IDepA') private _concreteA: IDepA,
    @inject('IDepB') private _concreteB: IDepB
  ) {

  }
  doC(): void {
    this._concreteA.doA();
    this._concreteB.doB();
    console.log('Doing C');
  }
}