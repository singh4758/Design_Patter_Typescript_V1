/**
 * How the decorator pattern works ?
 * What its main benefit ?
 * How to implement it in TYpescript ?
 * 
 * Decoratorr Paatern respect open/close principle.
 * 
 * Dynamically Adding Responsibilities to an Object
 *
 *                                            Feature on Computer
 *                                                 Computer
 *          DedicatedGPU           Dual-Monitor                 Printer                 Mic 
 * 
 *                                       Class to implement above feature
 * 
 *                                                Computer
 *                    ComputerComponent(Decorator class)                               ConcreteComputer
 *                     It is decorator class so it is not real
 *                      It is feature.
 * 
 *                GPU     Dual-Monitor    Printer     Mic 
 */