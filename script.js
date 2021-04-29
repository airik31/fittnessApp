/* <button onclick="myJsFunction()"></button>
<script type="text/javascript">
 function myJsFunction(){
    var text=document.getElementById('input1').value;
 }
</script> */

function bodyFatCalc () {
   let bmi = document.getElementById("BMI").value;
   let age = document.getElementById("age").value;
   let male = document.getElementById("male").checked;
   let female = document.getElementById("female").checked;
   // alert(`male:${male}, female:${female}`)
   if (bmi === "" ) {
      alert("Please input your BMI!")
   } else if (age === "") {
      alert("Please input your age!")
   } else {
   if (male === false && female === false) {
      alert("You have to select your gender!")
   } else if (male === true && female === true) {
      alert("You can only select ONE gender!")

   } else if (male == true) {
      let bodyFat = (1.39 * bmi) + (0.16 * age) - (10.34 * 1) -9;
      document.getElementById("result").innerHTML = `<p>Your estimated Body Fat Percentage is ${bodyFat}%.</p>`;
   } else if (female == true) {
      let bodyFat = (1.39 * bmi) + (0.16 * age) -9;
      document.getElementById("result").innerHTML = `<p>Your estimated Body Fat Percentage is ${bodyFat}%.</p>`;
      
   }
         }

}