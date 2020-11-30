import axios from "axios";

export const state = {
  currentUser: getSavedState("auth.currentUser"),
};

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue;
    saveState("auth.currentUser", newValue);
    setDefaultAuthHeaders(state);
  },
};

export const getters = {
  loggedIn(state) {
    return !!state.currentUser;
  },
};

export const actions = {
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state);
    dispatch("validate");
  },

  logIn({ commit, dispatch, getters }, { username, password } = {}) {
    if (getters.loggedIn) return dispatch("validate");

    return axios
      .post("/api/session", { username, password })
      .then((response) => {
        const user = response.data;
        commit("SET_CURRENT_USER", user);
        return user;
      });
  },

  logOut({ commit }) {
    commit("SET_CURRENT_USER", null);
  },

  async validate({ commit, state }) {
    if (!state.currentUser) return Promise.resolve(null);

    try {
      const response = await axios.get("/api/session");
      const user = response.data;
      commit("SET_CURRENT_USER", user);
      return user;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        commit("SET_CURRENT_USER", null);
      } else {
        console.warn(error);
      }
      return null;
    }
  },
};

// Private helpers
function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state));
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common.authorization = state.currentUser
    ? state.currentUser.token
    : "";
}
