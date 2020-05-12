import Search from './models/Search'

// GLOBAL STATE OF THE APP
// - search object
// - current recipte object
// - shopping list object
// - liked recipes
const state = {}

const controlSearch = async () => {
    // get query from view
    const query = 'pizza' // TODO

    if(query) {
        // new search object and add ot state
        state.search = new Search(query);

        // prepare Ui for results 

        // search for recipes
        await state.search.getResults();

        // render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


