let width;
let length;

function calculate_Area(){
    width = parseFloat(document.getElementById('width').value);
    length = parseFloat(document.getElementById('length').value);

    let area = width * length;

    document.getElementById('result').innerText = 'The area of the rectange is: ${area}';
}