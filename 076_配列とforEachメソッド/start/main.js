const array = [1, 2, 3, 4, 5];

array.forEach(function (v, i, ary) {
  console.log(v);
});

// arry.forEach(v => console.log(v));

for (let i = 0; i < array.length; i++) {
  const v = array[i];
  console.log(v);
}
