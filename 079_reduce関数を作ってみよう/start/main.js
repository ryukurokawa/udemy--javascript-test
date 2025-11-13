const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
  // console.log(accu);
  return `${accu}<${curr}>`;
}

function reduce(array, callback, defaultValue) {
  let accu = defaultValue;

  for (let i = 0; i < arry.length; i++) {
    let curr = array[i];
    accu = callback(accu, curr);
  }

  return accu;
}

const result = reduce(strArray, tag, '');
console.log(result);
