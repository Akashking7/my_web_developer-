function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function test(msg) {
  console.log(msg);
}

const d = debounce(test, 1000);

d("A");
d("B");
d("C");