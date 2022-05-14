import { createStore } from 'vuex'

export default createStore({
  state: {
    interval: 30000,
    notes: [
      {
        id: 'n43142',
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 'n3562',
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: true,
        inBin: false
      },
      {
        id: 'n27919',
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 'n16302',
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 'n15957',
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: true,
        inBin: true
      },
      {
        id: 'n57889',
        title: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: true
      },
      {
        id: 'n13180',
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: true,
        inBin: false
      },
      {
        id: 'n99981',
        title: "Note Title",
        content: "",
        archived: false,
        inBin: true
      },
    ]
  },
  getters: {
    getNotes(state) {
      return state.notes.filter(({ archived, inBin }) => !archived && !inBin)
    },
    getArchivedNotes(state) {
      return state.notes.filter(({ archived, inBin }) => archived && !inBin)
    },
    getDeletedNotes(state) {
      return state.notes.filter(({ inBin }) => inBin)
    },
    idExists: (state) => (id) => {
      return state.notes.map(({ id }) => id).includes(id)
    },
  },
  mutations: {
    ADD_NOTE(state, payload) {
      state.notes.push({
        id: payload.id,
        title: payload.content,
        content: payload.content,
        archived: false,
        inBin: false
      })
    },
  },
  actions: {
  }
})
