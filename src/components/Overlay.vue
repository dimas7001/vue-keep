<template>
<!--
  .overlay
    - appears only when overlayInfo.overlayHidden = false
    - disappears when click exactly on it

  .overlay__form
    - runs saveNote method when submitted

  .overlay__note-title
    - binded with noteTitle variable

  .overlay__note-content
    - binded with noteContent variable

  .overlay__submit
    - runs saveNote method when clicked
-->
  <OverlayBlock>
    <div
      class="overlay"
      :class="{'overlay_hidden': overlayInfo.overlayHidden}"
      @click.self="$emit('toggle-overlay')"
    >
      <form
        class="overlay__form"
        @submit.prevent="saveNote"
      >
        <input
          class="overlay__note-title"
          placeholder="Note Title"
          type="text"
          v-model="noteTitle"
        >
        <textarea
          class="overlay__note-content"
          placeholder="Note Lorem Ipsum..."
          type="text"
          v-model="noteContent"
        ></textarea>
        <div
          class="overlay__submit"
          @click="saveNote"
        >Save Note</div>
      </form>
    </div>
  </OverlayBlock>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { OverlayBlock } from "@/styles/styledBlocks.js"

export default {
  name: 'Overlay',
  components: {
    OverlayBlock
  },
  props: {
    overlayInfo: Object
  },
  emits: ['toggle-overlay', 'toggle-alert'],
  data() {
    return ({
      minID: 0, //min id number
      maxID: 99999, //max id number
      noteTitle: '',
      noteContent: '',
    })
  },
  methods: {
    generateID(min = this.minID, max = this.maxID) {  //generates id for new note
      return 'n' + Math.floor( Math.random() * ( max - min + 1 ) + min )
    },
    ...mapMutations([ //vuex mutations helper
      'ADD_NOTE', 'EDIT_NOTE'
    ]),
    saveNote() {  //updates store.notes with data filled in form
      if (this.overlayInfo.overlayMode === 'add') { //if overlay was opened with 'add' mode
        if (this.noteTitle || this.noteContent) { //if at least one of form fields not empty
          let id = ''

          do {  //generate new id until we have a unique one
            id = this.generateID()
          }
          while (this.idExists(id)) //check if generated id already exists

          this.ADD_NOTE({ //emit store mutation with new note data 
            id: id,
            title: this.noteTitle,
            content: this.noteContent,
          })

          this.noteTitle = '' //clearing the form
          this.noteContent = ''
          this.$emit('toggle-alert', 'Your note was saved') //alert of success
          this.$emit('toggle-overlay')  //close overlay
        } else {  //if form fields are both empty show alert
          this.$emit('toggle-alert', 'Please don\'t leave the note empty :(')
        }
      }
      else if (this.overlayInfo.overlayMode === 'edit') { //if overlay was opened with 'edit' mode
        if (this.noteTitle || this.noteContent) { //if at least one of form fields not empty
          this.EDIT_NOTE({  //emit store mutation with new data for existing note
            id: this.overlayInfo.noteID,
            title: this.noteTitle,
            content: this.noteContent,
          })
          this.$emit('toggle-alert', 'Changes are saved') //alert of success
          this.$emit('toggle-overlay')
        } else {  //if form fields are both empty show alert
          this.$emit('toggle-alert', 'Please don\'t leave both fields empty :(')
        }
      }
    },
  },
  computed: {
    ...mapGetters(['idExists']),  //vuex getters helper
  },
  watch: {
    $props: {
      handler() { //if component receives note text (overlay was opened in 'edit' mode) then it fulfills the form 
      this.noteTitle = this.overlayInfo.noteTitle
      this.noteContent = this.overlayInfo.noteContent
      },
      deep: true,
    }
  },
}
</script>