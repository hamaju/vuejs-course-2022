export default {
  finalCounter(state) {
    return state.counter;
  },
  normalizedCounter(state, getters) {
    const counter = getters.finalCounter;
    if (counter < 0) {
      return 0;
    }
    if (counter > 100) {
      return 100;
    }
    return counter;
  },
};
