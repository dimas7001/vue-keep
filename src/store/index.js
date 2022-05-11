import { createStore } from 'vuex'

export default createStore({
  state: {
    interval: 30000,
    notes: [
      {
        id: 43142,
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 3562,
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 27919,
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 16302,
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 15957,
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 57889,
        title: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 13180,
        title: "Note Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat",
        archived: false,
        inBin: false
      },
      {
        id: 99981,
        title: "Note Title",
        content: "",
        archived: false,
        inBin: false
      },
    ]
  },
  getters: {
    getNotes (state) {
      return state.notes.filter(({archived, inBin}) => !archived && !inBin)
    }
  },
  mutations: {
  },
  actions: {
  }
})
