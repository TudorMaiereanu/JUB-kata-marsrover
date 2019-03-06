import { Rover } from "../rover";

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

        describe("Direction change:", () => {
            beforeEach(() => {
                rover = new Rover(0, 0, "N", 10, []);
            });

            describe("Sideways turn:", () => {
                it("Changes direction by turning left", () => {
                    rover.move("L");
                    expect(rover.getDirection()).toEqual("W");
                });

                it("Goes back to the initial direction by turning left 3 times", () => {
                    rover.move("LLLL");
                    expect(rover.getDirection()).toEqual("N");
                });

                it("Changes direction by turning right", () => {
                    rover.move("R");
                    expect(rover.getDirection()).toEqual("E");
                });

                it("Goes back to the initial direction by turning right 3 times", () => {
                    rover.move("RRRR");
                    expect(rover.getDirection()).toEqual("N");
                });
            });

            describe("Forward and backwards movement:", () => {
                it("Goes North 1 position forward", () => {
                    rover.move("F");
                    expect(rover.getCoordinates()).toEqual([0, 1]);
                });

                it("Goes North 1 position forward and 1 position backwards", () => {
                    rover.move("FB");
                    expect(rover.getCoordinates()).toEqual([0, 0]);
                });
            });

            describe("All commands movement: ", () => {
                it("executes FRFFLFF", () => {
                    rover.move("FRFFLFF");
                    expect(rover.getCoordinates()).toEqual([2, 3]);
                    expect(rover.getDirection()).toEqual("N");
                });

                it("executes FFFFRFFFFLLBBB", () => {
                    rover.move("FFFFRFFFFLLBBB");
                    expect(rover.getCoordinates()).toEqual([7, 4]);
                    expect(rover.getDirection()).toEqual("W");
                });

                it("does not execute wrong command", () => {
                    expect(() => {
                        rover.move("O");
                    }).toThrowError();
                });
            });
        });

        describe("Boundary check:", () => {
            beforeEach(() => {
                rover = new Rover(0, 0, "N", 2, []);
            });

            describe("Rover going out of boundaries:", () => {
                it("x goes out of boundaries (lower limit)", () => {
                    expect(() => {
                        rover.move("LF");
                    }).toThrow(Error("x out of boundaries"));
                    expect(rover.getCoordinates()[0]).toEqual(0);
                });

                it("y goes out of boundaries (upper limit)", () => {
                    expect(() => {
                        rover.move("FFF");
                    }).toThrow(Error("y out of boundaries"));
                    expect(rover.getCoordinates()[1]).toEqual(2);
                });
            });
        });

        describe("Obstacles check:", () => {
            beforeEach(() => {
                rover = new Rover(0, 0, "N", 10, [[0, 1], [2, 3]]);
            });

            describe("Stops at obstacles:", () => {
                it("Throws error when detecting obstacle at [0, 1]", () => {
                    expect(() => {
                        rover.move("FFF");
                    }).toThrow(Error("Obstacle detected"));
                    expect(rover.getCoordinates()).toEqual([0, 1]);
                });

                it("Throws error when detecting obstacle at [2, 3]", () => {
                    expect(() => {
                        rover.move("RFLFFFRF");
                    }).toThrow(Error("Obstacle detected"));
                    expect(rover.getCoordinates()).toEqual([2, 3]);
                });
            });
        });
    });
});
