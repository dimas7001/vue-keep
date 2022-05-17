<template>
  <OverlayBlock>
    <div class="overlay" :class="{'overlay_hidden': overlayInfo.overlayHidden}" @click.self="$emit('toggle-overlay')">
      <form class="overlay__form" @submit.prevent="saveNote">
      <input class="overlay__note-title" placeholder="Note Title" type="text" v-model="noteTitle">
      <textarea class="overlay__note-content" placeholder="Note Lorem Ipsum..." type="text" v-model="noteContent"></textarea>
      <div class="overlay__submit" @click="saveNote">Save Note</div>
    </form>
    </div>
  </OverlayBlock>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { OverlayBlock } from "@/styles/StyledBlocks.js"

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
      minID: 0,
      maxID: 99999,
      noteTitle: '',
      noteContent: '',
    })
  },
  methods: {
    generateID(min = this.minID, max = this.maxID) {
      return 'n' + Math.floor( Math.random() * ( max - min + 1 ) + min )
    },
    ...mapMutations([
      'ADD_NOTE', 'EDIT_NOTE'
    ]),
    saveNote() {
      if (this.overlayInfo.overlayMode === 'add') {
        if (this.noteTitle || this.noteContent) {
          let id = ''

          do {
            id = this.generateID()
          }
          while (this.idExists(id))

          this.ADD_NOTE({
            id: this.generateID(),
            title: this.noteTitle,
            content: this.noteContent,
          })

          this.noteTitle = ''
          this.noteContent = ''
          this.$emit('toggle-alert', 'Your note was saved')
          this.$emit('toggle-overlay')
        } else {
          this.$emit('toggle-alert', 'Please don\'t leave the note empty :(')
        }
      }
      else if (this.overlayInfo.overlayMode === 'edit') {
        if (this.noteTitle || this.noteContent) {
          this.EDIT_NOTE({
            id: this.overlayInfo.noteID,
            title: this.noteTitle,
            content: this.noteContent,
          })
          this.$emit('toggle-alert', 'Changes are saved')
          this.$emit('toggle-overlay')
        } else {
          this.$emit('toggle-alert', 'Please don\'t leave both fields empty :(')
        }
      }
    },
  },
  computed: {
    ...mapGetters(['idExists']),
  },
  watch: {
    $props: {
      handler() {
      this.noteTitle = this.overlayInfo.noteTitle
      this.noteContent = this.overlayInfo.noteContent
      },
      deep: true,
    }
  },
}
</script>