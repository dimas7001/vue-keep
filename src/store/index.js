import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: [
      {
        id: 'n43142',
        title: "Main Notes Folder",
        content: "Here you'll find all normal or just created notes",
        archived: false,
        inBin: false
      },
      {
        id: 'n43172',
        title: "Archived Folder",
        content: "Here you'll find your archived notes",
        archived: true,
        inBin: false
      },
      {
        id: 'n47142',
        title: "Click on Burger in header to open/close sidebar",
        content: "",
        archived: false,
        inBin: false
      },
      {
        id: 'n43152',
        title: "",
        content: "Press one of icons or labels in the sidebar. We have 3 folders: normal notes, archived and bin",
        archived: false,
        inBin: false
      },
      {
        id: 'n3562',
        title: "Note Controls",
        content: "- hover on note and click ••• to open controls\n- press on 'edit' icon will open an edit form\n- press 'archive' icon to move the note to archived folder\n- after press on 'bin' icon the note will be moved to bin folder and deleted in 1min",
        archived: false,
        inBin: false
      },
      {
        id: 'n15957',
        title: "Create New Note",
        content: "- click + and fill in at least title or content in form\n- press 'Save Note'\n- done!",
        archived: false,
        inBin: false
      },
      {
        id: 'n27919',
        title: "After Note Moved To Bin",
        content: "- you have 1min to restore it\n- go to bin folder and press 'resore' in note controls\n\n- in bin the note's disabled for editing and archiving/unarchiving",
        archived: false,
        inBin: false
      },
      {
        id: 'n16302',
        title: "Search",
        content: "- fill in at least 3 chars to activate search throung notes\n- to deactivete search just delete the substring in searchbar",
        archived: false,
        inBin: false
      },
      {
        id: 'n57889',
        title: "Theming",
        content: "- hover on palette icon in header\n- chose the theme you like",
        archived: false,
        inBin: false
      },
      {
        id: 'n43672',
        title: "",
        content: "Archived notes also possible to edit. You need to do the same as for normal",
        archived: true,
        inBin: false
      },
      {
        id: 'n13180',
        title: "",
        content: "if you restore the note it will appear in the folder where from it was deleted",
        archived: true,
        inBin: false
      },
      {
        id: 'n13181',
        title: "Newly created note",
        content: "will appear in 'normal' folder",
        archived: true,
        inBin: false
      },
      {
        id: 'n13191',
        title: "Alert",
        content: "clicking on alert will hide it immediately",
        archived: true,
        inBin: false
      },
      {
        id: 'n13291',
        title: "Add/Edit Overlay",
        content: "you can exit it just by clicking out of the form",
        archived: true,
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
