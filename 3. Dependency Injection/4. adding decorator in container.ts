/*
  Adding a constructor decorator to our classes
  Registration dependencies using the decorator 
*/

/*
  The basic of a DI container
  How to implement a DI container
  How to use it

  DI container == IOC Container

  IUserService
                  ===>   DI Container ===> IUserService  ===> UserService
  UserService

  We want to support the registration of a class type by interface.

This means that the user will be providing an interface. In this case I use our service and the type.
In this case user service and the two will be paired inside the private dictionary in typescript.
This can be a plain javascript object. Later when we request the concrete implementation by its
interface which is exactly what the dependency inversion principle tells us to do we will get a
concrete implementation back. How's that any different than the regular dictionary or typescript object.
Well there's a catch and that is the fact that we do not pass a concrete implementation of the user
service. Rather we pass that type the container will be responsible for actually invoking the constructor.
Personally the required dependencies to make this work and returning You instance every time so our
container will consist of two very important operations of registration of new types of dependency
resolution.

IUserService ===>  DI Container ===> UserService

What is Reflection?
  The ability to make use of code metadata to provide runtime information and inspection data
  about classess, interface and types.

  Get the name of method
  Know the type of method's argument list
  Retreive assembly information
  Allow dependency injection to work

  Use string key instead of interfaces
*/


export class IocContainer {
  private static _instance: IocContainer = new IocContainer();
  private _dependencies: {[key: string]: Object} = {};

  private constructor() {
    if(IocContainer._instance) {
      throw new Error("singleton class cannot use new");
    }
  }

  public static get instance(): IocContainer {
    return IocContainer._instance;
  } 

  register(name: string, dependencies: string[], implementation: any) {
    if(this._dependencies[name]) {
      throw new Error('Dependency already registered');
    }
    let dependenciesImplementation = this.getDependenciesImplementations(dependencies);
    this._dependencies[name] = new implementation(...dependenciesImplementation);
  }

  resolve<T>(name: string): T {
    if(!this._dependencies[name]) {
      throw new Error(`Unresolved dependencies ${name}`);
    }
    return this._dependencies[name] as T;
  }

  private getDependenciesImplementations(names: string[]): Object[] {
    return names.map((name) => this.resolve(name))
  }
}

export function Register(name: string, dependencies: string[]): Function {
  let container = IocContainer.instance;
  return function<T extends { new (...args: any[]): Object}>(constructor: T) {
    container.register(name, dependencies, constructor);
  }
}