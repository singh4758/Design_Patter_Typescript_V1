/*
Que:- What is Open/Closed Priniciple ?
Ans:- Open to Extension
      Closed to Modification.

      It means once you are completed the class and done with unit test cases.
      We should effective seal it. And avoid further modification.
Que:- What about new Functionality ?
Ans:- Add functionality by extending it.
*/

// this is already complete class

export class ErrorHandler {
  private messageBox: any
  constructor(messageBox) {
    this.messageBox = messageBox;
  }

  wrapError(err, publicResponse, severity) {
    let error = {
      originalError: err,
      publicResponse,
      severity,
    }
    if(severity < 5) {
      this.handleWarning("Warning", publicResponse);
    } else {
      this.handleError("Error", publicResponse);
    }
  }

  private handleWarning(header, content) {
    this.messageBox.show(header, content);
  }

  private handleError(header, content) {
    this.messageBox.show(header, content);
  }
}

// Add a logger
// Inject an http Client
// Log error to our server


// Violet principle

export class ErrorHandler {
  private messageBox: any;
  private httpClient: any;
  constructor(messageBox, httpClient) {
    this.messageBox = messageBox;
    this.httpClient = httpClient;
  }

  wrapError(err, publicResponse, severity) {
    let error = {
      originalError: err,
      publicResponse,
      severity,
    }
    this.httpClient.post("/api/log", error);
    if(severity < 5) {
      this.handleWarning("Warning", publicResponse);
    } else {
      this.handleError("Error", publicResponse);
    }
  }

  private handleWarning(header, content) {
    this.messageBox.show(header, content);
  }

  private handleError(header, content) {
    this.messageBox.show(header, content);
  }
}

// Correct Way

export class ErrorHandler {
  private messageBox: any;
  constructor(messageBox) {
    this.messageBox = messageBox;
  }

  wrapError(err, publicResponse, severity) {
    let error = {
      originalError: err,
      publicResponse,
      severity,
    }
    if(severity < 5) {
      this.handleWarning("Warning", publicResponse);
    } else {
      this.handleError("Error", publicResponse);
    }
  }

  private handleWarning(header, content) {
    this.messageBox.show(header, content);
  }

  private handleError(header, content) {
    this.messageBox.show(header, content);
  }
}

export class ErrorHandleWithLogger extends ErrorHandler {
  private _httpClient: any;
  constructor(messageBox, httpClient) {
    super(messageBox);
    this._httpClient = httpClient;
  }

  wrapError(err: any, publicResponse: any, severity: any): void {
    let error = {
      originalError: err,
      publicResponse,
      severity,
    }
    return this.logError(error).then(() => {
      super.wrapError(err, publicResponse, severity);
    });
  }

  logError(errorObject){
    return this._httpClient.post("/api/log", errorObject);
  }
}