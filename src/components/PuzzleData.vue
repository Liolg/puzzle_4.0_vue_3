<template>
  <td @click="store.clickData(row, indexx)">
    {{ store.arraySelected[row][indexx] }}
  </td>
</template>

<script setup lang="ts">
import { usePuzzleStore } from "../stores/PuzzleStore";
import { defineProps } from "vue";

const store = usePuzzleStore();

defineProps({
  row: { type: Number, required: true },
  indexx: { type: Number, required: true },
});
</script>

<style scoped></style>
