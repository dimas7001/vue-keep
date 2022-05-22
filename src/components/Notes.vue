<!--
SearchBlock
  - after 3 character filled filters current notes
  - binded to searchValue variable

NewNote
  - opens overlay in 'add' (default) mode

.note__wrapper
  - contains loop throuh result of showCurrentNotes that depends on current type of notes to show

.note
  - have note id attribute for proper work of edit and show/hide econtrols functions
  - when mouseleave close controls if opened

.note__more
  - when click open controls

.note__edit
  - hidden when shown deleted notes
  - when clicked opens overlay in 'edit' mode
  - changes the icon color depending on themeInfo.themeMode = {'light', 'dark'}

.note__archive
  - hidden when shown deleted notes
  - changes the icon image if shown normal or archived notes
  - changes the icon color depending on themeInfo.themeMode = {'light', 'dark'}
  - when click archives/unarchives note

.note__delete
  - changes the icon image if shown deleted or other notes
  - changes the icon color depending on themeInfo.themeMode = {'light', 'dark'}
  - when click noves note to (for notes not in bin) / out of (for notes in bin) bin
-->
<template>
  <SearchBlock
    placeholder="To search please fill in at least 3 signs"
    :theme="theme"
    v-model="searchValue"
  />
  <NewNote
    :theme="theme"
    @click="$emit('toggle-overlay')"
  />
  <NotesBlock
    :theme="theme"  
  >
    <div
      class="note__wrapper"
      v-for="note in showCurrentNotes"
      :key="note.id"
    >
      <div
        class="note"
        @mouseleave="closeControls(note.id)"
        :id="note.id"
      >
        <div class="note__title">
          {{ note.title }}
        </div>
        <div class="note__content">
          {{ note.content }}
        </div>
        <div class="note__controls">
          <div
            class="note__more"
            @click="openControls(note.id)"
          ><div></div></div>
          <div
            class="note__edit"
            :class="notesType === 'deleted'? 'note__edit_hidden' : ''"
            @click="$emit('toggle-overlay', 'edit', note.id, note.title, note.content)"
          >
            <img
              :src="require(`@/assets/img/edit/edit_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
              alt="edit"
            >
          </div>
          <div
            class="note__archive"
            :class="notesType === 'deleted'? 'note__archive_hidden' : ''"
            @click="toggleArchived(note.id)"
          >
            <img
              v-if="notesType !== 'archived'"
              :src="require(`@/assets/img/archive/archive_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
              alt="archive"
            >
            <img
              v-else
              :src="require(`@/assets/img/unarchive/unarchive_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
              alt="unarchive"
            >
          </div>
          <div
            class="note__delete"
            @click="toggleBin(note.id)"
          >
            <img
              v-if="notesType !== 'deleted'"
              :src="require(`@/assets/img/delete/delete_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
              alt="delete"
            >
            <img
              v-else
              :src="require(`@/assets/img/restore/restore_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
              alt="restore"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="note__no-notes">This folder is empty :(</div>
  </NotesBlock>
</template>

<script>
import { SearchBlock, NotesBlock } from "../styles/styledBlocks.js"
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
  inject: ['theme'],
  data() {
    return ({
      searchValue: '',
      notesWasHidden: false,  //flag if any notes were hidden by search
      intervalBeforeRemoval: 60000, //timeout before deletion
      pendingDeletion: {} //list of notes with active timeout before deletion
    })
  },
  methods: {
    ...mapMutations([ //vuex mutations helper
      'MOVE_TO_ARCHIVE', 'MOVE_TO_BIN', 'MOVE_OUT_ARCHIVE', 'MOVE_OUT_BIN', 'DELETE_NOTE'
    ]),
    toggleArchived(id) {  //move note to/out of archive
      switch (this.$props.notesType) {
        case 'normal': 
          this.MOVE_TO_ARCHIVE(id); //archive if normal notes shown 
          this.$emit('toggle-alert', 'Note was archived')
          break;
        case 'archived':
          this.MOVE_OUT_ARCHIVE(id);  //unarchive if archived notes shown 
          this.$emit('toggle-alert', 'Note was unarchived')
          break;
      }
    },
    toggleBin(id) { //move note to/out of bin
      switch (this.$props.notesType) {
        case 'deleted': //if shown notes in bin
          this.MOVE_OUT_BIN(id);  //restore note
          clearInterval(this.pendingDeletion[id]) //discard deletion timeout
          delete this.pendingDeletion[id]
          this.$emit('toggle-alert', 'Note was restored') //show alert of restore
          break;
        default:  //if shown notes not in bin
          this.MOVE_TO_BIN(id); //move note to bin
          this.pendingDeletion[id] = setTimeout(() => this.DELETE_NOTE(id), this.intervalBeforeRemoval);  //update list of notes pending for deletion with timeout for note recently moved to bin 
          this.$emit('toggle-alert', `Note was moved to bin. It will be deleted in ${Math.round(this.intervalBeforeRemoval / 60000 * 100) / 100}min`) //show alert of deletion after timeout
          break;
      }
    },
    openControls(id) {  //open controls of note with specific id
      document.getElementById(id).classList.toggle('note_controls-mode')
    },
    closeControls(id) { //close controls of note with specific id
      let element = document.querySelector(`.note_controls-mode#${id}`)
      if (element)
        element.classList.toggle('note_controls-mode')
    },
    filterNotes() { //filter currently shown notes based on searchValue
      let searchValueLC = this.searchValue.toLowerCase()
      document.querySelectorAll('.note__wrapper').forEach(note => {
        let title = note.querySelector('.note__title').textContent.toLowerCase()
        let content = note.querySelector('.note__content').textContent.toLowerCase()
        if (!title.includes(searchValueLC) && !content.includes(searchValueLC)) { //if title or content of note don't have searchValue
          note.style.display = 'none' //hide note
          if (!this.notesWasHidden) //if no notes was hidden yet
            this.notesWasHidden = true
        }
      })
    },
    showHiddenNotes() { //shows all hidden by search notes
      document.querySelectorAll('.note__wrapper[style="display: none;"]').forEach(note => note.removeAttribute('style'))
      this.notesWasHidden = false
    }
  },
  computed: {
    ...mapGetters(['getNotes', 'getArchivedNotes', 'getDeletedNotes']), //vuex detters helper
    showCurrentNotes() {  //depending on current notesType
      switch (this.$props.notesType) {
        case 'normal': 
          return this.getNotes; //show normal notes
        case 'archived':
          return this.getArchivedNotes; //show archived notes
        case 'deleted':
          return this.getDeletedNotes;  //show notes in bin
      }
    },
  },
  watch: {
    $props: {
      handler() { //when notes type changes discard search results if search was active
        if (this.searchValue) {
          this.notesWasHidden = false
          this.searchValue = ''
        }
      },
      deep: true,
    },
    searchValue() {
      if (this.searchValue.length > 2)  //if searchValue length > 2 start search
        this.filterNotes()
      else if (this.notesWasHidden) //if searchValue length < 2 show all hidden notes if exist
        this.showHiddenNotes()
    },
  },
}
</script>
