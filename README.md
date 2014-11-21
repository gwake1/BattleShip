BattleShip
==========

# Prepare yourself for Battle!

## Battleship
### Basic Gameplay

1. Two players begin the game
2. Prepare for Battle
..# There's a 10 x 10 ocean grid for each player's ships
... # Each player secretly places their ships on their grid
... # The ships are: 1 5sq aircraft carrier, 1 4sq battleship, 1 3sq submarine, 1 3sq destroyer and 1 2sq patrol boat
... # The ships can't overlap
... # The ships can't be diagonal
... # This should be drag and drop!
3. Animated coin toss to see who goes first *
4. On Each Player's Turn:
.. # The active player:
... # Pick a target square on the grid that represents the other player, to aim
... # Click "Fire" button, to fire
... # Or press Enter, to fire *
... # The current player's board that represents the enemy also animates to show the hit or miss
... # If a ship is sunk, the game reads outloud "You sunk my !"
... # If a ship is sunk, the board now shows which ship was sunk
... # If a ship is sunk, the board pops up an excerpt of the wikipedia article on that ship, using the Wikipedia API.
.. # The inactive player:
... # Their board configuration will rotate to show their own board
... # Once the active player has played, the inactive player's board animates to show the hit or miss
... # If a ship is sunk, the game reads outloud "The enemy sunk your !"
.. # Then, both player's boards rotate to switch which player is active
5. End of Gameplay
.. # Once the 5th ship of a given player is sunk, the other player is declared the winner
.. # The game reads outloud

If you get bored:

.. # Integrate in-game chat.
## Other Requirements:

.. # Must be tested using Mocha
.. # Must use sass. The amount of sass is left up to the individual, except:
... # Must take advantage of at least one mixin
.. # Must use sockets for the two-player gameplay
