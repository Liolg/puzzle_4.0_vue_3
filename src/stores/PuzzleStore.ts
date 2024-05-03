/* eslint-disable */

import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const usePuzzleStore = defineStore("puzzle", () => {
  /* DATA */
  const array3: Ref<(number | null)[][]> = ref([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, null],
  ]);
  const array4: Ref<(number | null)[][]> = ref([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, null],
  ]);
  const arraySize = ref('3');
  let arraySelected: Ref<(number | null)[][]> = ref(array3.value);
  const timeDif = ref(0);
  let timeStart = 0;
  let timerId: ReturnType<typeof setInterval> | undefined;
  let showCongrats = ref(false);
  let arrayDisordered = ref(false);

  /* METHODS */

  function clickData(yD: number, xD: number): void {
    let yNull: number, xNull: number;
    [yNull, xNull] = findNull(arraySelected.value);

    if (xD == xNull) {
      if (yD - yNull == 1 || yD - yNull == -1) {
        arraySelected.value[yNull][xNull] = arraySelected.value[yD][xD];
        arraySelected.value[yD][xD] = null;
        checkCompleteness(arraySelected.value);
      }
    } else if (yD == yNull) {
      if (xD - xNull == 1 || xD - xNull == -1) {
        arraySelected.value[yNull][xNull] = arraySelected.value[yD][xD];
        arraySelected.value[yD][xD] = null;
        checkCompleteness(arraySelected.value);
      }
    }
  }

  function findNull(arr: (number | null)[][]): [number, number] {
    for (let y in arr) {
      let temp = arr[y].indexOf(null);
      if (temp != -1) return [+y, temp];
    }
    return [0, 0];
  }

  function checkCompleteness(arr: (number | null)[][]): void {
    let counter = 1;
    for (let y in arr) {
      for (let x in arr[y]) {
        if (arr[y][x] != counter) return;

        if (counter == (+arraySize.value) ** 2 - 1) break;
        counter++;
      }
    }
    showCongrats.value = arrayDisordered.value ? true : false;
    if (showCongrats.value) clearInterval(timerId);
  }

  function disorderArray(): void {
    let set: Set<number | null> = new Set();
    let temp: number;
    
    clearInterval(timerId);

    while (set.size < (+arraySize.value) ** 2) {
      temp = Math.ceil(Math.random() * (+arraySize.value) ** 2);
      if (temp == (+arraySize.value) ** 2) set.add(null);
      else set.add(temp);
    }
    
    let setValues: IterableIterator<number | null> = set.values();
    for (let index in arraySelected.value) {
      for (let index2 in arraySelected.value[+index]){
        arraySelected.value[+index][+index2] = setValues.next().value;
      }
    }

    showCongrats.value = false;
    arrayDisordered.value = true;
    timeStart = Date.now();
    timerId = setInterval(() => {
      timeDif.value = Date.now() - timeStart;
    }, 100);
  }

  function stopTimer() {
    clearInterval(timerId);
    timeDif.value = 0;
    arrayDisordered.value = false;
  }

  function $reset() {
    array3.value = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, null],
    ];
    array4.value = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, null],
    ];
    stopTimer();
  }

  return {
    array3,//
    array4,//
    arraySize,//
    arraySelected,//
    arrayDisordered,
    timeDif,//
    timeStart,
    timerId,
    showCongrats,//
    
    clickData,//
    disorderArray,//
    stopTimer,//
    $reset,//
  };
});
