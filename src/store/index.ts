import { createStore } from 'vuex';
import { instruments } from '@/constants/instruments';
import { notes } from '@/constants/notes';
import transposeNotes from '@/utils/transposeNotes';
import { Instrument, Note } from '@/types';

export type State = {
  instrument1: Instrument;
  instrument2: Instrument | null;
  transposeFactor: number;
  originalNote: Note;
  transposedNote: Note | null;
};

export default createStore<State>({
  state: {
    instrument1: {
      ...instruments.piano,
    },
    instrument2: null,
    transposeFactor: 0,
    originalNote: {
      position: 1,
      note: notes[1].note,
      display: notes[1].display,
      displayFlat: notes[1].displayFlat,
      displaySharp: notes[1].displaySharp,
    },
    transposedNote: null,
  },
  mutations: {
    SET_INSTRUMENT(state, { selection, instrument }) {
      state[`instrument${selection}`] = instruments[instrument];
    },
    SET_NOTES(state, originalNote) {
      const { transposeFactor } = state;
      const transposedNote = transposeNotes(originalNote, transposeFactor);

      state.originalNote = {
        position: originalNote,
        note: notes[originalNote - 1].note,
        display: notes[originalNote - 1].display,
        displayFlat: notes[originalNote - 1].displayFlat,
        displaySharp: notes[originalNote - 1].displaySharp,
      };
      state.transposedNote = {
        position: transposedNote,
        note: notes[transposedNote - 1].note,
        display: notes[transposedNote - 1].display,
        displayFlat: notes[transposedNote - 1].displayFlat,
        displaySharp: notes[transposedNote - 1].displaySharp,
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
        state.instrument2?.transposeFactor - state.instrument1.transposeFactor;

      commit('SET_TRANSPOSING', transposeFactor);
      if (state.originalNote.note) {
        commit('SET_NOTES', state.originalNote.position);
      }
    },
  },
  modules: {},
});
