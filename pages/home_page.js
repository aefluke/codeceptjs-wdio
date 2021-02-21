const { I } = inject();

module.exports = {

  showcase: {
    title: '//h3[contains(normalize-space(),"Anasayfa Vitrini")]',
    items: '.showcase ul.vitrin-list li',
  },
  categories: {
    vehicleCategory: 'a[title=Vasıta]',
    automobile: 'a[title=Otomobil]',
    suv: 'a[title="Arazi, SUV & Pickup"]',
    motorcycle: 'a[title=Motosiklet]',
  },

  go() {
    I.amOnPage('/');
  },

  async getNumberOfDisplayedShowcaseItems() {
    return await I.grabNumberOfVisibleElements(this.showcase.items);
  }
}
