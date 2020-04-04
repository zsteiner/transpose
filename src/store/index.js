import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import instruments from '@/constants/instruments';
import notes from '@/constants/notes';
import noteTransposer from '@/utils/noteTransposer';

export default new Vuex.Store({
  state: {
    instrument1: {
      ...instruments.piano,
    },
    instrument2: {},
    transposeFactor: 0,
    originalNote: {},
    transposedNote: {},
  },
  mutations: {
    SET_INSTRUMENT(state, { selection, instrument }) {
      state[`instrument${selection}`] = instruments[instrument];
    },
    SET_NOTES(state, originalNote) {
      const { transposeFactor } = state;
      const transposedNote = noteTransposer(originalNote, transposeFactor);

      state.originalNote = {
        index: originalNote,
        note: notes[originalNote - 1].note,
        display: notes[originalNote - 1].display,
      };
      state.transposedNote = {
        index: transposedNote,
        note: notes[transposedNote - 1].note,
        display: notes[transposedNote - 1].display,
      };
    },
    SET_TRANSPOSING(state, transposeFactor) {
      state.transposeFactor = transposeFactor;
    },
  },
  actions: {
    updateSelection({ dispatch, commit }, { selection, instrument }) {
      commit('SET_INSTRUMENT', { selection, instrument });
      dispatch('updateTransposingFactor');
    },
    updateNotes({ commit }, note) {
      commit('SET_NOTES', note);
    },
    updateTransposingFactor({ state, commit }) {
      const transposeFactor =
        state.instrument2.transposeFactor - state.instrument1.transposeFactor;

      commit('SET_TRANSPOSING', transposeFactor);
      if (state.originalNote.note) {
        commit('SET_NOTES', state.originalNote.index);
      }
    },
  },
  modules: {},
});
