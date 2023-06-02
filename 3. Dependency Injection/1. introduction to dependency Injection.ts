/*
  Introduction to Dependency Injection
  Creating a custom container
  Introduction to inversifyJs
  Dependency Scope
  
  In dependency injection "new" keyword is not allowed
  An OOP can not exist without "new" keyword
  Allowed to create instance of value object
  Factories

  You are not allowed to use "new" keyword with dependencies

                                                              Profile
                                                "depends on below Service and module"
                    UserService                             HttpClient                 Endpoints
      "depends on below Service and module"  "depends on below Service and module"
              HttpClient    AuthService                   XMLHttpRequest
*/

// Traditional Flow

export class ProfileService {
  private _userService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: EndPoints; 

  public constructor() {
    this._userService = new UsersService();
    this._httpClient = new HttpClient();
    this._endpoints = new EndPoints();
  }
}

//above one can be improved by

export class ProfileService {
  private _userService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: EndPoints; 

  public constructor(userService: UserService, httpClient: HttpClient, endPoints: ENdPoints) {
    this._userService = userService;
    this._httpClient = httpClient;
    this._endpoints = endPoints();
  }
}