const countingSort = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);

  let i = min, j = 0;
  const len = array.length;
  const count = [];

  for (i; i <= max; i++) {
    count[i] = 0;
  };

  for (i = 0; i < len; i++) {
    count[array[i]] += 1;
  };

  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      array[j] = i;
      j++;
      count[i]--;
    };
  };
  return array;
};
