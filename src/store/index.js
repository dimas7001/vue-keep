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
        inBin: false
      },
      {
        id: 'n57889',
        title: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
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
        inBin: false
      },
    ]
  },
  getters: {
    getNotes(state) { //sends object with normal notes
      return state.notes.filter(({ archived, inBin }) => !archived && !inBin)
    },
    getArchivedNotes(state) { //sends object with archived notes
      return state.notes.filter(({ archived, inBin }) => archived && !inBin)
    },
    getDeletedNotes(state) {  //sends object with notes in bin
      return state.notes.filter(({ inBin }) => inBin)
    },
    idExists: (state) => (id) => {  //check if map with specific id exists
      return state.notes.map(({ id }) => id).includes(id)
    },
  },
  mutations: {
    ADD_NOTE(state, payload) {  //add new note to notes object
      state.notes.push({
        id: payload.id,
        title: payload.title,
        content: payload.content,
        archived: false,
        inBin: false
      })
    },
    EDIT_NOTE(state, editedNote) { //edit existing note
      state.notes.forEach(note => {
        if (note.id === editedNote.id) {
          note.title = editedNote.title
          note.content = editedNote.content
          return 
        }
      })
    },
    DELETE_NOTE(state, id) {  //delete note with specific id from notes object
      state.notes = state.notes.filter(note => note.id !== id)
    },
    MOVE_TO_ARCHIVE(state, id) {  //change archived property of note with specific id to true
      state.notes.find(note => note.id == id).archived = true
    },
    MOVE_TO_BIN(state, id) {  //change inBin property of note with specific id to true
      state.notes.find(note => note.id == id).inBin = true
    },
    MOVE_OUT_ARCHIVE(state, id) { //change archived property of note with specific id to false
      state.notes.find(note => note.id == id).archived = false
    },
    MOVE_OUT_BIN(state, id) { //change inBin property of note with specific id to false
      state.notes.find(note => note.id == id).inBin = false
    },
  }
})
