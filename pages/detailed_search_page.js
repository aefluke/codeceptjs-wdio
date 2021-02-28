const { I, headerFragment } = inject();

const nthCategoryList = nth => locate(`.category-list-wrapper:nth-child(${nth})`).inside('.category-selection');
const desiredCategory = category => locate('li').withText(`${category}`);
const filteredSelect = label => locate('.filtered-select').inside(locate('tr').withDescendant('label').withText(label));
const securityFilter = filter => locate('label').withText(filter).inside(locate('.accordion').withDescendant('a').withText('Güvenlik'));

module.exports = {

  fields: {

    minYear: 'input[placeholder="Min Yıl"]',
    maxYear: 'input[placeholder="Max Yıl"]',
  },

  buttons: {
    submitSearch: '#detailedSearchForm button[type=submit]'
  },

  filteredSelectBox: {

    activeHolder: '.filtered-select.active-select',
    filterInput: '.filter input',
    firstFilteredOption: 'li:not(.hidden) a',
  },

  go() {

    I.amOnPage('/');
    headerFragment.goToDetailedSearch();
  },

  selectCategories(...categories) {

    I.assertLengthAboveThan(categories, 0, 'At least one category must be selected.');
    I.assertLengthBelowThan(categories, 5, 'At most 4 categories are allowed for filtering');

    for (var i = 0; i < categories.length; i++) {
      this.selectNthLevelCategory(i + 1, categories[i]);
    }
  },

  selectNthLevelCategory(n, category) {

    I.waitForVisible(nthCategoryList(n));
    I.scrollIntoView(locate(desiredCategory(category)).inside(nthCategoryList(n)));
    I.click(locate(desiredCategory(category)).inside(nthCategoryList(n)));
  },

  fillYearInterval(minYear, maxYear) {

    I.fillField(this.fields.minYear, minYear);
    I.fillField(this.fields.maxYear, maxYear);
  },

  selectColor(color) {
    this.selectOptionByFiltering('Renk', color)
  },

  selectSecurityFilter(label) {
    I.scrollTo(securityFilter(label));
    I.click(securityFilter(label));
  },

  submitSearch() {
    I.click(this.buttons.submitSearch);
  },

  selectOptionByFiltering(label, option) {

    I.scrollTo(filteredSelect(label));
    I.click(filteredSelect(label));
    I.waitForVisible(this.filteredSelectBox.activeHolder);

    within(this.filteredSelectBox.activeHolder, () => {

      I.fillField(this.filteredSelectBox.filterInput, option);
      I.click(this.filteredSelectBox.firstFilteredOption);
    });

    I.click(this.filteredSelectBox.activeHolder);
  }





}
