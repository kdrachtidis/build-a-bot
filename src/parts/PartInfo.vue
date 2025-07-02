<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import parts from '../data/parts';

const props = defineProps(['partType', 'id']);
// eslint-disable-next-line
const part = computed(() => {
  // eslint-disable-next-line
  return parts[props.partType].find(part => part.id === +props.id);
});
</script>
