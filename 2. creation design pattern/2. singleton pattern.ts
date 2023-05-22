/*
  What is singleton pattern ?
  You can have only single instance of a specefic class throughout the entire application.
  We are not using new keyword.
  We are going to use another method.

  Advantage:-
    Shared State
    Avoid long initializations
    Cross Class Communication
    Perfectly represent unique items
*/

export class StatsTracker {
  buttonClicks: number = 0;
  facebookShares: number = 0;
  twitterShares: number = 0;
  widgetViews: number = 0;

  constructor() {
    if(StatsTracker._instance) {
      throw new Error("cannot initialize singleton class using new");
    }
    StatsTracker._instance = this;
  }

  private static _instance = new StatsTracker();

  public static get instance(): StatsTracker {
    return StatsTracker._instance;
  }

}

let tracker = StatsTracker.instance;
tracker.buttonClicks = 90;
tracker.facebookShares = 64;
tracker.twitterShares = 20;
tracker.widgetViews = 30;


console.log(`button views ${tracker.buttonClicks}`);
console.log(`facebook views ${tracker.facebookShares}`);
console.log(`twitter views ${tracker.twitterShares}`);
console.log(`widget views ${tracker.widgetViews}`);


tracker.buttonClicks++;
tracker.facebookShares++;
tracker.twitterShares++;
tracker.widgetViews++;

