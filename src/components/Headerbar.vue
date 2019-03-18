<template lang="pug">
  header
    .container
      .row.align-items-center

        .col-2
          a.btn.ui-btn.is-rounded(href="javascript;")
            img(src="../assets/icons/keyboard.svg")
          a.btn.ui-btn.is-rounded(href="javascript;")
            img(src="../assets/icons/lamp.svg")

        .col-8
          Progress

        .col-1.offset-1
          a.btn.btn-block.ui-btn.is-radius.is-text-icon(href="javascript;")
            span KAPAT
            img(src="../assets/icons/close.svg")
</template>

<style lang="scss" scoped>
header {
  padding: 24px 0;
}
</style>

<script>
import Progress from './Progress.vue';

export default {
  name: 'headerbar',
  components: {
    Progress,
  },
};
</script>
