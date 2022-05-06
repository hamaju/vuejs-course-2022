let timer;

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.didAutoLogout = false;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    },
  },
  actions: {
    async login(context, payload) {
      context.dispatch('auth', { ...payload, mode: 'login' });
    },
    async signup(context, payload) {
      context.dispatch('auth', { ...payload, mode: 'signup' });
    },
    tryLogin(context) {
      const token = localStorage.getItem('coachAppToken');
      const userId = localStorage.getItem('coachAppUserId');
      const tokenExpiration = localStorage.getItem('coachAppTokenExpiration');

      const expiresIn = +tokenExpiration - new Date().getTime();
      if (expiresIn < 0) return;

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      if (token && userId) {
        context.commit('setUser', { token, userId });
      }
    },
    logout(context) {
      localStorage.removeItem('coachAppToken');
      localStorage.removeItem('coachAppUserId');
      localStorage.removeItem('coachAppTokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null,
      });
    },
    async auth(context, payload) {
      const { mode } = payload;
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`;
      if (mode === 'signup') {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`;
      }

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData);
        throw new Error(responseData.message || 'Failed to authenticate');
      }

      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem('coachAppToken', responseData.idToken);
      localStorage.setItem('coachAppUserId', responseData.localId);
      localStorage.setItem('coachAppTokenExpiration', expirationDate);

      // log out after token expires
      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
      });
    },
    autoLogout(context) {
      context.dispatch('logout');
      context.commit('setAutoLogout');
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      // convert to true boolean
      return !!state.token;
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    },
  },
};
