// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import { API, graphqlOperation } from "aws-amplify";

export const mutations = {
  setWallet(state: any, wallet: AnimationPlaybackEvent) {
    state.wallet = wallet;
  },
  setUser(state: any, user: any) {
    state.user = user;
  },
};

export const actions = {
  async createWallet({ commit }: any, token: any) {
    console.log(token);
    const response: any = await API.graphql(
      graphqlOperation(
        `
        mutation createWallet {
          createWallet {
            address
            balance {
            totalAmount
            tokens {
              amount
              contractAddress
              isNative
              name
            }
          }
          }
        }
      `,
        undefined,
        token
      )
    );

    // Trigger the `setBook` mutation
    // which is defined above.
    console.log(response.data.createWallet);

    commit("setWallet", response.data.createWallet);
  },
  async getWallet({ commit }: any, token: any) {
    console.log(token);
    const response: any = await API.graphql(
      graphqlOperation(
        `
        query getWalletDetails {
          getWalletDetails {
            address
            balance {
            totalAmount
            tokens {
              amount
              contractAddress
              isNative
              name
            }
          }
          }
        }
      `,
        undefined,
        token
      )
    );

    // Trigger the `setBook` mutation
    // which is defined above.
    console.log(response.data.getWalletDetails);

    commit("setWallet", response.data.getWalletDetails);
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
  getters: {
    isSignIn: (state: any) => {
      return state.user !== null;
    },
    getToken: (state: any) => {
      return state.user.signInUserSession.idToken.jwtToken;
    },
  },
});
