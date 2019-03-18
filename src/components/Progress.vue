<template lang="pug">
  section.component.is-progress
    b-progress.ui-progress(:value="counter" :max="max" animated)
    .progress--content
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
          span.progress--content__item--tooltip
            span.progress--content__item--tooltip--text Ses Havuzu
            span.progress--content__item--tooltip--number 1 / 10
      span.progress--content__item.is-active
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
      span.progress--content__item
        span.progress--content__item--circle
          span.progress--content__item--circle--dot
</template>

<script>
export default {
  data() {
    return {
      counter: 10,
      max: 100,
    };
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
