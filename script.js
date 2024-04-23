const form = document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault();
 const heights = parseInt(document.querySelector('#height').value)
 const weights = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#results')

 if(heights === "" || heights < 0 || isNaN(heights)){
   results.innerHTML = `plz give valid height ${heights}`
 }else if(weights === "" || weights < 0 || isNaN(weights)){
  results.innerHTML = `plz give valid weight ${weights}`
}else{
 const BMI = (weights / ((heights*heights)/10000)).toFixed(2)
 results.innerHTML = `${BMI}`
if (BMI === 18.6){
  results.innerHTML =`under weight`
}else if(BMI >=18.6 && BMI <= 24.9){
results.innerHTMLnormal = `normal range`
}else {
  results.innerHTML = `overweight`
}
}
})