Feature('search');

Before(({ I, homePage }) => {
    homePage.go();
});

let models = new DataTable(['model', 'quantity']);
models.add(['Yamaha MT07', '37']);
models.add(['Yamaha MT09', '18']);
models.add(['Yamaha MT25', '51']);

Data(models).Scenario('test searching for a model should bring exact number of results', async ({ I, current, headerFragment, searchResultsPage }) => {

    headerFragment.search(current.model);
    await tryTo(() => searchResultsPage.selectDesiredCategoryForSearchResults('Motosiklet'));
    I.assertEqual(current.quantity, await searchResultsPage.getNumberOfSearchResults());
});
