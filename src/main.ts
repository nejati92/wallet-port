import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import aws_exports from "./aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(aws_exports);

createApp(App).use(store).use(router).mount("#app");
