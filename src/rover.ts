export class Rover {
    stateMachine = {
        "R": {
            "N": ["E", 0, 0],
            "E": ["S", 0, 0],
            "S": ["W", 0, 0],
            "W": ["N", 0, 0],
        },
        "L": {
            "N": ["W", 0, 0],
            "W": ["S", 0, 0],
            "S": ["E", 0, 0],
            "E": ["N", 0, 0],
        },
        "F": {
            "E": ["E", 1, 0],
            "W": ["W", -1, 0],
            "S": ["S", 0, -1],
            "N": ["N", 0, 1],
        },
        "B": {
            "E": ["E", -1, 0],
            "W": ["W", 1, 0],
            "S": ["S", 0, 1],
            "N": ["N", 0, -1],
        }
    };

    x: number;
    y: number;
    direction: string;

    constructor(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    getCoordinates() {
        return [this.x, this.y];
    }

    getDirection() {
        return this.direction;
    }

    limit() {
        if (this.x < 0) {
            console.log("x out of boundaries");
            this.x = 0;
        }
        if (this.y < 0) {
            console.log("y out of boundaries");
            this.y = 0;
        }
    }

    move(instructions: string) {
        const listInstructions = instructions.split("");
        listInstructions.forEach(movement => {
            console.log("Current position", this.x, this.y, "Direction", this.direction, "-> Move", movement);

            this.direction = this.stateMachine[movement][this.direction][0];
            this.x = this.x + this.stateMachine[movement][this.direction][1];
            this.y = this.y + this.stateMachine[movement][this.direction][2];

            this.limit();

            console.log("Current position", this.x, this.y, "Direction", this.direction);
            console.log();
        });

    }
}

let rover = new Rover(0, 0, "N");
rover.move("FFFFBBBBLRFFRRLB");