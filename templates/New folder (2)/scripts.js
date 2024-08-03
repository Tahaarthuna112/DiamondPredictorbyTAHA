document.getElementById('diamondForm').addEventListener('submit', function(event) {
    let carat = document.getElementById('carat').value;
    let depth = document.getElementById('depth').value;
    let table = document.getElementById('table').value;
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let z = document.getElementById('z').value;

    if (!isFloat(carat) || !isFloat(depth) || !isFloat(table) || !isFloat(x) || !isFloat(y) || !isFloat(z)) {
        alert('Please enter valid float values');
        event.preventDefault();
    }
});

function isFloat(value) {
    return !isNaN(value) && parseFloat(value) == value;
}
