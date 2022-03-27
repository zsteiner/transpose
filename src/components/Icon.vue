<template>
  <component
    :is="icon"
    :class="[
      $style.icon,
      {
        [$style.inline]: inline,
      },
    ]"
  />
</template>

<script>
import altoSax from '@/assets/icons/altoSax.svg';
import arrowDown from '@/assets/icons/arrowDown.svg';
import banjo from '@/assets/icons/banjo.svg';
import bariSax from '@/assets/icons/bariSax.svg';
import baritoneHorn from '@/assets/icons/baritoneHorn.svg';
import bFlat from '@/assets/icons/bFlat.svg';
import c from '@/assets/icons/c.svg';
import cello from '@/assets/icons/cello.svg';
import clarinet from '@/assets/icons/clarinet.svg';
import cornet from '@/assets/icons/cornet.svg';
import doubleBass from '@/assets/icons/doubleBass.svg';
import eFlat from '@/assets/icons/eFlat.svg';
import f from '@/assets/icons/f.svg';
import flute from '@/assets/icons/flute.svg';
import frenchHorn from '@/assets/icons/frenchHorn.svg';
import guitar from '@/assets/icons/guitar.svg';
import piano from '@/assets/icons/piano.svg';
import piccolo from '@/assets/icons/piccolo.svg';
import plus from '@/assets/icons/plus.svg';
import sopranoSax from '@/assets/icons/sopranoSax.svg';
import tenorSax from '@/assets/icons/tenorSax.svg';
import trumpet from '@/assets/icons/trumpet.svg';
import tuba from '@/assets/icons/tuba.svg';
import viola from '@/assets/icons/viola.svg';
import violin from '@/assets/icons/violin.svg';

export default {
  name: 'Icon',

  components: {
    altoSax,
    arrowDown,
    banjo,
    bariSax,
    baritoneHorn,
    bFlat,
    c,
    cello,
    clarinet,
    cornet,
    doubleBass,
    eFlat,
    f,
    flute,
    frenchHorn,
    guitar,
    piano,
    piccolo,
    plus,
    sopranoSax,
    tenorSax,
    trumpet,
    tuba,
    viola,
    violin,
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    inline: Boolean,
  },
};
</script>

<style module>
.icon {
  fill: currentcolor;
  height: 1em;
  position: relative;
  width: 1em;
}

.inline {
  bottom: -0.125em;
  margin-right: 0.25em;
}
</style>
