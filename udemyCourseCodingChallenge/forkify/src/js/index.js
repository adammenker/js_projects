import Search from './models/Search'
import * as searchView from './views/searchView';
import {elements} from './views/base';
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

        // search for recipes
        await state.search.getResults();

        // render results on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


