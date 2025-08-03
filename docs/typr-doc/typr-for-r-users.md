---
sidebar_position: 1
---

# TypR for R users
 
Even though the syntax try to be as close as possible to R, there are 3 fundamental differences:

- Semicolon
- Let/mut declarations
- Types and other constructs

## Semicolons

Now, each declaration, assignation, expression (except the last one) must finish with a semicolon.
TypR allow more powerful constructs that needs a marker such as ";" to delimit them.
If there is an error, that mean you need to put a semicolon at the end of your expression.

```R
library(dplyr); # works
library(dplyr) # doesn't work
```

## Let/mut declarations

If you create a variable for the first time, your need to put a `let` or `mut` keyword.
If the with the let keyword, you won't be able to change the value of the variable again. The mut allows you to change the value after it's declaration.

```R
# Won't work since it was not declared previousely
a <- TRUE; 

# Works since it's an inital declaration
let a <- TRUE;

# Won't work because it's value can't be changed
a <- FALSE;

# Works since it's value can be changed
mut a <- TRUE;
a <- FALSE;
```

# Types and other construct

You don't need to use types, but if you are there, you are probably interested to use them for your project. Each well typed expression will give a specific type in return. Some basic R expression aren't type checkable and will automatically get the "Empty" type.

There are also other cool construct like type declaration, arrays, typed functions, etc. you can use. You can check the [Advanced_TypR](advanced-typr.md) page to do so.
