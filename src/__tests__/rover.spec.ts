import { Rover } from "../rover";
import { Planet } from "../planet";

describe("Rover test:", () => {
    describe("Constructor: ", () => {
        let rover = new Rover(0, 0, "N", 10, []);

        it("Should create the rover instance", () => {
            expect(rover).toBeDefined();
        });

        it("Should create a rover with the given initial position", () => {
            expect(rover.getCoordinates()).toEqual([0, 0]);
        });

        it("Should create a rover with the given initial direction", () => {
            expect(rover.getDirection()).toEqual("N");
        });
    });

    describe("Move", () => {
        describe("Changes direction", () => {
            describe("Sideway turn", () => {
                it("Changes direction by turning left", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("L");
                    expect(rover.getDirection()).toEqual("W");
                });
                it("Goes back to the initial direction by turning left 3 times", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("LLLL");
                    expect(rover.getDirection()).toEqual("N");
                });

                it("Changes direction by turning right", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("R");
                    expect(rover.getDirection()).toEqual("E");
                });
                it("Goes back to the initial direction by turning right 3 times", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("RRRR");
                    expect(rover.getDirection()).toEqual("N");
                });
            });

            describe("Forward and backwards movement", () => {
                it("Goes North 1 position forward", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("F");
                    expect(rover.getCoordinates()).toEqual([0, 1]);
                });
                it("Goes North 1 position backwards", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    try {
                        rover.move("B");
                    } catch (err) {
                        expect(err).toEqual(Error("y out of boundaries"));
                    }
                });
                it("Goes North 1 position forward and 1 position backwards", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("FB");
                    expect(rover.getCoordinates()).toEqual([0, 0]);
                });
            });

            describe("All commands movement", () => {
                it("FRFFLFF", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("FRFFLFF");
                    expect(rover.getCoordinates()).toEqual([2, 3]);
                    expect(rover.getDirection()).toEqual("N");
                });
                it("FFFFRFFFFLLBBB", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("FFFFRFFFFLLBBB");
                    expect(rover.getCoordinates()).toEqual([7, 4]);
                    expect(rover.getDirection()).toEqual("W");
                });
                it("LF", () => {
                    let rover = new Rover(0, 0, "N", 10, []);
                    try {
                        rover.move("LF");
                    } catch (err) {
                        expect(err).toEqual(Error("x out of boundaries"));
                    }
                });
            });
        });
    });
});
