import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
// eslint-disable-next-line
export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const lastRobotCost = ref(0);
  // eslint-disable-next-line
  const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur.cost, 0));

  return { cart, lastRobotCost, cartTotal };
});
