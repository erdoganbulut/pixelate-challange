<template lang="pug">
  section.component.is-speaker
    .speaker--icon
      a.btn.speaker--btn(href="javascript:;")
        img(src="../assets/icons/sound.png")
    p.speaker--text
      | Sesli alıştırmayı dinle. Duyduğun kelimeye karışılık gelen kelime balonunu seç!
</template>

<style lang="scss" scoped>
$this: 'speaker';

section.component {
  &.is-#{$this} {
    padding: 24px 0;
    border-bottom: 1px solid rgba(141, 163, 182, 0.3);
    .#{$this}--icon {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      a {
        display: flex;
        border-radius: 50%;
        overflow: hidden;
        width: 72px;
        height: 72px;
        justify-content: center;
        align-items: center;
        border: solid 8px #c1e2f8;
        background: #36acf7;
        img {
          display: block;
          height: 19px;
          width: auto;
        }
      }
    }
    .#{$this}--text {
      font-size: 18px;
      text-align: center;
      color: #7d88a8;
      margin-top: 16px;
    }
  }
}
</style>
