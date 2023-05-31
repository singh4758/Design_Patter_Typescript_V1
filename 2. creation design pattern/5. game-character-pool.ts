import { GameCharactersFactory } from "./5. game-characters-factory";
import { GameCharacter } from "./5. igame-character";

export class GameCharacterPool {
  private _warriorPool: GameCharacter[] = [];
  private _magePool: GameCharacter[] = [];

  static WARRIOR_POOL_SIZE = 30;
  static MAGE_POOL_SIZE = 30;

  constructor(private _level: number) {
    this.loadWarriorsPool();
    this.loadMagePool();
    
  }
  loadWarriorsPool() {
    for(let i = 0; i<GameCharacterPool.WARRIOR_POOL_SIZE; i++) {
      this._warriorPool.push(GameCharactersFactory.getWarrior(this._level));
    }
  }
  loadMagePool() {
    for(let i = 0; i<GameCharacterPool.MAGE_POOL_SIZE; i++) {
      this._magePool.push(GameCharactersFactory.getMage(this._level));
    }
  }

  private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
    let item: T = pool.pop() as T;
    if(!pool.length) {
      reloadFn();
    }
    return item;
  }

  public getWarrior(): GameCharacter {
    return this.getPoolItem(this._warriorPool, this.loadWarriorsPool.bind(this));
  }

  public getMage(): GameCharacter {
    return this.getPoolItem(this._magePool, this.loadMagePool.bind(this));
  }
}