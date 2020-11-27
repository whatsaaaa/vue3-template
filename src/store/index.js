import { createStore } from "vuex";
import dispatchActionForAllModules from "../utils/dispatch-action-for-all-modules";

import modules from "./modules";

export default createStore({
  modules: modules,
  strict: process.env.NODE_ENV !== "production",
});

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllModules("init");
