console.log('Hello world');

function CelsiusToFarenhiet(input){
    return (input*9/5)+32;
}
function FarenheitToCelsius(input){
    return (input-32)*5/9;
}

document.querySelector('.btn').addEventListener('click',function(){
    const input = Number(document.querySelector('#degreeInput').value);
    const inputType = document.querySelector('#option').value;
    console.log(input,inputType);
    let result;
    inputType ==='Celsius' ? result = CelsiusToFarenhiet(input) : result = FarenheitToCelsius(input);
    inputType === 'Celsius' ? result+='°F' : result+='°C';
    document.querySelector('.result').textContent = result;
})