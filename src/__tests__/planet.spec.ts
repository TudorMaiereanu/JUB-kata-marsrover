import { Planet } from "../planet";

describe("Planet test:", () => {
    describe("Constructor: ", () => {
        let planet = new Planet(10, [[0, 1], [0, 3]]);

        it("Should create planet instance", () => {
            expect(planet).toBeDefined();
        });

        it("Should create planet with the given size", () => {
            expect(planet.getSize()).toEqual(10);
        });

        it("Should create planet with the given obstacles", () => {
            expect(planet.getObstacles()).toEqual([[0, 1], [0, 3]]);
        });
    });
});