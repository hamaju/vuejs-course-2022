export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
    setRequests(state, payload) {
      state.requests = payload;
    },
  },
  actions: {
    async contactCoach(context, payload) {
      const newRequest = {
        userEmail: payload.email,
        message: payload.message,
      };

      const response = await fetch(
        `${process.env.VUE_APP_FIREBASE_URL}/requests/${payload.coachId}.json`,
        { method: 'POST', body: JSON.stringify(newRequest) }
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to send request');
      }

      newRequest.id = responseData.name;
      newRequest.coachId = payload.coachId;

      context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
      const token = context.rootGetters.token;
      const coachId = context.rootGetters.userId;

      const response = await fetch(
        `${process.env.VUE_APP_FIREBASE_URL}/requests/${coachId}.json?auth=${token}`
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to fetch requests');
      }

      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message,
        };
        requests.push(request);
      }

      context.commit('setRequests', requests);
    },
  },
  getters: {
    requests(state, getters, rootState, rootGetter) {
      const coachId = rootGetter.userId;
      return state.requests.filter((request) => request.coachId === coachId);
    },
    hasRequests(state, getters) {
      return getters.requests && getters.requests.length > 0;
    },
  },
};
