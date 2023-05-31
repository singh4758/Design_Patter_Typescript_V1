/*
  What is Object Pool ?
    A pool of pre-initialized objects whose initialization is heavy weight.
    
    Every time we need such an object we take one from the pool.
    
    Once we are donw with it, we return it back to the pool.
  Is the object pool depreceated?
    Their main point is that with the advancements in programming languages and the general spending which
    instantiate objects having to maintain and not to pull is more of a headache than it is useful however
    object pulling is still useful in game development in games where you have a balance of disposable instances
    like enemy's bullets or trees.
    It's nice to not have to initialize them all over again every time you need them.
*/


export interface GameCharacter {
  strength: number;
  dexterity: number;
  health: number;
  magic: number;
}
