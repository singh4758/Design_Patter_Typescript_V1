import { injectable } from "inversify";
import { IDepB } from "./5. idepB";

@injectable()
export class ConcreteB implements IDepB {
  doB(): void {
      console.log('Doing A');
  }
}