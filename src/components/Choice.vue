<template lang="pug">
  section.component.is-choice
    v-stage(:config="configKonva")
      v-layer
        v-circle(
          v-for="(circle, index) in circles"
          :key="'circle' + index"
          :ref="'circle' + index"
          :config="circle"
          @click="handleClick(index, $event)"
          @mouseenter="handleMouseEnter(index)"
          @mouseout="handleMouseOut(index)")
        v-text(
          v-for="(text, index) in texts"
          :key="'text' + index"
          :ref="'text' + index"
          :config="text"
          @click="handleClick(index, $event)"
          @mouseenter="handleMouseEnter(index)"
          @mouseout="handleMouseOut(index)")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      circles: [],
      texts: [],
      configKonva: {
        width: 480,
        height: 480,
      },
    };
  },
  computed: {
    ...mapGetters({
      words: 'questions',
      now: 'answer',
    }),
  },
  methods: {
    ...mapActions({
      nextQuestion: 'nextQuestion',
    }),
    handleClick(index, e) {
      if (this.texts[index].text === this.now) {
        this.$refs['circle' + index][0].getNode().to({
          fill: '#4eea89',
          duration: 0.4,
        });
        this.$refs['text' + index][0].getNode().to({
          fill: '#FFFFFF',
          duration: 0.4,
        });
        setTimeout(() => {
          this.$refs['circle' + index][0].getNode().to({
            scaleX: 0,
            scaleY: 0,
            duration: 0.4,
          });
          this.$refs['text' + index][0].getNode().to({
            fontSize: 0,
            duration: 0.4,
          });
        }, 700);
        this.nextQuestion();
      } else {
        this.$refs['circle' + index][0].getNode().to({
          fill: '#eb6e74',
          duration: 0.4,
        });
        this.$refs['text' + index][0].getNode().to({
          fill: '#FFFFFF',
          duration: 0.4,
        });
        setTimeout(() => {
          this.$refs['circle' + index][0].getNode().to({
            fill: '#FFFFFF',
            duration: 0.4,
          });
          this.$refs['text' + index][0].getNode().to({
            fill: '#7d88a8',
            duration: 0.4,
          });
        }, 700);
      }
    },
    handleMouseEnter(index) {
      this.$refs['circle' + index][0].getNode().to({
        shadowOpacity: 0.1,
        duration: 0.2,
      });
    },
    handleMouseOut(index) {
      this.$refs['circle' + index][0].getNode().to({
        shadowOpacity: 0,
        duration: 0.2,
      });
    },
    fillCircles() {
      const circles = [];
      this.words.forEach(word => {
        let circle;
        const size = (100 + (word.length * 15)) / 4;
        let position;
        if (circles.length > 0) {
          const lastEl = circles[circles.length - 1];
          const lastElPos = {
            x: lastEl.x + lastEl.radius,
            y: lastEl.y + lastEl.radius,
          };
          if (lastElPos.x + (size * 2) + 10 > 480) {
            position = {
              x: size + 5,
              y: lastElPos.y + size + 10,
            };
          } else {
            position = {
              x: lastElPos.x + size + 10,
              y: lastEl.y > size ? lastEl.y : size,
            };
          }
        } else {
          position = {
            x: size + 5,
            y: size,
          };
        }
        circle = {
          x: position.x,
          y: position.y,
          radius: size,
          fill: '#fff',
          shadowBlur: 5,
          shadowOpacity: 0,
          shadowOffsetY: 5,
        };
        circles.push(circle);
      });
      this.circles = circles;
    },
    fillTexts() {
      const texts = [];
      this.words.forEach((word, index) => {
        const text = {
          x: this.circles[index].x - this.circles[index].radius,
          y: this.circles[index].y - 8,
          width: this.circles[index].radius * 2,
          align: 'center',
          text: word,
          fontSize: 16,
          fontStyle: 'bold',
          fill: '#7d88a8',
        };
        texts.push(text);
      });
      this.texts = texts;
    },
  },
  mounted() {
    this.fillCircles();
    this.fillTexts();
  },
};
</script>

<style lang="scss" scoped>
$this: 'choice';

section.component {
  &.is-#{$this} {
    padding: 24px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
