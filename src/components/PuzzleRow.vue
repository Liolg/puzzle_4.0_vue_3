<template>
  <!-- <PuzzleData
        v-for="(item, index) in store.arraySelected[row??1]"
        :key="index"
        :row="row??1"
        :index="index"
      /> -->
  <tr>
    <PuzzleData
      v-for="(item2, indexx) in store.arraySelected[row]"
      :key="indexx"
      :row="row"
      :indexx="indexx"
    />
  </tr>
</template>

<script setup lang="ts">
import PuzzleData from "../components/PuzzleData.vue";
import { defineProps } from "vue";

import { usePuzzleStore } from "@/stores/PuzzleStore";

defineProps({
  row: { type: Number, required: true },
});

const store = usePuzzleStore();
</script>

<style scoped></style>
