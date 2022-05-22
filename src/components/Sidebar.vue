<!--
.sidebar
  - change the width if sidebarHidden value changes

.sidebar__item
  - hightlighted if matching type of notes shown
  - emits change of type of notes shown

.sidebar__icon
  - changes the icons depending on themeInfo.themeMode = {'light', 'dark'}
-->
<template>
  <SidebarBlock :theme="theme">
    <div
      class="sidebar"
      :class="{'sidebar_s': sidebarHidden}"
    >
      <div
        class="sidebar__item"
        :class="{'sidebar__item_active': notesType === 'normal'}"
        @click="$emit('toggle-notes-type', 'normal')"
      >
        <img
          :src="require(`@/assets/img/notes/notes_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
          class="sidebar__icon"
        >
        <div class="sidebar__label">Your Notes</div>
      </div>
      <div
        class="sidebar__item"
        :class="{'sidebar__item_active': notesType === 'archived'}"
        @click="$emit('toggle-notes-type', 'archived')"
      >
        <img
          :src="require(`@/assets/img/archive/archive_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
          class="sidebar__icon"
        >
        <div class="sidebar__label">Archived</div>
      </div>
      <div class="sidebar__item"
        :class="{'sidebar__item_active': notesType === 'deleted'}"
        @click="$emit('toggle-notes-type', 'deleted')"
      >
        <img
          :src="require(`@/assets/img/delete/delete_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
          class="sidebar__icon"
        >
        <div class="sidebar__label">Bin</div>
      </div>
    </div>
  </SidebarBlock>
</template>

<script>
import { SidebarBlock } from "@/styles/styledBlocks.js"

export default {
  name: 'Sidebar',
  components: {
    SidebarBlock
  },
  props: {
    sidebarHidden: Boolean,
    notesType: String,
    themeInfo: Object,
  },
  emits: ['toggle-notes-type'],
  inject: ['theme'],
}
</script>
