<template>
  <SidebarBlock>
    <div class="sidebar" :class="{'sidebar_s': sidebarHidden}">
      <div class="sidebar__item" :class="{'sidebar__item_active': notesType === 'normal'}" @click="$emit('toggle-notes-type', 'normal')">
        <img src="../assets/img/notes/notes_b.png" class="sidebar__icon">
        <div class="sidebar__label">Your Notes</div>
      </div>
      <div class="sidebar__item" :class="{'sidebar__item_active': notesType === 'archived'}" @click="$emit('toggle-notes-type', 'archived')">
        <img src="../assets/img/archive/archive_b.png" class="sidebar__icon">
        <div class="sidebar__label">Archived</div>
      </div>
      <div class="sidebar__item" :class="{'sidebar__item_active': notesType === 'deleted'}" @click="$emit('toggle-notes-type', 'deleted')">
        <img src="../assets/img/delete/delete_b.png" class="sidebar__icon">
        <div class="sidebar__label">Bin</div>
      </div>
    </div>
  </SidebarBlock>
</template>

<script>
import { SidebarBlock } from "@/styles/StyledBlocks.js"

export default {
  name: 'Sidebar',
  components: {
    SidebarBlock
  },
  props: {
    sidebarHidden: Boolean,
    notesType: String,   
  },
  emits: ['toggle-notes-type'],
}
</script>
