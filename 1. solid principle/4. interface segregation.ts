/*
Que:- What is Interface Segregation ?
Ans:- A class should not depend on method that it does not need to implement.
                              or
      A class should not have to implement Methods it does not need
                  Keep Classess  and interfaces Compact

                              Segregate == Split
*/

/* 
  How to Recognize to use interface segregation?
  You don't know how to implement an interface method
  You are forced to leave the method empty.
  You are forced to throw a generic exception.
*/

export interface ISmartDevice {
  call(contact: string): void;
  sendSms(contact: string, content: string): void;
  openApp(path: string): void;
  connectToWifi(ssid: string, password: string): void;
}

export class Smartphone implements ISmartDevice {
  call(contact: string): void {
    console.log(`Calling ${contact}`);
  }

  sendSms(contact: string, content: string): void {
    console.log(`Sending ${content} to ${contact}`);
  }

  openApp(path: string): void {
    console.log(`Opening App ${path}`);
  }

  connectToWifi(ssid: string, password: string): void {
    console.log(`Connecting to Wifi ${ssid} with password ${password}`);
  }
}

let smartPhone = new Smartphone();
smartPhone.call("John");
smartPhone.sendSms("John", "Hey, How are you ?");


export class Tablet implements ISmartDevice {
  call(contact: string): void {
    console.log("This device cannot place a call");
  }

  sendSms(contact: string, content: string): void {
    throw new Error("This device cannont to a cell phone network.");
  }

  openApp(path: string): void {
    console.log(`Opening App ${path}`);
  }

  connectToWifi(ssid: string, password: string): void {
    console.log(`Connecting to Wifi ${ssid} with password ${password}`);
  }
}

let tablet = new Tablet();
tablet.call("John");
tablet.sendSms("John", "Hey, How are you ?");

