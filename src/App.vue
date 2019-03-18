<template lang="pug">
  #app
    Toolbar
    Headerbar
    router-view
</template>

<style lang="scss">
@import './scss/vendors';
@import './scss/global';

</style>

<script>
import Toolbar from './components/Toolbar.vue';
import Headerbar from './components/Headerbar.vue';

export default {
  components: {
    Toolbar,
    Headerbar,
  },
};
</script>
