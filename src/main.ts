import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// Amplify
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import AmplifyVue from "@aws-amplify/ui-vue";

Amplify.configure(awsExports);
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(store)
  .use(vuetify)
  .use(AmplifyVue)
  .use(router)
  .mount("#app");
