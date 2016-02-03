'use strict';

import Converter from '../converters/xml';

describe('XML Conversion', () => {

  describe('initialization and configuration', () => {

    it('has a convert function', () => {
      expect(Converter.convert).to.be.a.function();
    });

    it('errors when an invalid xml parameter is provided', () => {
      expect(() => {
        Converter.convert();
      }).to.throw(/XML/);

      expect(() => {
        Converter.convert('');
      }).to.throw(/XML/);
    });

  });

  describe('#convert', () => {

    const SampleXML = `
      <?xml version="1.0"?>
      <!DOCTYPE catalog SYSTEM "catalog.dtd">
      <catalog>
        <product description="Cardigan Sweater">
         <catalog_item gender="Men's">
           <item_number>QWZ5671</item_number>
           <price>39.95</price>
           <size description="Medium">
             <color_swatch image="red_cardigan.jpg">Red</color_swatch>
             <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
           </size>
           <size description="Large">
             <color_swatch image="red_cardigan.jpg">Red</color_swatch>
             <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
           </size>
         </catalog_item>
         <catalog_item gender="Women's">
           <item_number>RRX9856</item_number>
           <discount_until>Dec 25, 1995</discount_until>
           <price>42.50</price>
           <size description="Medium">
             <color_swatch image="black_cardigan.jpg">Black</color_swatch>
           </size>
         </catalog_item>
        </product>
      </catalog>
    `;

    it('simple conversion', () => {
      const person = { name: 'Tyler', age: 34 };
      const result = Converter.convert(`<person><name>${person.name}</name><age>${person.age}</age></person>`);

      expect(result.person.name).to.be.equal(person.name);
      expect(result.person.age).to.be.equal(person.age);
    });

    it(`converts the sample xml properly`, () => {
      const result = Converter.convert(SampleXML);
      console.log(JSON.stringify(result, null, 2));
    });

  });

});