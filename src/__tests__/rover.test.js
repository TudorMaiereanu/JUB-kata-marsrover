import { Rover } from '../rover';

describe('<Counter />', () => {
    it('creates rover instsance', () => {
      let rover = new Rover(0,0,'N');
  
      expect(rover).toBeInstanceOf(Object);
    })
  });

  describe('when facing NORTH in a 10x10 planet', () => {
    beforeEach(() => {
      planet = new TestPlanet(10);
      rover = new MarsRover(0, 0, 'N', planet);
    });

    describeWith(runner, 'when LEFT command is passed', [
      when('L', '0:0:W'),
      when('LL', '0:0:S'),
      when('LLL', '0:0:E'),
      when('LLLL', '0:0:N'),
    ]);
  });