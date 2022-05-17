<template>
  <SearchBlock placeholder="To search please fill in at least 3 signs" v-model="searchValue"></SearchBlock>
  <NewNote @click="$emit('toggle-overlay')" />
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
          <div class="note__edit" :class="notesType === 'deleted'? 'note__edit_hidden' : ''" @click="$emit('toggle-overlay', 'edit', note.id, note.title, note.content)">
            <img :src="require(`@/assets/img/edit/edit_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)" alt="edit">
          </div>
          <div class="note__archive" :class="notesType === 'deleted'? 'note__archive_hidden' : ''" @click="toggleArchived(note.id)">
            <img v-if="notesType !== 'archived'" :src="require(`@/assets/img/archive/archive_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)" alt="archive">
            <img v-else :src="require(`@/assets/img/unarchive/unarchive_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)" alt="unarchive">
          </div>
          <div class="note__delete" @click="toggleBin(note.id)">
            <img v-if="notesType !== 'deleted'" :src="require(`@/assets/img/delete/delete_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)" alt="delete">
            <img v-else :src="require(`@/assets/img/restore/restore_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)" alt="restore">
          </div>
        </div>
      </div>
    </div>
  </NotesBlock>
</template>

<script>
import { SearchBlock, NotesBlock } from "../styles/StyledBlocks.js"
import NewNote from '@/components/NewNote.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Notes',
  components: {
    SearchBlock, NotesBlock, NewNote
  },
  props: {
    notesType: String,
    themeInfo: Object,
  },
  emits: ['toggle-overlay', 'toggle-alert'],
  data() {
    return ({
      themeMode: 'light',
      searchValue: '',
      notesWasHidden: false,
      intervalBeforeRemoval: 60000,
      pendingDeletion: {}
    })
  },
  methods: {
    ...mapMutations([
      'MOVE_TO_ARCHIVE', 'MOVE_TO_BIN', 'MOVE_OUT_ARCHIVE', 'MOVE_OUT_BIN', 'DELETE_NOTE'
    ]),
    toggleArchived(id) {
      switch (this.$props.notesType) {
        case 'normal': 
          this.MOVE_TO_ARCHIVE(id);
          this.$emit('toggle-alert', 'Note was archived')
          break;
        case 'archived':
          this.MOVE_OUT_ARCHIVE(id);
          this.$emit('toggle-alert', 'Note was unarchived')
          break;
      }
    },
    toggleBin(id) {
      switch (this.$props.notesType) {
        case 'deleted': 
          this.MOVE_OUT_BIN(id);
          clearInterval(this.pendingDeletion[id])
          delete this.pendingDeletion[id]
          this.$emit('toggle-alert', 'Note was restored')
          break;
        default:
          this.MOVE_TO_BIN(id);
          this.pendingDeletion[id] = setTimeout(() => this.DELETE_NOTE(id), this.intervalBeforeRemoval);
          this.$emit('toggle-alert', `Note was moved to bin. It will be deleted in ${Math.round(this.intervalBeforeRemoval / 60000 * 100) / 100}min`)
          break;
      }
    },
    openControls(id) {
      document.getElementById(id).classList.toggle('note_controls-mode')
    },
    closeControls(id) {
      let element = document.querySelector(`.note_controls-mode#${id}`)
      if (element)
        element.classList.toggle('note_controls-mode')
    },
    filterNotes() {
      let searchValueLC = this.searchValue.toLowerCase()
      document.querySelectorAll('.note__wrapper').forEach(note => {
        const title = note.querySelector('.note__title').textContent.toLowerCase()
        let content = note.querySelector('.note__content').textContent.toLowerCase()
        if (!title.includes(searchValueLC) && !content.includes(searchValueLC)) {
          note.style.display = 'none'
          if (!this.notesWasHidden)
            this.notesWasHidden = true
        }
      })
    },
    showHiddenNotes() {
      document.querySelectorAll('.note__wrapper[style="display: none;"]').forEach(note => note.removeAttribute('style'))
      this.notesWasHidden = false
    }
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
    },
  },
  watch: {
    $props: {
      handler() {
        if (this.searchValue) {
          this.notesWasHidden = false
          this.searchValue = ''
        }
      },
      deep: true,
    },
    searchValue() {
      if (this.searchValue.length > 2)
        this.filterNotes()
      else if (this.notesWasHidden)
        this.showHiddenNotes()
    },
  },
}
</script>
