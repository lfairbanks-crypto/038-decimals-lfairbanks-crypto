// define as explicit globals on window so the test harness can access them
window.lengthInFeet = 1.5;
window.pricePerFoot = 2.50;
window.totalPrice = window.lengthInFeet * window.pricePerFoot;

document.getElementById('result').innerHTML = window.totalPrice;
