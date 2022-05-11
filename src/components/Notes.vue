<template>
  <NotesBlock>
    <div class="note__wrapper" v-for="note in showCurrentNotes" :key="note.id">
      <div class="note">
        <div class="note__title">
          {{ note.title }}
        </div>
        <div class="note__content">
          {{ note.content }}
        </div>
        <div class="note__controls">
          <div class="note__more"><div></div></div>
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
  computed: {
    ...mapGetters(['getNotes']),
    showCurrentNotes() {
      return this.getNotes
    }
  }
}
</script>
