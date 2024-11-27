# Robot Simulator

This is a simple web application where you can control a robot on a 5x5 grid. The robot can move in the four cardinal directions (North, East, South, West) and rotate in place. The grid highlights the robot's direction by coloring the border of the cell it is facing.

## Features

- **Move the robot**: Move the robot in the current direction it is facing (North, South, East, or West).
- **Rotate the robot**: Rotate the robot to face any of the four cardinal directions.
- **Direction Highlight**: The robot’s facing direction is indicated by a colored border on the grid.

## Requirements

- Modern web browser (e.g., Chrome, Firefox, etc.)
- React (v18 or later)
- FontAwesome icons for buttons

## Setup

1. **Clone this repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate into the project folder:**
    ```bash
    cd robot-simulator
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Run the application:**
    ```bash
    npm start
    ```

## Usage

- Click the arrow buttons to rotate the robot in the direction you want.
- Press the "Move" button to move the robot in the current direction.
- The robot's position and facing direction will be updated on the grid.

## Customization

- **Grid Size**: The grid is currently 5x5, but you can easily modify it to a larger size by adjusting the loops in the `App.js` file.
- **Direction Highlights**: The `getDirectionClass` function determines the direction highlights based on the robot's facing direction. You can change the CSS to modify the appearance.
