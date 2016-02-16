'use strict';

import VM from '../services/vm';

describe('Map Reduce', () => {

  describe(`#execute()`, () => {

    it(`calls the function appropriately`, async () => {

      let results = await VM.execute(`(sources) => {
        return 'blah';
      };`, 'blah');

      expect(results).to.contain('blah');
    });

  });

});

