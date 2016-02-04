'use strict';

import Converter from '../converters/json';

describe('JSON Conversion', () => {

  describe('initialization and configuration', () => {

    it('has a convert function', () => {
      expect(Converter.convert).to.be.a.function();
    });

    it('errors when an invalid xml parameter is provided', () => {
      expect(() => {
        Converter.convert();
      }).to.throw(/JSON/);

      expect(() => {
        Converter.convert('');
      }).to.throw(/JSON/);

      expect(() => {
        Converter.convert(1);
      }).to.throw(/JSON/);

      expect(() => {
        Converter.convert({});
      }).to.throw(/Object/);

    });

  });

  describe('#convert', () => {


    it('simple conversion', () => {
      const model = { person: { name: 'Tyler', age: 34 } };
      const xml = `<person><name>${model.person.name}</name><age>${model.person.age}</age></person>`;
      const result = Converter.convert(model);

      expect(result).to.contain(xml);
    });

  });

});