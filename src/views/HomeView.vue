<template>
  <div id="app">
    <button @click="someFn">Click me</button>
    <h2>The Wallet</h2>
    <strong>{{ wallet?.address }}</strong> by {{ wallet?.privateKey }}
    <p>{{ wallet?.publicKey }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["wallet"]),
  },
  methods: {
    someFn() {
      this.$store.dispatch("createWallet");
    },
  },
  beforeCreate() {
    // `1` is the ID of the book we want to fetch.
  },
};
</script>
