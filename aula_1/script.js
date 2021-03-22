var dolar = ''
var real = ''

function show_Result() {
    dolar = (parseFloat(document.getElementById("dolarInput").value) * 5.50).toFixed(2)
    //alert(parseFloat(dolar) * 5.50)
    //alert(document.getElementById("realOutput").innerHTML)
    document.getElementById("real_Output").innerHTML = 'Conversão: ' + dolar + " R$"
}