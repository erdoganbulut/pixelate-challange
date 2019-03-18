<template lang="pug">
  main.component.is-home
    .container
      .row.justify-content-center
        .col-8
          Speaker
        .col-8
          Choice
</template>

<script>
import Choice from '../components/Choice.vue';
import Speaker from '../components/Speaker.vue';

export default {
  name: 'home',
  components: {
    Choice,
    Speaker,
  },
};
</script>
