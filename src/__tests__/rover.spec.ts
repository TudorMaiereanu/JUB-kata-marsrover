import { Rover } from "../rover";

describe("Rover => ", function () {

    describe("Constructor", function () {
        let rover = new Rover(0, 0, "N");

        it("Should create a rover with the given initial position", function () {
            expect(rover.direction).toBe("N");
        });
    });
});
