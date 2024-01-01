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

<script lang="ts">
import altoSax from '@/assets/icons/altoSax.svg?component';
import arrowRight from '@/assets/icons/arrowRight.svg?component';
import banjo from '@/assets/icons/banjo.svg?component';
import bariSax from '@/assets/icons/bariSax.svg?component';
import baritoneHorn from '@/assets/icons/baritoneHorn.svg?component';
import bFlat from '@/assets/icons/bFlat.svg?component';
import c from '@/assets/icons/c.svg?component';
import cello from '@/assets/icons/cello.svg?component';
import clarinet from '@/assets/icons/clarinet.svg?component';
import cornet from '@/assets/icons/cornet.svg?component';
import doubleBass from '@/assets/icons/doubleBass.svg?component';
import eFlat from '@/assets/icons/eFlat.svg?component';
import f from '@/assets/icons/f.svg?component';
import flute from '@/assets/icons/flute.svg?component';
import frenchHorn from '@/assets/icons/frenchHorn.svg?component';
import guitar from '@/assets/icons/guitar.svg?component';
import piano from '@/assets/icons/piano.svg?component';
import piccolo from '@/assets/icons/piccolo.svg?component';
import plus from '@/assets/icons/plus.svg?component';
import sopranoSax from '@/assets/icons/sopranoSax.svg?component';
import tenorSax from '@/assets/icons/tenorSax.svg?component';
import trombone from '@/assets/icons/trombone.svg?component';
import trumpet from '@/assets/icons/trumpet.svg?component';
import tuba from '@/assets/icons/tuba.svg?component';
import viola from '@/assets/icons/viola.svg?component';
import violin from '@/assets/icons/violin.svg?component';

export default {
  name: 'Icon',

  components: {
    altoSax,
    arrowRight,
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
    trombone,
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
