import { GameCharacterPool } from "./5. game-character-pool";

let level = 12;

let pool = new GameCharacterPool(level);

for(let i =0; i<40; i++) {
  console.log(i+1);
  console.log(pool.getWarrior());
}