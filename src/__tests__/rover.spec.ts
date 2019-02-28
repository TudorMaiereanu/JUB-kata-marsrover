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

    describe("Move test:", () => {
        let rover;
        beforeEach(() => {
            rover = new Rover(0, 0, "N", 10, []);
        });
        describe("Direction change:", () => {
            describe("Sideways turn", () => {
                it("Changes direction by turning left", () => {
                    rover.move("L");
                    expect(rover.getDirection()).toEqual("W");
                });
                it("Goes back to the initial direction by turning left 3 times", () => {
                    // let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("LLLL");
                    expect(rover.getDirection()).toEqual("N");
                });

                it("Changes direction by turning right", () => {
                    // let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("R");
                    expect(rover.getDirection()).toEqual("E");
                });
                it("Goes back to the initial direction by turning right 3 times", () => {
                    // let rover = new Rover(0, 0, "N", 10, []);
                    rover.move("RRRR");
                    expect(rover.getDirection()).toEqual("N");
                });
            });

            describe("Forward and backwards movement", () => {
                it("Goes North 1 position forward", () => {
                    rover.move("F");
                    expect(rover.getCoordinates()).toEqual([0, 1]);
                });
                it("Goes North 1 position forward and 1 position backwards", () => {
                    rover.move("FB");
                    expect(rover.getCoordinates()).toEqual([0, 0]);
                });
            });

            describe("All commands movement", () => {
                it("execute FRFFLFF", () => {
                    rover.move("FRFFLFF");
                    expect(rover.getCoordinates()).toEqual([2, 3]);
                    expect(rover.getDirection()).toEqual("N");
                });
                it("execute FFFFRFFFFLLBBB", () => {
                    rover.move("FFFFRFFFFLLBBB");
                    expect(rover.getCoordinates()).toEqual([7, 4]);
                    expect(rover.getDirection()).toEqual("W");
                });
            });

            describe("Rover going out of boundaries", () => {
                it("x goes out of boundaries (lower limit)", () => {
                    expect(() => {
                        rover.move("LF");
                    }).toThrow(Error("x out of boundaries"));
                    expect(rover.getCoordinates()[0]).toEqual(0);
                });
                it("y goes out of boundaries (upper limit)", () => {
                    expect(() => {
                        rover.move("FFFFFFFFFFF");
                    }).toThrow(Error("y out of boundaries"));
                    expect(rover.getCoordinates()[1]).toEqual(10);
                });
            });
        });
    });
});
