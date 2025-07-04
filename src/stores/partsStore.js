import { defineStore } from 'pinia';
import { ref } from 'vue';
// eslint-disable-next-line
export const usePartsStore = defineStore('part', () => {
  const parts = ref(null);

  const getParts = async () => {
    const response = await fetch('/api/parts');
    parts.value = await response.json();
  };
  return { parts, getParts };
});
