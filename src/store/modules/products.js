import axios from 'axios'

const state = {
    products: [],
    var1: 9999
};

const getters = {
    products(state) {
        return state.products;
    },
    var1(state) {
        return state.var1;
    }
};

const actions = {
    initProducts: ({
                       commit
                   }) => {
        axios.get('static/products.json')
            .then((response) => {
                commit('SET_PRODUCTS', response.data.products)
            });
    }
};

const mutations = {
    'SET_PRODUCTS'(state, products) {
        function compare(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase())
                return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase())
                return 1;
            return 0;
        }
        state.products = products;
        state.products.sort(compare);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
