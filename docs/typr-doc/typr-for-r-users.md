---
sidebar_position: 1
---

# TypR for R users
 
Even though the syntax try to be as close as possible to R, there 1 fundamental difference: Semicolons.

## Semicolons

Now, each declaration, assignation, expression (except the last one) must finish with a semicolon.
TypR allow more powerful constructs that needs a marker such as ";" to delimit them.
If there is an error, that mean you need to put a semicolon at the end of your expression.

```R
library(dplyr); # works
library(dplyr) # doesn't work
```

## Philosophy: flexibillity and type safety


### What is TypR 

"TypR" is a word game with Typescript (a superset of JavaScript) and the common way of naming things in the R community. The initial goal is to create a better experience with building packages for R (I want them to be easily compatible with the CRAN's requirements and to be easy to ship). Indeed, TypR *is not only a type checker* but bring greater tools to build packages for data science in general and want to be an easy way to convert research paper into code. TypR add gradual typing, great static types and a flexible syntax with some cool tricks (metaprogramming) that make it great to work with.

### What TypR is not

Although TypR looks like the next cool kid in the town with a syntax greatly inspired by R, Rust and has many interesting feature from Go, Nim and Roc, it doesn't try to replace them at all but tend to help package builder and manager to reach their goals. This will help many developper, to bring value into the R community and the datascience community in a broader scope. 

Even though it looks strongly like it and follow its principles, TypR is not fundamentally OOP. As well as R who is more of a functional programming language, TypR follow this path for good reasons. Firstly because the realm of datascience is flooded with programming languages who are more on the Object oriented programming side. Don't get me wrong, it has its own strength but its own weaknesses too. Especially because it has his own limits in element representation (uniquely done with OOP) and strange design patterns that could be made easier with functional programming. Functional programming offer a bit more high level representation with less headache and the power of creating easy pipelines and parallelizable code.


## First code

Let's build our first exemple! You can create a file named `app.ty` (or the name you want). TypR has a generalized syntax for building type. To create a numeric, you just have to write:

```rust
a <- 5.0;

a
```

You can now run it with this command:

```bash
typr app.ty
```

You will get this result:

```
Type checking: 
num

Execution: 
[1] 5
```

As you can see, typR display two things. The first is the result of the type checking. TypR know that you defined a numeric so the expression `a` evaluate to the type `num` (=numeric).

The second thing displayed is the evaluation of the value of the variable `a`. Since we created it with the value `5.0` it take it as it is.

The `typr` binary created three files to do this task. They exist in the current directory and are respectively named `std.R`, `app.R` and `std.ty`. `std.ty` is the file containing a set of predefined variables and types that will be present in each project. `std.R` contains some utilitarian function to type and interpret basic operator (see `operator overloading`). There are some default R functions and predefined TypR functions. The `app.R` is the main file with the type annotation removed:

```R
# [other prebuild stuffs to work with typR]
# ...

a <- 5
a
```

You don't need to pay attention to the first lines of the document but to the last two lines. As you see, it's almost the same thing as the `app.ty` document with the exception of some element removed (the "let", and the type annotation). Of course TypR is not just R with types but it brings other great constructs from metaprogramming that will also bring a simpler syntax in TypR. It will build some code for you on the R's side. You can play with it and see it for yourself.

## Static typing

In TypR, each variable keep their types once set. If we keep the previous example and try to set the logical value `TRUE`, TypR won't permit it.

```rust
a <- 5.0;
a <- TRUE; 

a
```

It will lead to this error:

```bash
Err(  × Type error: type num doesn't match type bool
   ╭─[app.ty:1:1]
 1 │ a <- 5.0;
   · ▲
   · ╰── Expected num
 2 │ a <- TRUE;
   ·      ┬
   ·      ╰── Recieved bool
 3 │ 
   ╰────
)
```

Indeed, for TypR, `a` has already the type `int` (=integer) so it can't take a new type `bool` (=logical). This feature is there so the kind of value a variable recieve stay consistent. For instance, it can help to be sure the modifications made to a variable holding a dataframe still return a dataframe if we want to reasign them to the same variable.

If you still want to change the type of a variable, you can use the `let` keyword so TypR know you are declaring a new type for the variable.

```rust
a <- 5.0;
let a <- TRUE; 

a
```

This will lead to this result:

```bash
Type checking:
bool

Execution: 
[1] TRUE
```

Another advantage of the `let` keyword lies in the fact you have a visual indication of where a variable is declared in your code. It can be a good habits to put `let` at each variable declaration and omitting it when your just assigning a new value.


## Types and other construct

Exept from primitive types and lists. Other function call like `c()` will lead to the `Empty` type even if it doesn't match the value.

```rust
c(1, 2, 3, 4)
```

Will give:

```bash
Type checking:
Empty

Execution: 
[1] 1 2 3 4
```

But there are 2 ways to add types to things. 

### Typing with "let"

You can assign arbitrary types to the result of an R function call by just "Forcing" it to a hosting variable.

```rust
let a: int <- c(1, 2, 3, 4);

a
```

Will give:

```bash
Type checking:
int

Execution: 
[1] 1 2 3 4
```

todo: warning about arbitrary type

### Typing with "@" 

You can define the signature of an existing function. For instance, you can define a signature for the `c()` function with 4 elements:

```rust
@c: (int, int, int, int) -> int;
c(1, 2, 3, 4)
```

Will give:

```bash
Type checking:
int

Execution: 
[1] 1 2 3 4
```

todo: warning limitation of function with arbitrary number of parameters;

## Typing custom functions

If you want to type a custom function, you have to write it with the `fn` keyword. TypR will require you to set a type for each parameter and for the return value.

```rust
let addition <- fn(a: int, b: int): int {
	a + b
};

addition(3, 4)
```

Will give:

```bash
Type checking:
int

Execution: 
[1] 7
```

One thing important to know, TypR use by default `S3` for any typed values. That mean, TypR will create a "typing" function that will give a specific class to any value (even function) and will create generic functions if they don't exists.

```R
Function1 <- function(x) x |> struct(c('Function1', 'Generic', 'Function0'))

addition <- function(x, ...) {
	UseMethod('addition')
}


addition.integer <- (function(a, b) {
 add(a, b) 
}) |> Function1()

addition(3L, 4L)
```

## Typing existing S3 classes

If you know an existing S3 class that you want to set up.

For instance you know that a dataframe is of class `data.frame`. You can set in by using a type definition. TypR will assign automatically the right kind of S3 classes.

```rust
type Dataframe = Class("data.frame");

let df: Dataframe = read__csv("path/to/your/csv");

df
```

This would give you:

```bash
Type checking:
Dataframe

Execution: 
...
```

todo: classes with mutliple children

There are also other cool Features you can use. You can check the [Advanced_TypR](advanced-typr.md) page to do so.
