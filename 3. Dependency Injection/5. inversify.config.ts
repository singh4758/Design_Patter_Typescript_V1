import 'reflect-metadata';
import { Container } from "inversify";
import { IDepA } from "./5. idepA";
import { TYPES } from "./5. types";
import { ConcreteA } from "./5. concreteA";
import { ConcreteB } from "./5. concreteB";

import { IDepB } from "./5. idepB";
import { IDepC } from "./5. idepC";
import { ConcreteC } from "./5. concreteC";

let container = new Container({
  defaultScope: 'Singleton',
});

// IDepA will be singleton
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();
//IDepB will be transient. We will get a new instance every time we request one
container.bind<IDepB>(TYPES.IDepA).to(ConcreteB).inTransientScope();
// IDepC  will be request scope. It will return same instance until we call container.unbind
container.bind<IDepC>(TYPES.IDepA).to(ConcreteC).inRequestScope();

export default container;