<template>
  <div class="notes">
    <div class="note__wrapper">
      <div class="note">
        <div class="note__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat
        </div>
      </div>
    </div>
    <div class="note__wrapper">
      <div class="note">
        <div class="note__title">
          Note Title
        </div>
      </div>
    </div>
    <div class="note__wrapper">
      <div class="note">
        <div class="note__title">
          Note Title
        </div>
        <div class="note__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat
        </div>
      </div>
    </div>
    <div class="note__wrapper">
      <div class="note">
        <div class="note__title">
          Note Title
        </div>
        <div class="note__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat
        </div>
      </div>
    </div>
    <div class="note__wrapper">
      <div class="note">
        <div class="note__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat
        </div>
      </div>
    </div>
    <div class="note__wrapper">
      <div class="note">
        <div class="note__title">
          Note Title
        </div>
      </div>
    </div>
    <div class="note__wrapper">
      <div class="note">
        <div class="note__title">
          Note Title
        </div>
        <div class="note__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat
        </div>
      </div>
    </div>
    <div class="note__wrapper">
      <div class="note">
        <div class="note__title">
          Note Title
        </div>
        <div class="note__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, quasi nihil ipsa corporis placeat
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="sass">
  .notes
    column-width: 200px
    margin: 60px 0 0
    padding: 20px 0
    overflow: visible
  .note
    position: relative
    padding: 10px 7px
    border: 1px solid #d9d9d9
    border-radius: 8px
    break-inside: avoid-column
    cursor: pointer
    transition: .2s all
    &:hover
      box-shadow: 0 0 5px 1px #adadad
      transform: translateX(-10px)
      transition: .2s all
    &__wrapper
      min-width: 150px
      max-width: 250px
      padding: 5px 0
    &__title
      font-size: 18px
      line-height: 22px
      font-weight: 600
      & + .note__content
        margin-top: 10px
</style>
