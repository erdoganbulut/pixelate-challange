import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [
      'convincing',
      'discover',
      'responsible',
      'present',
      'row',
      'enable',
      'disability',
      'train',
      'pass away',
      'desicion',
    ],
    answers: [
      'discover',
      'convincing',
      'present',
      'responsible',
      'enable',
      'row',
      'train',
      'disability',
      'desicion',
      'pass away',
    ],
  },
  getters: {
    answer: state => state.answers[0],
    answers: state => state.answers,
    questions: state => state.questions,
  },
  mutations: {
    SET_ANSWERS(state, answers) {
      const $state = state;
      $state.answers = answers;
    },
  },
  actions: {
    nextQuestion: ({ commit, state }) => {
      const answers = JSON.parse(JSON.stringify(state.answers));
      answers.splice(0, 1);
      commit('SET_ANSWERS', answers);
    },
  },
});
