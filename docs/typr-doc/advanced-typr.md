---
sidebar_position: 3
---

# Advanced Typr

## Uniform function call

UFC (uniform function call) is one of my favourite features in programming language. I love the simplicity of methods, but I am not a fan of classes anymore since they are less expressive than algebraic data types in general. But working with my functions using types and module and pipes isn't totaly complet without methods call. So UFC bring the best of both worlds to me. I have also added some other forms with the original.

For instance, we can see the definition of the add function for interger types:

```javascript
let incr <- fn(a: int): int {
	a + 1
};
```

Now we can call it in different ways that gives the same results:

```javascript
incr(2)
(2).incr()
2 |> incr()
```

There are the special elements `..` or `|>>` that make a function operate on an array level.

```javascript
[1, 2, 3]..incr()
[1, 2, 3] |>> incr()
```

This code will apply an addition with 3 for each element.

## Operator overloading

Operator overloading is one of my favourite element to build operations on types. It's a shortcut and a syntax sugar that let the user define operations for their custom types.

Imagine we create a type named point:

```javascript
type Point = {x: int, y: int};

let p1 <- :{x: 2, y: 1};

p1
```

You can define a function `add` to add two points. Let's assume you just add each coordinates.

```javascript
let add <- fn(p: Point, q: Point): Point {
	:{x: ((p.x) + (q.x)), y: ((p.y) + (q.y))}
};
```

You can obviously use the function in differtent ways:

```javascript
add(p1, p1)
p1.add(p1)
p1 |> add(p1)
```

But you can also add point in this fashion:

```javascript
p1 + p1
```

Why is it possible ? Because `add` is a reserved symbol related to the binary operation `+`. So each time TypR see a `a+b`, it transform it to `add(a, b)`.

There are a group of reserved operators that change to their function's form.

| operator | function name |
|----------|---------------|
| +        | add           |
| ++       | add2          |
| -        | minus         |
| --       | minus2        |
| *        | mul           |
| **       | mul2          |
| /        | div           |
| //       | div2          |
| @        | at            |
| @@       | at2           |

You don't have to worry about the usage of if an operator is related to an other type. Each type can use each symbol once.

## Modules (nightly)

Modules are a useful tool that allow us to use the same name but in a different scope.

```javascript
module Foo {
	pub let my_var <- "hey";
};

module Bar {
	pub let my_var <- true;
};

let my_var <- 7;

Foo::my_var
Bar::my_var
my_var
```

In this exemple, my_var is defined in 3 different place with a different value and even a different type each time. But if `my_var` is defined in a module like in the `Foo` or `Bar` module then we need to prefix the module name to have access to this variable.

In OOP language we think in term of class and object, in language with a functional programming paradim orientation like TypR, we think in term of types. A type can be refered at any moment in the program and function that works with this type can also be declared at any moment in the program. This is why module exists: if needed, we can group types and their related functions in the same place and give it a name for reference.

```javascript
# not working yet
module Cat {
	pub type Cat = {name: char, age: int};
	
	pub let cry <- fn(c: Cat): char {
		"meow"
	};
};

let felix <- :{name: "Felix", age: 8};
Cat::cry(felix)
```

## Struct embedding (nightly)

Comming soon...


## Generics + Index Generics

Generics is one of the hardest concept in this language, especially when we talk about Index Generics.

In complex terms, generics is a way to create functions that allows functions to work with more types related to specific relationship with parameters (Parametric polymorphism).

Since it allow almost any type, it's better to use them for structural and general purpose. For instance, it's great to describe data structures that can works with many types (like array, graphs, tree, etc.). It's also greate to use it to shape function composition.

