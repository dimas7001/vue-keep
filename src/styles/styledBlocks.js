import styled from "vue3-styled-components";

export const Container = styled.div`
  width: 100vw;
  padding: 0 50px 0 110px;
  transition: .3s all;
  &.container_s {
    padding-left: 260px;
    transition: .3s all;
  }
`

export const ContainerHeader = Container.extend`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 18px 0;
  background-color: rgba(255, 255, 255, .95);
  box-shadow: 0 0 5px 1px #adadad;
  z-index: 10;
  .header {
    &__left-part,
    &__right-part {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > * {
        cursor: pointer;
      }
      & > * + * {
        margin-left: 30px;
      }
    }
    &__logo {
      font-size: 30px;
      line-height: 23px;
      font-weight: 700;
    }
  }
  img {
    height: 24px;
  }
`;

export const NotesBlock = styled.div`
  column-width: 200px;
  column-gap: 20px;
  margin: 60px 0 0;
  padding: 20px 0;
  overflow: visible;
  
  .note {
    position: relative;
    padding: 20px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    break-inside: avoid-column;
    transition: .2s all;
    overflow: hidden;
    &_controls-mode {
      padding: 35px 10px 5px;
      transition: .2s all;
    }
    &:hover {
      box-shadow: 0 0 5px 1px #adadad;
      transition: .2s all;
      .note__controls {
        clip: auto
      }
    }
    &__wrapper {
      min-width: 150px;
      max-width: 250px;
      padding: 5px 0;
    }
    &__title {
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      & + .note__content {
        margin-top: 10px
      }
    }
    &__controls {
      width: 125px;
      position: absolute;
      top: 3px;
      right: -90px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      clip: rect(0 0 0 0);
      transition: .4s all;
      cursor: default;
      & > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        background-color: #353535;
        border-radius: 50%;
        cursor: pointer;
        transition: .2s all;
        & > img {
          max-width: 13px;
          max-height: 13px;
        }
      }
      &_opened {
        right: 5px;
        transition: .4s all;
        .note__more > div {
          background-color: transparent;
          transition: .1s all;
        }
      }
    }
    &__edit > img {
      max-width: 12px !important;
      max-height: 12px !important;
    }
    &__more {
      margin-right: 5px;
      background-color: transparent !important;
      & > div {
        position: relative;
        height: 4px;
        width: 4px;
        background-color: #353535;
        border-radius: 50%;
        transition: .1s all;
        &::before,
        &::after {
          content: '';
          display: block;
          height: 4px;
          width: 4px;
          position: absolute;
          top: 0;
          background-color: inherit;
          border-radius: 50%;
        }
        &::before {
          left: -7px;
        }
        &::after {
          right: -7px;
        }
      }
    }
  }
`;
