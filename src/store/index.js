import { createStore } from 'vuex'

export default createStore({
  state: {
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
        title: payload.title,
        content: payload.content,
        archived: false,
        inBin: false
      })
    },
    EDIT_NOTE(state, editedNote) {
      state.notes.forEach(note => {
        if (note.id === editedNote.id) {
          note.title = editedNote.title
          note.content = editedNote.content
          return 
        }
      })
    },
    DELETE_NOTE(state, id) {
      state.notes = state.notes.filter(note => note.id !== id)
    },
    MOVE_TO_ARCHIVE(state, id) {
      state.notes.find(note => note.id == id).archived = true
    },
    MOVE_TO_BIN(state, id) {
      state.notes.find(note => note.id == id).inBin = true
    },
    MOVE_OUT_ARCHIVE(state, id) {
      state.notes.find(note => note.id == id).archived = false
    },
    MOVE_OUT_BIN(state, id) {
      state.notes.find(note => note.id == id).inBin = false
    },
  },
  actions: {
  }
})
