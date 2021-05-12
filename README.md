# Test with *Factory Functions* in place of standard classes

Factory function returning a frozen object instead of a class.

Based on Douglas Crockford ideas.

* Based on closures, no `this` keyword
* Prototypes are frozen
* internal properties are immutable from outside
* methods cannot be modified/added
* no prototype duplication

`myCounter.ts` exports a factory function, creating a set of closures, behaving like a class, with the differences described above.
