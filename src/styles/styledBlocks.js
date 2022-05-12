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

export const BurgerBlock = styled.div`
  .burger {
    position: relative;
    width: 20px;
    height: 20px;
    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      background-color: #000;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
    &__bullet {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 4px;
      width: 4px;
      background-color: #000;
      border-radius: 50%;
      transition: .3s all;
    }
    &_off {
      .burger__bullet {
        left: calc( 100% - 4px );
        transition: .3s all;
      }
    }
  }
`

export const SidebarBlock = styled.div`
  .sidebar {
    position: fixed;
    top: 60px;
    left: 0;
    width: 210px;
    height: calc(100vh - 60px);
    padding: 40px 11px 30px 11px;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 5px 5px 1px #adadad;
    overflow: hidden;
    transition: .3s all;
    &_s {
      width: 60px;
      transition: .3s all;
    }
    &__item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 40px;
      padding: 8px 7px;
      border-radius: 15px;
      transition: .2s all;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
        transition: .2s all;
      }
      & + .sidebar__item {
        margin-top: 30px;
      }
    }
    &__icon {
      width: 24px;
      margin-right: 20px;
    }
    &__label {
      min-width: 130px;
      font-size: 20px;
      font-weight: 600;
    }
  }
`

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
    transition: .25s all;
    overflow: hidden;
    &_controls-mode {
      padding: 35px 10px 5px;
      transition: .25s all;
      .note__controls {
        right: 5px;
        transition: .25s all;
        .note__more {
          cursor: default; 
          & > div {
            background-color: transparent;
            transition: .1s all;
          }
        } 
      }
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
      break-inside: avoid-column;
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
      transition: .25s all;
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
