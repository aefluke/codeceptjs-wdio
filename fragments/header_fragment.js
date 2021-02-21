const { I } = inject();

module.exports = {

  root: '.header-container',
  logo: '.logo',
  links: {
    advancedSearch: 'a[title="Detaylı Arama"]',
    login: 'a[title="Giriş Yap"]',
    register: 'a[title="Üye Ol"]',
  },
  fields: {
    search: '#searchText',
  },
  buttons: {
    postNewClassified: '#post-new-classified',
    submitSearch: '#searchSuggestionForm button[type=submit]'
  },

  goToAdvancedSearch() {
    I.click(this.links.advancedSearch);
  },

  search(input) {

    I.fillField(this.fields.search, input);
    I.click(this.buttons.submitSearch);
  }

}
