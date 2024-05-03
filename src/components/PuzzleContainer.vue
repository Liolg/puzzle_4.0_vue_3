<template>
  <div>
    <h2 class="noWrap">Hello, this is puzzle 4.0 Have fun!</h2>
    <div id="tableTimerButtons">
      <div id="divTable">
        <PuzzleTable />
      </div>
      <div>
        <p id="timer" class="nowrap">
          &nbsp;
          {{ Math.floor((store.timeDif / 600000) % 6) }}
          {{ Math.floor((store.timeDif / 60000) % 10) }}
          &nbsp;:&nbsp;
          {{ Math.floor((store.timeDif / 10000) % 6) }}
          {{ Math.floor((store.timeDif / 1000) % 10) }}
          &nbsp;:&nbsp;
          {{ Math.floor((store.timeDif / 100) % 10) }}
        </p>
        <button @click="store.disorderArray">Start</button>
        &nbsp;&nbsp;
        <button @click="store.stopTimer">Stop</button>
      </div>
    </div>
    <div id="gg">
      <p v-if="store.showCongrats">You won, congrats 🎉</p>
    </div>

    <p style="display: inline">Change the zise of the puzzle:</p>
    <input
      type="radio"
      id="3x3"
      value="3"
      v-model="store.arraySize"
      @click="reset3"
    />
    <label for="3x3">3x3</label>
    <input
      type="radio"
      id="4x4"
      value="4"
      v-model="store.arraySize"
      @click="reset4"
    />
    <label for="4x4">4x4</label>
    <br />
    <div class="footer">
      <p>Made whith Vue 3 + TS</p>
      <p>&lt;&lt;&lt;&copy; LI/OL&gt;&gt;&gt;</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePuzzleStore } from "@/stores/PuzzleStore";
import PuzzleTable from "../components/PuzzleTable.vue";

const store = usePuzzleStore();

function reset3() {
  store.arraySelected = store.array3;
  store.$reset();
}
function reset4() {
  store.arraySelected = store.array4;
  store.$reset();
}
</script>

<style src="../assets/PuzzleStyle.css"></style>
