export class Planet {
    size: number;
    obstacles: [number, number] [];

    constructor(size: number, obstacles: [number, number] []) {
        this.size = size;
        this.obstacles = obstacles;
    }

    printObstacles() {
        this.obstacles.forEach((pair) => {
            console.log(pair);
        });
    }
}

// let p = new Planet(10, [[0,1], [2,3]]);
// p.printObstacles();