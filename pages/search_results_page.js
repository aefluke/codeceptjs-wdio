const { I } = inject();

const desiredCategory = category => locate('a').withText(category).inside('.results-by-categories');
module.exports = {

  numberOfSearchResults: '.result-text > span',

  async getNumberOfSearchResults() {
    return await I.grabTextFrom(this.numberOfSearchResults);
  },

  selectDesiredCategoryForSearchResults(category) {
    I.click(desiredCategory(category));
  }


}
