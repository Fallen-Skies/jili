import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        collapse: false,
        year: 2018,
        brand: "别克",
        modelSelectDefault: "昂科威",
        modelSelectOptions: [{
            value: '昂科威',
            label: '领克01'
        }, {
            value: '昂科拉',
            label: '领克02'
        }, {
            value: '君威',
            label: '领克03'
        }]
    },
    getters: {},
    mutations: {
        setCollapse(state, msg) {
            state.collapse = msg;
        }
    },
    actions: {

    }
})