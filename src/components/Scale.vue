<template>
  <section class="scale-container">
    <p class="display">
      <Note
        v-for="(note, index) in scale"
        :key="index"
        :note="note"
        :display="scaleKey"
      />
    </p>
    <div ref="scale" class="scale"></div>
  </section>
</template>

<script>
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';
import Note from '@/components/Note.vue';
import writeNotation from '@/utils/writeNotation';

export default {
  name: 'Scale',
  props: {
    scale: Array,
    scaleKey: String,
  },
  components: {
    Note,
  },
  computed: {
    notatedScale() {
      return writeNotation(this.scale, this.scaleKey);
    },
    scaleNotation() {
      return `L:4/4\n${this.notatedScale}\n"`;
    },
  },
  watch: {
    scale: function() {
      this.renderScale();
    },
  },
  mounted() {
    this.renderScale();
  },
  methods: {
    renderScale() {
      abcjs.renderAbc(this.$refs.scale, this.scaleNotation, {
        responsive: 'resize',
        paddingleft: 0,
        paddingright: 0,
        paddingtop: 0,
        paddingbottom: 0,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.scale-container {
  max-width: $medium;
  margin: 0 auto;
}

.scale {
  width: 100%;
}

.display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  margin: 2rem 0 0;
  font-size: 1.25rem;
  padding-left: 2.25rem;
  text-align: left;
}
</style>
