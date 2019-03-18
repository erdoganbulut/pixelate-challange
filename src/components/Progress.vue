<template lang="pug">
  section.component.is-progress
    b-progress.ui-progress(:value="now" :max="total" animated)
    .progress--content
      span.progress--content__item(v-for="index in total + 1" :class="{ 'is-active': index - 1 === now }")
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
          span.progress--content__item--tooltip(v-if="index - 1 === now")
            span.progress--content__item--tooltip--text Ses Havuzu
            span.progress--content__item--tooltip--number {{ now }} / 10
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      answers: 'answers',
      questions: 'questions',
    }),
    total() {
      return this.questions.length;
    },
    now() {
      return this.total - this.answers.length;
    },
  },
};
</script>

<style lang="scss" scoped>
$this: 'progress';

section.component {
  &.is-#{$this} {
    position: relative;
    .#{$this}--content {
      position: absolute;
      left: 0;
      right: 2px;
      top: 0;
      bottom: 0;
      display: flex;
      flex-wrap: wrap;
      &__item {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        width: 10%;
        padding: 2px 0;
        &--circle {
          position: relative;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px #fff solid;
          &--dot {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #4dec6f;
            opacity: 0;
            transition: 0.2s;
          }
        }
        &--tooltip {
          position: absolute;
          display: flex;
          align-items: center;
          background: #30acf7;
          top: 26px;
          left: 0;
          transform: translateX(-50%);
          border-radius: 5px;
          white-space: nowrap;
          color: #fff;
          padding: 6px 8px;
          &:before {
            position: absolute;
            content: "";
            border-color: transparent;
            border-style: solid;
            bottom: 0;
            border-width: 0 .25rem .4rem;
            border-bottom-color: #30acf7;
            bottom: 100%;
            left: 50%;
          }
          &--text {
            display: block;
            font-size: 12px;
            font-weight: 600;
            margin-right: 8px;
          }
          &--number {
            display: block;
            padding: 4px;
            border-radius: 4px;
            background: #59bdf9;
            font-size: 12px;
          }
        }
        &:first-child {
          position: absolute;
          top: 0;
          left: 2px;
          bottom: 0;
          justify-content: flex-start;
        }
        &.is-active {
          .#{$this}--content__item--circle {
            &--dot {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
