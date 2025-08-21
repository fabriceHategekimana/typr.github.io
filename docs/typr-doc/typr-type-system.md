---
sidebar_position: 2
---

## Primitive types

Even though TypR try to be the closest possible to the type system of R, it also takes its own route for certain things and do the translation of R. For now, not all basic R data types are represented but TypR has its own representation.

*Basic types:*

Each basic type gives a vector of size 1 in R. Boleans are now the two lower-case values `true` and `false` instead of the uppercase one (TRUE, FALSE or T, F).

| name       | TypR  | R       |
|------------|-------|---------|
| Integers   | int   | integer |
| Numerics   | num   | numeric |
| Characters | char  | bool    |
| Booleans   | bool  | logical |

```javascript
let a: int <- 5;
let b: num <- 5.0; 
let c: char <- "5";
let d: bool <- true;

a
```

## Arrays

One can build an array from any types. Array keep the informations about the array size and it's type. As any other types, you don't need mention the type annotation. TypR can infer it for you.

*Difference with R*
Like R, TypR's array can only hold one type but this type can't change through time. It mean, all the member of the array must have the same type.

*Exemples*

```javascript
let a: [3, bool] <- [true, false, true];
let b <- [true, false, true];

a
```

Here `a` and `b` have both the type `[3, bool]` with and without the type inference. 

We can also define multidimensional arrays in that way:

```javascript
[[1, 2], [3, 4]]
```

This code will give you this result:

```
Type checking: 
[2, [2, int]]

Execution: 
     [,1] [,2]
[1,]    1    3
[2,]    2    4
```

The array type from TypR are recursive by definition. This mean an array `[I, T]` is the combination of an index `I` and a type `T`, so `T` can be any type including an other array type `[J, T]` so we can end with an array `[I, [J, T]]`. Since R doesn't support this feature, TypR is smart enougth to transform it to a classical Array type in R.

You can also add as much layer as you want (but not realy sure if it's that readable). You can create a tensor of dimension 3 (an array of arrays of arrays) in this fashion:

```javascript
[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
```

I will let you see the result by yourself. But be sure to respect the dimensionality or else it will not work.

*Sequences*

Like R, TypR let you define sequence of elements. For instance:

```javascript
1:4
```

Will give you this result:

```
Type checking: 
[4, int]

Execution: 
[1] 1 2 3 4
```

TypR also add the feature of defining steps:

```javascript
0:2:20
```

Just mean "start from zero by step of two until we reach 20". It will give this result:

```
Type checking: 
[11, int]

Execution: 
[1]  0  2  4  6  8 10 12 14 16 18 20
```

TypR offer capabilities to act on array indexing and build functions that define the shape an array should have. It's a powerful tool let typR infer and check the shape of a multidimensional array like a matrix. For instance, sequences generated are juste converted to the `seq` function in R. TypR has this definition for it:

```javascript
pub let seq <- fn(a: #I, b: #J, c: #K): [#J-#I/#K+1, int] {
	...
};
```

At this stage, you dont need to understand everything. This is just a function that take 3 parameters (#I for the start number, #J for the end number and #K for the step) The resulting index is a calculation (#J-#I/#K+1) that TypR can use to guess the shape of the resulting array. This type of generics are `index generics`, those are like super ints who have the power to be used in arrays' index. It give the power to define the resulting shape of complex operations like transpose or the dot product. A tutorial about this topic will come soon (since it can be a whole chapter by imself).

## Records

A record is a structure that hold different type of data. It's the equivalent of a named list in R. It has also his owns capability like the row polymorphism.

*Difference with R*  
TypR records are a subtype of R lists. You can't build a records with unlabeled values like in R. This restriction prevent unsafe and unpredictible operations to occure.

*Exemples*
To build a simple record representing a person with their name and age, you can just write:

```javascript
:{name: "John", age: 19}
```

Will generate:

```
Type checking: 
{name: char, age: int}

Execution: 
$name
[1] "John"

$age
[1] 19
```

To make a distinction with a scope and avoid long names like "list" or "record" for each object creation, We thought this notation will be easier to work with.

To access a member by it's label, you just have to call it in this fashion:

```javascript
let person <- :{name: "John", age: 19};

person.name
```

Here, we accessed the name of the person. Records are mainly there to keep together a set of data in a logical way

## Tuples

R tuples are a specific case of records. Indeed, they are just records who automaticaly generate numered labels. Here:

```javascript
:{"John", 19}
```

Will generate:

```
Type checking: 
{char, int}

Execution: 
[[1]]
[1] "John"

[[2]]
[1] 19
```

It's a faster and easier way to generate data on the fly.

## Functions

Since TypR is more oriented toward a functional style, functions are values and have a type by themself. They are then anonymous by default and should be set in variables.

*Difference with R*
There aren't that much difference with R except function are created with the `fn` keyword instead of the `function` one. Also `return` is not a function anymore but a keyword.

You can define a function with a type annotation but it's better to focus only on the function signature and let TypR infer the rest.

```javascript
let f <- fn(a: int, b: int): bool {
	a == b
};

f(8, 9) # will give false
```

TypR functions are the most complex elements of TypR since many action (metaprogramming + type checking) must be done in the calling. But a lot of sugar has been added so everyone can use them seemlessely.

## Tags

Tags are one of the algebraic data type (no need to know what an algebraic data type is yet) I needed the most but didn't know. I was asking myself wich kind of union type of union I should use (general union or tagged union), but those are the elements that bring at the same type the security and flexibility wanted for this language.


*Difference with R*

R don't have such a construct since, Tags, unions and even interface are an abstract concept to put some clarity and restriction to what the code should do. But compared to the others, tags are a kind of values and should exist in real R code. I have not made the implementation of the translation to R yet, but I think I will make

Tags are values that one can use on the fly. Each flag is unique and has its own type. It's useful do define some elements like:

```javascript
let none: .None <- None;
let nan: .NaN <- NaN;
let na: .NA <- NA;

none
```

If the tag is named `[tag_name]`, then it's base type is `:[tag_name]`. They are R's factors on steroïd and even Rust's enums on steroïd. You can use them to define some collections (like the Day of the week, gender, etc.).

Tags can also handle one type with them:

```javascript
let results: .Val(num) <- Val(7.3);
let person: .Person({name: char, age: int}) <- Person(:{name: "Marc", age: 37});

results
```

Okay but what are their power ? Well they can be unified together inside a union type ! But here we will see how useful it is for return type in a if close:

```javascript
if (true) {
	7
} else {
	"seven"
}
```

Here, TypR wont accept this code since `7` (`int`) and `"seven"` (`char`) aren't the same type. But if we use tags:

```javascript
if (true) {
	Value(7)
} else {
	String("seven")
}
```

The return type will be `.Value(int) | .String(char)` meaning TypR will automaticaly unify the results if they are tags. Tags must be "unwrapped" to access the values within, forcing a user to handle the different cases.

## Union

Union are an abstract concept that won't really appear in the resulting R code. In summary, you can unify any kind of type. You can now regroup tags to create other type. For instance, to create an option type, one can create an alias into this union of values:

```rust
let a: int | bool <- FALSE;

a
```

It will give:

```bash
Type checking:
int | bool

Execution: 
[1] FALSE
attr(,"class")
[1] "logical" "Union0"  "Generic"
```

We can't use the result as we want. For instance:

```rust
let a: int | bool <- 5;

a + 3
```

Will give:

```bash
Err(  × Type error: type int | bool doesn't match type int
   ╭─[app.ty:3:14]
 2 │ 
 3 │ let a: int | bool <- FALSE;
   ·              ▲
   ·              ╰── Expected int | bool
 4 │ 
 5 │ 
 6 │ a + 3
   ·     ┬
   ·     ╰── Recieved int
   ╰────
)
```

Because TypR can't find a the definition of the `+` operator that apply to a type `int | bool` and a type `bool`. TypR will let us do that if we prove it we are working with an integer. You can do that using the `match` block that will take into account each type case:

```rust
let a: int | bool <- 5;

match a as x {
	int => x + 3,
	bool => 0
}
```

```bash
Type checking:
int

Execution: 
[1] 8
attr(,"class")
[1] "integer" "Union0"  "Generic"
```

You can also work with union of tags:

```R
type Option<T> = .Some(T) | .None;
```

And if my function can return a `Na` and a `NaN` instead of an int value you can define your own type:

```R
type Failable<T> = .Value(T) | .NaN | .Na | .None;
```

This method is more flexible than an enum like Rust and more secure than an union from TypeScript.

## Interfaces (nightly)

TypR interfaces works like Go's interfaces. It's a typed way of doing duck typing: If it walks like a duck and quacks like a duck, then it's a duck. So there is no implicit implémentation of an existing interface.

*Difference with R*
There is no concept of union in R so nothing to compare.

You can define an interface in this fashion:

```javascript
type Addable = interface {
	add: fn(a: Self, b: Self): Self,
};
```

You can then define a function that take any addable type in this way:

```javascript
let time3 <- fn(n: Addable) {
	add(n, (add(n, n))
};
```
