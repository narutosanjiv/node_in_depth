# node_in_depth

[Stephen Grider Tuturial Link](https://www.udemy.com/course/advanced-node-for-developers/)

Find out No. of CPU on Mac OS X
======
***
**sysctl hw.physicalcpu hw.logicalcpu**
Above command display both logical and physical CPU cores. 

Behaviour of [Multithread](./advanced_concepts/multithread.js) Application
=========

> *Note*: Result may varies depending on Physical and logical CPU cores. 

Currently, Default value for UV_THREADPOOL_SIZE is 4, this may not hold true for future versions of Node.js, this is true for current version of Node.js(10.x)

This test is run on 4( and 8 logical core) Physical Core, test may differ based on system workload and configuration. 
Below is run with default with default UV_THREADPOOL_SIZE(4)

```
Function  | Total Time 
__________________
https   255
Hash2   1190
Hash1   1200
File Read 1200
Hash4   1201
Hash3   1205
Hash5   2296
```
With UV_THREADPOOL_SIZE = 6
