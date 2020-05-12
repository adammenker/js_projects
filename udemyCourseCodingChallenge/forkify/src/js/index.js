import Search from './models/Search'
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// GLOBAL STATE OF THE APP
// - search object
// - current recipte object
// - shopping list object
// - liked recipes
const state = {}

const controlSearch = async () => {
    // get query from view
    const query = searchView.getInput(); // TODO
    console.log(query);

    if(query) {
        // new search object and add ot state
        state.search = new Search(query);

        // prepare Ui for results 
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // search for recipes
        await state.search.getResults();

        // render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
});


