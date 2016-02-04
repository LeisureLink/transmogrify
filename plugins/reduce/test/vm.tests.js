'use strict';

import VM from '../services/vm';

describe('Map Reduce', () => {

  describe(`#execute()`, () => {

    it(`calls the function appropriately`, async () => {
      let results = await VM.execute(`return new Promise((resolve, reject) => { return resolve(sources); })`, 'blah');
      expect(results).to.contain('blah');
    });

  });

});

