---
sidebar_position: 1
---

# Getting started


## Installation

## For RStudio

You can check the [typr.runner](https://github.com/fabriceHategekimana/typr_runner) package to install it directly on RStudio.

## with Docker

You can visit it's repository [here](https://hub.docker.com/r/fabricehategekimana/typr).

To download the image, just use:

```bash
docker pull fabricehategekimana/typr:latest
```

You can run it with:

```bash
docker run -it --rm -v $(pwd):/workspace fabricehategekimana/typr:latest
```

## From Scratch
To install TypR, you will need to install `Rust` (of course you should have R installed in your system):

- R's installation page: https://www.r-project.org/
- Rust's installation page: https://www.rust-lang.org/
- Node's installation page: https://nodejs.org/en 

After that, you just need to install the cli `typr` (the transpiler) with `cargo` (installed with Rust):

```bash
cargo install typr
```

And you're good to go.

## Usage

Actually, the executable of TypR can:
- Type check the code
- Generate the target code (mainly R actually)
- Work project folders 

You can see all the faculties of the CLI with the help option:

```bash
typr --help
```

The prefered file extension is `.ty`. It has not it's own syntax highliter yet but I recommend you to use the one from Scala. For instance, if you want to execute a file named `app.ty`, you just need this command:

```bash
typr app.ty
```

## Basic documentation

- You can check the [TypR for R users](https://github.com/fabriceHategekimana/typr/wiki/TypR_for_R_users) page.
- Dedicated playlist on youtube French/English (subtitles in English) but full English version is comming soon): https://www.youtube.com/watch?v=ASPhszv88CM&list=PLSYhtt87oGAJH8Pe-VMcoBkQfek7VJ0hM 

## Roadmap

This project needs more refinement and the documentation will evolve throug it's iterations. Mainly, I am trying to reach thos goals:

- Update the documentation
- Dedicated WebSite
- Finish the type embedding's implementation
- Better interface inference
- Label Generics
- Vectorial blocs
- Finish Typescript/Javascript implementation
- JS blocs
- Finish WASM implementation

## Support this project

If you find this project useful or interesting, there are several ways you can support it:

- **Contribute** by improving the code, reporting issues, or suggesting features  
- **Donate** via [Patreon](https://patreon.com/FabriceHategekimana?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink) to help sustain development  
- **Share** the project with others who might benefit from it

Every contribution, no matter how small, helps this project grow. Thank you!
