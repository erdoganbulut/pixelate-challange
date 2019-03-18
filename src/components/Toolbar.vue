<template lang="pug">
  nav.component.is-toolbar
    ul
      li
        a.btn.ui-btn.is-toolbar(href="javascript:;")
          img(src="../assets/icons/toolbar--1.svg")
      li
        a.btn.ui-btn.is-toolbar(href="javascript:;")
          img(src="../assets/icons/toolbar--2.svg")
      li
        a.btn.ui-btn.is-toolbar(href="javascript:;")
          img(src="../assets/icons/toolbar--3.svg")
      li
        a.btn.ui-btn.is-toolbar(href="javascript:;")
          img(src="../assets/icons/toolbar--4.svg")
      li
        a.btn.ui-btn.is-toolbar(href="javascript:;")
          img(src="../assets/icons/toolbar--5.svg")
      li
        a.btn.ui-btn.is-toolbar.is-horizontal(href="javascript:;")
          img(src="../assets/icons/toolbar--6.svg")
      li
        a.btn.ui-btn.is-toolbar(href="javascript:;")
          img(src="../assets/icons/toolbar--7.svg")
</template>

<style lang="scss" scoped>
$this: 'toolbar';

nav.component {
  &.is-#{$this} {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ul {
      padding: 6px 6px;
      margin: 0;
      background: #fff;
      overflow: hidden;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      list-style: none;
      li {
        padding: 12px;
      }
    }
  }
}
</style>
