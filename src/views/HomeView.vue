<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>
<template>
  <authenticator>
    <template v-slot="{ signOut }">
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
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
    ...mapState(["wallet", "user"]),
  },
  methods: {
    someFn() {
      console.log(this.$store.getters.getToken);
      this.$store.dispatch("createWallet", this.$store.getters.getToken);
    },
  },
  beforeCreate() {
    // `1` is the ID of the book we want to fetch.
  },
};
</script>
