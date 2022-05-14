<template>
  <OverlayBlock>
    <div class="overlay" @click.self="toggleOverlay">
      <form class="overlay__form">
      <input class="overlay__note-title" placeholder="Note Title" type="text" v-model="noteTitle">
      <textarea class="overlay__note-content" placeholder="Note Lorem Ipsum..." type="text" v-model="noteContent"></textarea>
      <input class="overlay__submit" type="submit" @click.prevent="createNote(); toggleOverlay($event);">
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
  data() {
    return ({
      min: 0,
      max: 99999,
      noteTitle: '',
      noteContent: '',
    })
  },
  methods: {
    toggleOverlay({ target }) {
      target.closest('.overlay').classList.toggle('overlay_hidden')
    },
    generateID(min = this.min, max = this.max) {
      return 'n' + Math.floor( Math.random() * ( max - min + 1 ) + min )
    },
    ...mapMutations([
      'ADD_NOTE'
    ]),
    createNote() {
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
    },
  },
  computed: {
    ...mapGetters(['idExists']),
  }
}
</script>