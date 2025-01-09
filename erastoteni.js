function calculate() {
  //get n from the input
  const inputElement = document.getElementById("numberInput");
  const n = parseInt(inputElement.value, 10);

  //get sqr root of n
  let rootOfN = Math.floor(Math.sqrt(n));

  //declare array
  let array = [];

  //fill up array
  for (let x = 0; x <= n; x++) {
    array[x] = x;
  }

  //mark non prime numbers as null
  for (let x = 2; x <= rootOfN; x++) {
    if (array[x] != null) {
      for (let y = x * x; y <= n; y += x) {
        array[y] = null;
      }
    }
  }
  //filter out non prime numbers and log the result

  array = array.filter((num) => num != null && num >= 2);

  // get container element
  let container = document.getElementById("number-container");
  //reset its value
  container.innerHTML = "";

  //Display each prime number one at a time
  for (let x = 0; x < array.length; x++) {
    setTimeout(() => {}, 1000);
  }
  let i = 0;
  const a = () => {
    if (i < array.length) {
      var element = document.createElement("p");
      element.appendChild(document.createTextNode(array[i++]));
      container.appendChild(element);
    }
    setTimeout(() => {
      a();
    }, 50);
  };
  a();
}
