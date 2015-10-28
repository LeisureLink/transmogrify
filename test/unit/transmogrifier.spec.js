'use strict';

let Transmogrifier = require('../../lib/transmogrifier');

describe('Transmogrifier', () => {

  describe('#translate(source, spec, options)', () => {

    it('should require a spec', (done) => {
      Transmogrifier.transmogrify({})
        .then(() => { throw Error('Should throw and error')})
        .catch((err) => {
          expect(err.message).to.match(/spec/);
          done();
        });
    });

    it('should require a source object');


  });

});
