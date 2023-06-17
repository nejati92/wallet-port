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
  </div>
  <v-container fluid>
    <v-row>
      <v-col v-for="item in wallet" v-bind:key="item">
        <v-card
          class="mx-auto"
          max-width="300"
          variant="outlined"
          color="#385F73"
          theme="dark"
        >
          <v-card-item>
            <div>
              <div class="text-subtitle-1">{{ item?.address }}</div>
              <div class="text-h6 mb-1">Savings</div>
              <div class="text-caption">
                {{ item?.totalAmount }}
              </div>
            </div>
          </v-card-item>
          <v-expand-transition>
            <div v-if="expand">
              <v-list class="bg-transparent">
                <v-list-item
                  v-for="i in item.balance.tokens"
                  :key="i.name"
                  :title="i.name"
                  :subtitle="i.amount"
                >
                </v-list-item>
              </v-list>
            </div>
          </v-expand-transition>
          <v-card-actions>
            <v-btn @click="expand = !expand">
              {{ !expand ? "Full Report" : "Hide Report" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WalletsView",
  computed: {
    ...mapState(["wallet", "user"]),
  },
  data: () => ({
    expand: false,
  }),
  methods: {
    someFn() {
      this.$store.dispatch("createWallet", this.$store.getters.getToken);
    },
  },
  beforeCreate() {
    this.$store.dispatch("getWallet", this.$store.getters.getToken);
  },
};
</script>
