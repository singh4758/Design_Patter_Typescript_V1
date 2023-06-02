class Computer {
  boot(): void {
    console.log('Computer is booting');
  }

  shutdown(): void {
    console.log('Computer is shutting down');
  }

  display(): void {
    console.log('Displaying content in one screen');
  }

  print(): void {
    console.log('No printer Found');
  }

  renderVideo(): void {
    console.log('Cannot render video without dedicated graphic card');
  }
}

class ComputerComponentDecorator extends Computer {

  constructor(private _computer: Computer) {
    super();
  }

  boot(): void {
    this._computer.boot();
  }

  shutdown(): void {
    this._computer.shutdown();
  }

  display(): void {
    this._computer.display();
  }

  print(): void {
    this._computer.print();
  }

  renderVideo(): void {
    this._computer.renderVideo();
  }
}

class ServerComputer extends Computer {
  boot(): void {
    console.log('Server is booting ...');
  }

  shutdown(): void {
    console.log('Server is shutting down ...');
  }
}

class ComputerPrinterDecorator extends ComputerComponentDecorator {
  constructor(private computer: Computer) {
    super(computer);
  }

  print(): void {
    console.log('Printin...');
  }
}

class ComputerDedicatedGPU extends ComputerComponentDecorator {
  constructor(private computer: Computer) {
    super(computer);
  }

  renderVideo(): void {
    console.log('Render video with dedicated GPU');
  }
}

let server = new ServerComputer();

let serverWithPrinter = new ComputerPrinterDecorator(server);
let serverWithPrinterAndDedicateGPU = new ComputerDedicatedGPU(serverWithPrinter);

serverWithPrinterAndDedicateGPU.print();
serverWithPrinterAndDedicateGPU.renderVideo();