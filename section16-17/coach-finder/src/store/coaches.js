export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: '5ffe40c5-0386-4cb4-845d-41a1a4565992',
          firstName: 'Dick',
          lastName: 'McBalls',
          areas: ['frontend', 'backend'],
          description:
            'Experienced software engineer with a background of building scalable systems in fintech, health and adult entertainment industries',
          hourlyRate: 69,
        },
        {
          id: '4533a86f-2a31-4ce4-b2a9-80f34d81a1d5',
          firstName: 'Jane',
          lastName: 'Doe',
          areas: ['frontend', 'ux'],
          description: 'Senior frontend developer with a passion for UX-design',
          hourlyRate: 42,
        },
      ],
    };
  },
  mutations: {
    addCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    },
    setFetchTimestamp(state) {
      state.lastFetch = new Date().getTime();
    },
  },
  actions: {
    async addCoach(context, payload) {
      const token = context.rootGetters.token;
      const userId = context.rootGetters.userId;

      const coachData = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        description: payload.description,
        hourlyRate: payload.rate,
        areas: payload.areas,
      };

      const response = await fetch(
        `${process.env.VUE_APP_FIREBASE_URL}/coaches/${userId}.json?auth=${token}`,
        { method: 'PUT', body: JSON.stringify(coachData) }
      );

      // const responseData = await response.json();

      if (!response.ok) {
        // error
      }

      context.commit('addCoach', {
        ...coachData,
        id: userId,
      });
    },
    async loadCoaches(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) return;

      const response = await fetch(
        `${process.env.VUE_APP_FIREBASE_URL}/coaches.json`
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to fetch data');
      }

      const coaches = [];
      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas,
        };
        coaches.push(coach);
      }

      context.commit('setCoaches', coaches);
      context.commit('setFetchTimestamp');
    },
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(state, getters, rootState, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some((coach) => coach.id === userId);
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) true;
      const currentTimestamp = new Date().getTime();
      // update if last fetch was more than one minute ago
      return (currentTimestamp - lastFetch) / 1000 > 60;
    },
  },
};
