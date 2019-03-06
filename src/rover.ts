import { Planet } from "./planet";

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
    p: Planet;

    constructor(x: number, y: number, direction: string, s: number, obs: [number, number] []) {
        if (x > s || y > s) {
            throw Error("coordinates out of bounds");
        }
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.p = new Planet(s, obs);
    }

    getCoordinates() {
        return [this.x, this.y];
    }

    getDirection() {
        return this.direction;
    }

    checkBoundaries() {
        if (this.x < 0) {
            this.x = 0;
            throw Error("x out of boundaries");
        } else if (this.x > this.p.getSize()) {
            this.x = this.p.getSize();
            throw Error("x out of boundaries");
        }
        if (this.y < 0) {
            this.y = 0;
            throw Error("y out of boundaries");
        } else if (this.y > this.p.getSize()) {
            this.y = this.p.getSize();
            throw Error("y out of boundaries");
        }
    }

    checkObstacles(x, y) {
        let obs = this.p.getObstacles();
        obs.forEach(pair => {
            if (pair[0] === x && pair[1] === y) {
                throw Error("Obstacle detected");
            }
        });
    }

    move(instructions: string) {
        const listInstructions = instructions.split("");

        listInstructions.forEach(movement => {
            this.direction = this.stateMachine[movement][this.direction][0];
            this.x = this.x + this.stateMachine[movement][this.direction][1];
            this.y = this.y + this.stateMachine[movement][this.direction][2];

            this.checkBoundaries();
            this.checkObstacles(this.x, this.y);
        });

    }
}
