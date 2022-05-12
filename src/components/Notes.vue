<template>
  <NotesBlock>
    <div class="note__wrapper" v-for="note in showCurrentNotes" :key="note.id">
      <div class="note" @mouseleave="closeControls(note.id)" :id="note.id">
        <div class="note__title">
          {{ note.title }}
        </div>
        <div class="note__content">
          {{ note.content }}
        </div>
        <div class="note__controls">
          <div class="note__more" @click="openControls(note.id)"><div></div></div>
          <div class="note__edit">
            <img src="../assets/img/edit/edit_w.png" alt="edit">
          </div>
          <div class="note__archive">
            <img src="../assets/img/archive/archive_w.png" alt="archive">
          </div>
          <div class="note__delete">
            <img src="../assets/img/delete/delete_w.png" alt="delete">
          </div>
        </div>
      </div>
    </div>
  </NotesBlock>
</template>

<script>
import { NotesBlock } from "../styles/StyledBlocks.js"
import { mapGetters } from 'vuex'

export default {
  name: 'Notes',
  components: {
    NotesBlock
  },
  props: {
    notesType: String
  },
  methods: {
    openControls(id) {
      document.getElementById(id).classList.toggle('note_controls-mode')
    },
    closeControls(id) {
      let element = document.querySelector(`.note_controls-mode#${id}`)
      if (element)
        element.classList.toggle('note_controls-mode')
    },
  },
  computed: {
    ...mapGetters(['getNotes', 'getArchivedNotes', 'getDeletedNotes']),
    showCurrentNotes() {
      switch (this.$props.notesType) {
        case 'normal': 
          return this.getNotes;
        case 'archived':
          return this.getArchivedNotes;
        case 'deleted':
          return this.getDeletedNotes;
      }
    }
  }
}
</script>
