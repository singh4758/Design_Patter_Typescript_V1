import 'reflect-metadata';
import { Container } from "inversify";
import { IDepA } from "./5. idepA";
import { TYPES } from "./5. types";
import { ConcreteA } from "./5. concreteA";
import { ConcreteB } from "./5. concreteB";

import { IDepB } from "./5. idepB";
import { IDepC } from "./5. idepC";
import { ConcreteC } from "./5. concreteC";

let container = new Container();
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA);
container.bind<IDepB>(TYPES.IDepA).to(ConcreteB);
container.bind<IDepC>(TYPES.IDepA).to(ConcreteC);

export default container;