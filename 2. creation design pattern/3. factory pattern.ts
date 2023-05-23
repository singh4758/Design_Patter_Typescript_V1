/*
  What is factory pattern ?
    A combination of single responsibility and open/closed principles
*/

export interface GameCharacter {
  strength: number;
  dexterity: number;
  health: number;
  magic: number;
}

export class GameCharactersFactory {
  public static getWarrior(level: number): GameCharacter {
    let warrior: GameCharacter;
    if(level < 10) {
      warrior = {
        strength: 18,
        dexterity: 12,
        health: 20,
        magic: 0,
      }
    } else {
      warrior = {
        strength: 30,
        dexterity: 21,
        health: 32,
        magic: 0,
      }
    }

    return warrior;
  }

  public static getMage(level: number): GameCharacter {
    let mage: GameCharacter;
    if(level < 10) {
      mage = {
        strength: 18,
        dexterity: 12,
        health: 20,
        magic: 0,
      }
    } else {
      mage = {
        strength: 30,
        dexterity: 21,
        health: 32,
        magic: 0,
      }
    } 

    return mage;
  }
}