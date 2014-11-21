---
layout: page
title: BattleShip
---

# Prepare yourself for Battle!

## Battleship

### Basic Gameplay

1. Two players begin the game
2. Prepare for Battle
  + Theres a 10 x 10 ocean grid for each players ships
  + Each player secretly places their ships on their grid
  + The ships are: 1 5sq aircraft carrier, 1 4sq battleship, 1 3sq submarine, 1 3sq destroyer and 1 2sq patrol boat
  + The ships cant overlap
  + The ships cant be diagonal
    + This should be drag and drop!
3. Animated coin toss to see who goes first *
4. On Each Players Turn:
  + The active player:
    + Pick a target square on the grid that represents the other player, to aim
    + Click "Fire" button, to fire
    + Or press Enter, to fire *
    + The current players board that represents the enemy also animates to show the hit or miss
    + If a ship is sunk, the game reads outloud "You sunk my !"
    + If a ship is sunk, the board now shows which ship was sunk
    + If a ship is sunk, the board pops up an excerpt of the wikipedia article on that ship, using the Wikipedia API.
    + The inactive player:
    + Their board configuration will rotate to show their own board
    + Once the active player has played, the inactive players board animates to show the hit or miss
    + If a ship is sunk, the game reads outloud "The enemy sunk your !"
  + Then, both players boards rotate to switch which player is active
5. End of Gameplay
  + Once the 5th ship of a given player is sunk, the other player is declared the winner
  + The game reads outloud

If you get bored:

  + Integrate in-game chat.

## Other Requirements:

  + Must be tested using Mocha
  + Must use sass. The amount of sass is left up to the individual, except:
    + Must take advantage of at least one mixin
  + Must use sockets for the two-player gameplay

## Eliza's Breakdown

### Set up Player's Grid

1.  2 players: Bob & Sue
  + First player Shows Up (Sue)
  + Second Player Shows Up (Bob)
  + Cointoss => First Player Starts (Sue)
    + Deluxe: Animated Coin toss
2.  Place Ships
  + 10 x 10 grid
    + Does not have to be a grid
    + can be a box (Xpx x Xpx) with background of a grid
    + http://jqueryui.com/draggable/#snap-to
  + 5 ships
  + Drag from ship box onto the player's grid
    + drag across cells using (Snap-to-Grid: grid = size of cells)
    + click on icon to rotate ship
  + After both players have set up their grid click done

### How objects communicate with each other (UML)

1.  UML Class Diagram
2.  Grid:
3.  Player Grid: ship_locations
4.  Ship: orientation: size: name
5.  Enemy Grid: fire on (x,y) => boolean
