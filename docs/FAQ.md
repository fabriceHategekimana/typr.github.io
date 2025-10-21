### I don’t understand anything, what is TypR for non‑experts?

One way to classify programming languages is the interpreted / compiled distinction. A compiled language translates code directly into machine language, which gives good performance but makes development more rigid because all the code must be compiled to get a result. R is an interpreted language and therefore has the great ability to be dynamic. It means that all values can change interactively, giving it a lot of flexibility (you can think of being able to run code line by line). Another major advantage is that you don’t have to specify the types of an object. For example, when I declare a variable I don’t need to say whether it’s an integer or text; the interpreter infers it automatically. It’s also possible to change a variable’s type later.

While this is a huge advantage for statistics and data science prototyping, the approach is less efficient for producing predictable programs, which is desirable when building libraries and applications. For instance, we want to be sure that an operation returns only a number and nothing else, or that only characters are used in a certain part of the code, etc. With standard R code you cannot do this reliably. One way is to write code that checks each object every time so the program stops when a rule is violated. But that solution isn’t very practical because you have to do it systematically, which is tedious, opens the door to more errors, and significantly increases code size. Moreover, you only discover a problem when the code runs. Imagine the code takes an hour to execute; the error might only surface after 45 minutes, which is a substantial waste of time for debugging. We’d like to see the error before even launching the code.

That’s why introducing a type system, by allowing you to declare a type when creating objects, helps increase predictability. The burden of checking that all parts of the code are compatible falls to the computer, which can tell us, even before the code is run (or right after the line is written), whether there are type errors. This makes the development experience much more pleasant.

### What TypR is not

- TypR is not a replacement for R.
- TypR is not a faster version of R.
- TypR is not just R with types added.

### What TypR is

TypR is a superset of R whose goal is to improve type safety in the R language. It lets you catch errors early and makes code more predictable and easier to debug.

TypR uses its own file extension ".ty", which is basically R with a few differences (mainly semicolons at the end of each code statement and double underscores instead of dots for object and function names).

TypR comes with its own runner that transforms these ".ty" files into regular ".R" files (standard R code). It also allows you to return the result of a calculation immediately. Additionally, it can compile TypR code to JavaScript or WebAssembly, although that part is still experimental.

The runner can be found in the [TypR runner package](https://github.com/fabriceHategekimana/typr_runner) or via its [Docker container](https://hub.docker.com/r/fabricehategekimana/typr).

### Why TypR? "R is perfect as it is"

Yes, R is great as it stands! The ease with which we can write R code is truly satisfying. R is dynamic by nature, so it’s very easy to test each line quickly and fix things on the fly. However, what feels like a strength for statistics and data science becomes a major drawback when you move to higher‑level development where predictability and safety take precedence over rapid prototyping. TypR helps in that context by adding useful development‑oriented features to R. Which means you can use TypR for developement and R for the rest.

### Will it replace R?

No. TypR is complementary to R. Because TypR is a superset, it ultimately produces ordinary R code. It is intended for development work, while classic R usage for statistics, data science, or routine mathematics will continue unchanged. Think of it as an additional tool rather than a replacement.

### Do I need to learn a new language?

No. You can use the usual R syntax in TypR, which enables gradual typing by adding TypR’s type syntax incrementally. Although any valid R code is also valid TypR, there are a few TypR‑specific rules that differ from classic R. In particular, each code expression (line) must end with a ";", and functions or variables that normally contain a "." must use double underscores "__" instead (like `install__packages()`).

Of course, TypR goes beyond simple type annotations and offers advanced code‑management techniques such as uniform function calls. More details are on the [Advanced TypR page](https://fabricehategekimana.github.io/typr.github.io/build/docs/typr-doc/advanced-typr).

### Is TypR hard to learn?

No. If you already know R, you can become comfortable with TypR in less than a week. It is mostly "R with types".

### Should I use TypR?

For simplicity, think of the R community as having two groups: users and developers. Users employ R to solve problems and rely on existing packages. Developers, on the other hand, create their own packages or build applications/tools with R. If you’re a user, you probably don’t need TypR since R will do the job fine. If you are a developer, TypR could greatly benefit your projects. In fact, it is more about "when" to use TypR than "who" should use it.

### Will it make R faster?

No types do not make code faster. It’s a common misconception. It is true that compiled languages (often explicitly typed) are fast while interpreted languages (usually untyped) are slow. While compilation can boost performance and explicit types sometimes help compilers optimize, many languages break that rule. For example, Julia is a high‑performance language that is optionally typed. In Julia, explicit types don’t necessarily make it faster; they mainly enable multiple dispatch. Similarly, TypeScript is a superset of JavaScript that adds types, but it doesn’t make JavaScript run faster, it rather just makes the code more predictable and easier to debug.

### What are the benefits?

- More predictable code.
- Clearer, more explicit errors.
- More expressive code.
- New compilation targets (JavaScript, WebAssembly).

### How do I get started?

Begin by visiting the [Getting Started section](https://fabricehategekimana.github.io/typr.github.io/build/docs/typr-start/getting-started).

### Who is behind TypR?

[Fabrice Hategekimana](https://github.com/fabriceHategekimana) and some members of WeData [Vestin Hategekimana](https://github.com/CyuHat) and [David Munõz Tord](https://github.com/munoztd0).