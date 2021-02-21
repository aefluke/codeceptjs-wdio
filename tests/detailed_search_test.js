Feature('detailed_search');

Before(({ detailedSearchPage }) => {
    detailedSearchPage.go();
});

Scenario('test detailed search with specific filters that results not found', ({ I, detailedSearchPage }) => {

    detailedSearchPage.selectCategories('Vasıta', 'Motosiklet', 'Yamaha', 'MT-07 ABS');
    detailedSearchPage.fillYearInterval(1998, 1999);
    detailedSearchPage.selectColor('Gri');
    detailedSearchPage.selectSecurityFilter('Çekiş Kontrolü');
    detailedSearchPage.submitSearch();
    I.seeInTitle('Yamaha MT-07 ABS');
    I.see('Arama filtrelerinize uygun ilan bulunamadı.');

});
