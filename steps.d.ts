/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home_page.js');
type detailedSearchPage = typeof import('./pages/detailed_search_page.js');
type searchResultsPage = typeof import('./pages/search_results_page.js');
type headerFragment = typeof import('./fragments/header_fragment.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, detailedSearchPage: detailedSearchPage, searchResultsPage: searchResultsPage, headerFragment: headerFragment }
  interface Methods extends WebDriver, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
