To convert a ts file to a js file

tsc fileYouWantToConvert.ts

Et voila, that will convert it to a js file.



## Creating a TS Project

`tsc --init`

This will create the tsconfig.json file

## Compiling

Uncomment line 50 in the ts config to specify where the compiled files will go.  (in the dist folder)

tsc -w = Continually watch for the ts file changes and compile on code changes

The command tsc src/index.ts will compile the file into the same location, got for doing a test but not what you want normally.