<template>
  <div>
    <table>
        <PuzzleRow
        v-for="(item, index) in store.arraySelected" :key="index" :row="index" 
        />
    </table>
  </div>
</template>

<script setup lang="ts">
import PuzzleRow from '../components/PuzzleRow.vue'
import { usePuzzleStore } from '@/stores/PuzzleStore';


const store = usePuzzleStore();
</script>

<style scoped></style>
