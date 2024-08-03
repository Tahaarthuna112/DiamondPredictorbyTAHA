document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');

    // Set the initial mode based on the body class
    modeToggle.checked = document.body.classList.contains('dark-mode');

    // Add event listener to the slider
    modeToggle.addEventListener('change', function() {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');
    });
});

// function showResult(event) {
//     event.preventDefault();
//     document.getElementById('result').style.display = 'block';
// }


