const number = document.querySelectorAll('td');
const show = document.querySelector('.space')
const arr = {
    first: undefined,
    sign: undefined,
    second: undefined,
};
function isNumber(value) {
  return !isNaN(value);
}
number.forEach( number => {
    number.addEventListener("click", (number) => {
    const textNumber = number.target.textContent;
    if (show.textContent === '0'){
        show.textContent = '';
    }
    if (isNumber(textNumber) && isNumber(show.textContent)){
        show.textContent += textNumber;
        if (show.textContent === '0' && textNumber !== '0'){
            show.textContent = '';
        }
    }
    else{
        if(arr.first === undefined){
            arr.first = Number(show.textContent);
        }
        else if(arr.sign && !arr.second){
            arr.second = Number(show.textContent);
        }
        show.textContent = textNumber;
        if('+-×%÷'.includes(textNumber)){
            arr.sign = textNumber;            
        }
        else if(textNumber === 'AC'){
            for(const key in arr){
                arr[key] = undefined;
            }
            show.textContent = '0';
        }
        else if(textNumber === '='){
            let temp = 0;
            if (arr.sign === '+' ){
                temp = arr.first + arr.second;
                show.textContent = temp;
            }
            else if (arr.sign === '-' ){
                temp = arr.first - arr.second;
                show.textContent = temp;
            }
            else if (arr.sign === '×' ){
                temp = arr.first * arr.second;
                show.textContent = temp;
            }
            else if (arr.sign === '÷' ){
                temp = arr.first / arr.second;
                show.textContent = temp;
            }
            else if (arr.sign === '%' ){
                temp = arr.first / 100 * arr.second;
                show.textContent = temp;
            }
            arr.first = show.textContent;
            arr.sign = undefined;
            arr.second = undefined;
        }
    }
})
});
