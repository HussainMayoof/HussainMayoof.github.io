---
featured: true
category: experiments
title: CHIP-8 Interpreter
description: A simple CHIP-8 interpreter/emulator
image: '@assets/projects/chip-8-interpreter/image.png'
startDate: 2026-08-23
skills:
  - Python
  - uv
  - Emulation
sourceLink: https://github.com/HussainMayoof/CHIP8Interpreter
---
This is my first emulator-adjacent project. I want to use this as a starting point to hopefully be able to develop emulators for more advanced systems and consoles, and I hope to be able to create a basic Game Boy emulator within the coming weeks after I complete this.

---

## Features

- Fully designed font created by me
- Currently only supports original CHIP-8 games
- Partial functionality

---

## Usage

> **Prerequisites**
> 
> - [uv](%5Bhttps://www.python.org/downloads/%5D\(https://docs.astral.sh/uv/getting-started/installation/\))

1. Run `uv sync` to install dependencies
1. Run the following command to start the emulator

```bash
uv run main.py "path-to-rom"
```

---

## Resources Used

I would like to thank the authors of the following materials for their invaluable contribution to this project

- [Guide to making a CHIP-8 emulator](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/#keypad) by Tobias Langhoff
- [SDL Wiki](https://wiki.libsdl.org/SDL3/FrontPage) and [PySDL3](https://github.com/Aermoss/PySDL3)

---

## To Do

- Add sounds
- Add GUI
- Add debugging
- Add SUPER-CHIP support
- Add XO-CHIP support
- 3DS port? (This will probably never happen)
