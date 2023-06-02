import { injectable } from "inversify";
import { IDepA } from "./5. idepA";

@injectable()
export class ConcreteA implements IDepA {
  doA(): void {
      console.log('Doing A');
  }
}