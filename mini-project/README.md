# Mini Project – Ducky Bird

Ducky Bird is a simple underwater game inspired by Flappy Bird, created using p5.js and object-oriented programming (OOP). Instead of flying through pipes, the player controls a duck swimming through the ocean while trying to escape a hungry crocodile.

## What I Did

For this project, I experimented with using classes to create different objects in the game, including the duck, crocodile, seaweed, bread, fish and trash. Each object has its own properties and behaviours, such as movement, appearance and collision detection.

The player has to collect bread to increase their score while avoiding seaweed and the crocodile. Collecting coloured fish changes the duck's colour and gives it a temporary speed boost, while collecting trash slows it down and allows the crocodile to get closer.

I also added a lives system, gradually increasing difficulty, and a restart function so players can try again after losing. I wanted the game to feel playful, so I experimented with animations like moving bubbles, seaweed and the duck's flapping wings.

## How to Play

- **SPACE (hold)** – Dive down
- **SPACE (release)** – Float upwards
- **R** – Restart after game over
- **M** – Toggle sound (when audio is enabled)

The player starts with three lives. Collect as much bread as possible while avoiding obstacles and staying ahead of the crocodile.

## Documentation

The project was created using p5.js. The game can be played by opening `index.html` in a browser.

The current version runs without audio, as the sound assets have not been added.
