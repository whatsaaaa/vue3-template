import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

import registerGlobalComponents from "./components/_globals";

const app = createApp(App);

// Globally register all `_base` prefixed components.
registerGlobalComponents(app);

app.use(store);
app.use(router);

app.mount("#app");
