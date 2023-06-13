// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";

import graphqlClient from "../utils/graphql";

export const mutations = {
  setWallet(state: any, wallet: AnimationPlaybackEvent) {
    state.wallet = wallet;
  },
};

export const actions = {
  async createWallet({ commit }: any) {
    const response = await graphqlClient.mutate({
      // It is important to not use the
      // ES6 template syntax for variables
      // directly inside the `gql` query,
      // because this would make it impossible
      // for Babel to optimize the code.
      mutation: gql`
        mutation createWallet {
          createWallet {
            address
            mnemonic
            privateKey
            publicKey
          }
        }
      `,
    });

    // Trigger the `setBook` mutation
    // which is defined above.
    console.log(response.data.createWallet);

    commit("setWallet", response.data.createWallet);
  },
};

export const state = {
  book: null,
  bookList: [],
};

export default new Vuex.Store({
  mutations,
  actions,
  state,
});
