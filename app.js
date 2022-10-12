window.onload = function () {
   main();
};

let result = 0;

function main() {
   const output = document.getElementById("output");
   const incrementBtn = document.getElementById("increment-btn");
   const decrementBtn = document.getElementById("decrement-btn");
   const incrementInp = document.getElementById("increment-inp");
   const decrementInp = document.getElementById("decrement-inp");
   const resetBtn = document.getElementById("reset-btn");

   displayResult(output);

   incrementBtn.addEventListener("click", () => {
      const incrementVal = Number(incrementInp.value);
      result += incrementVal;
      displayResult(output);
   });
   decrementBtn.addEventListener("click", () => {
      const decrementVal = Number(decrementInp.value);
      result -= decrementVal;
      displayResult(output);
   });

   resetBtn.addEventListener("click", () => {
      result = 0;
      displayResult(output);
      incrementInp.value = "";
      decrementInp.value = "";
   });

   incrementInp.addEventListener("keyup", () => {
      if (incrementInp.value < 0) {
         incrementInp.value = 0;
      }
   });

   decrementInp.addEventListener("keyup", () => {
      if (decrementInp.value < 0) {
         decrementInp.value = 0;
      }
   });
}

function displayResult(output) {
   if (result < 0) {
      result = 0;
   }
   output.innerText = result;
}
