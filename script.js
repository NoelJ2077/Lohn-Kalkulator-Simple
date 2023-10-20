function L_Art() {
    var lohnart = document.querySelector('input[name="lohnart"]:checked').value;
    var lohnartTitle = document.getElementById("h2Lohn");
    lohnartTitle.innerHTML = lohnart === "std" ? "Stundenlohn" : "Fixlohn";
}
function berechneLohn() {
    // Get the selected Lohnart (Stundenlohn or Fixlohn)
    const lohnart = document.querySelector('input[name="lohnart"]:checked').value;
  
    // Get the input values
    const stunden = parseFloat(document.getElementById('stunden').value);
    const stundenlohn = parseFloat(document.getElementById('stundenlohn').value);
    const ferienentschaedigung = parseFloat(document.getElementById('ferienentschaedigung').value) / 100 || 0;
    const feiertagsentschaedigung = parseFloat(document.getElementById('feiertagsentschaedigung').value) / 100 || 0;
    const ahv = parseFloat(document.getElementById('ahv').value) / 100 || 0;
    const alv = parseFloat(document.getElementById('alv').value) / 100 || 0;
    const ktg = parseFloat(document.getElementById('ktg').value) / 100 || 0;
    const bvg = parseFloat(document.getElementById('bvg').value) / 100 || 0;
  
    // Brutto
    const brutto = stunden * stundenlohn * (1 + ferienentschaedigung + feiertagsentschaedigung);
    
    // Abzüge
    let abzuege = ahv + alv + ktg + bvg;
    abzuege = brutto * abzuege;
    
    // Lohn nach Abzügen
    const netto = brutto - abzuege;
  
    // Bruttolohn field
    document.getElementById('brutto').value = brutto.toFixed(2) + ' CHF';
    // Total Abzüge field 
    document.getElementById('abzuege').value = abzuege.toFixed(2) + ' CHF | ' + (abzuege / brutto * 100).toFixed(3) + '%';
    // Display the result in the input field
    document.getElementById('result').value = netto.toFixed(2) + ' CHF';
}

// event listener for input fields
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
    input.addEventListener('input', berechneLohn);
});

berechneLohn(); // trigger 
