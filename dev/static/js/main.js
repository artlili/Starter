$(document).ready(function () {
    svg4everybody({});
    console.log('Console...');
});

function ready() {
    const textLoad = 'DOM готов';
    alert( textLoad );
}

document.addEventListener("DOMContentLoaded", ready);