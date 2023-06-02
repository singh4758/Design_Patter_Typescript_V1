import { IDepC } from "./5. idepC";
import container from "./5. inversify.config";
import { TYPES } from "./5. types";

let c= container.get<IDepC>(TYPES.IDepC);

c.doC();