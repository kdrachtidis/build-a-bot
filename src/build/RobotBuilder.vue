<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{ selectedRobot.head.title }}&nbsp;<span v-if="selectedRobot.head.onSale" class="sale"
            >Sale!</span
          >
        </div>
        <img :src="selectedRobot.head.imageUrl" title="head" alt="" />
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.imageUrl" title="Left arm" alt="left arm" />
        <button @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.imageUrl" title="Torso" alt="left arm" />
        <button @click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.imageUrl" title="Right arm" alt="" />
        <button @click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.imageUrl" title="Base" alt="" />
        <button @click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{ robot.head.title }}</td>
          <td class="cost">{{ toCurrency(robot.cost) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import parts from '../data/parts';
import { toCurrency } from '../shared/formatters';

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

function getPreviousValidIndex(index, length) {
  const decrementedIndex = index - 1;
  return decrementedIndex < 0 ? length - 1 : decrementedIndex;
}
const availableParts = parts;
const selectedHeadIndex = ref(0);
const selectedLeftArmIndex = ref(0);
const selectedRightArmIndex = ref(0);
const selectedTorsoIndex = ref(0);
const selectedBaseIndex = ref(0);
const cart = ref([]);

onMounted(() => console.log('Robot Builder Component Mounted'));

const selectedRobot = computed(() => ({
  head: availableParts.heads[selectedHeadIndex.value],
  leftArm: availableParts.arms[selectedLeftArmIndex.value],
  rightArm: availableParts.arms[selectedRightArmIndex.value],
  torso: availableParts.torsos[selectedTorsoIndex.value],
  base: availableParts.bases[selectedBaseIndex.value],
}));

const addToCart = () => {
  const robot = selectedRobot.value;
  const cost =
    robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.torso.cost + robot.base.cost;
  cart.value.push({ ...robot, cost });
  console.log(cart.value.length);
};
// #region Part Selection Functions
const selectNextHead = () => {
  selectedHeadIndex.value = getNextValidIndex(selectedHeadIndex.value, availableParts.heads.length);
};
const selectPreviousHead = () => {
  selectedHeadIndex.value = getPreviousValidIndex(
    selectedHeadIndex.value,
    availableParts.heads.length,
  );
};
const selectPreviousLeftArm = () => {
  selectedLeftArmIndex.value = getPreviousValidIndex(
    selectedLeftArmIndex.value,
    availableParts.arms.length,
  );
};
const selectNextLeftArm = () => {
  selectedLeftArmIndex.value = getNextValidIndex(
    selectedLeftArmIndex.value,
    availableParts.arms.length,
  );
};
const selectPreviousRightArm = () => {
  selectedRightArmIndex.value = getPreviousValidIndex(
    selectedRightArmIndex.value,
    availableParts.arms.length,
  );
};
const selectNextRightArm = () => {
  selectedRightArmIndex.value = getNextValidIndex(
    selectedRightArmIndex.value,
    availableParts.arms.length,
  );
};
const selectPreviousTorso = () => {
  selectedTorsoIndex.value = getPreviousValidIndex(
    selectedTorsoIndex.value,
    availableParts.torsos.length,
  );
};
const selectNextTorso = () => {
  selectedTorsoIndex.value = getNextValidIndex(
    selectedTorsoIndex.value,
    availableParts.torsos.length,
  );
};
const selectPreviousBase = () => {
  selectedBaseIndex.value = getPreviousValidIndex(
    selectedBaseIndex.value,
    availableParts.bases.length,
  );
};
const selectNextBase = () => {
  selectedBaseIndex.value = getNextValidIndex(selectedBaseIndex.value, availableParts.bases.length);
};
// #endregion
</script>

<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}
</style>
