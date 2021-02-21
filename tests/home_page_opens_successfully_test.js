Feature('home_page_opens_successfully');

Before(({ I, homePage }) => {
    homePage.go();
});

Scenario('test if fundamental elements in header on home page are visible', ({ I, headerFragment }) => {

    within(headerFragment.root, () => {

        I.seeElement(headerFragment.logo);
        I.seeElement(headerFragment.links.advancedSearch);
        I.seeElement(headerFragment.links.login);
        I.seeElement(headerFragment.links.register);
        I.seeElement(headerFragment.fields.search);
        I.seeElement(headerFragment.buttons.postNewClassified);
    });

});

Scenario('test if correct number of showcase items are displayed', async ({ I, homePage }) => {

    I.seeElement(homePage.showcase.title);
    I.assertEqual(await homePage.getNumberOfDisplayedShowcaseItems(), 56, 'Exact number of showcase items should be displayed on homepage.');

});

Scenario('test if several categories are displayed on left navigation menu', ({ I, homePage }) => {

    I.seeElement(homePage.categories.vehicleCategory);
    I.seeElement(homePage.categories.automobile);
    I.seeElement(homePage.categories.suv);
    I.seeElement(homePage.categories.motorcycle);

});
