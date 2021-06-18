const state = {
    cart: []
};

const getters = {
    cart: state => state.cart
};
const mutations = {
    addToCart(state, id) {
        state.cart.push(id);
    }
};
const actions = { //执行异步操作
    addToCart(context, id) {
        setTimeout(function() {
            context.commit('addToCart', id);
        }, 1000);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
