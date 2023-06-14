// Atividade 1 - Cálculo da área de um terreno
function calculateArea() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var area = length * width;
    document.getElementById("areaResult").textContent = "Área do terreno: " + area + " m²";
  }
  
  // Atividade 2 - Cálculo de ferraduras para um haras
  function calculateFerraduras() {
    var horses = parseInt(document.getElementById("horses").value);
    var ferraduras = horses * 4;
    document.getElementById("ferradurasResult").textContent = "Número de ferraduras necessárias: " + ferraduras;
  }
  
  // Atividade 3 - Cálculo de arrecadação e poupança na Padaria Hotpão
  function calculateArrecadacao() {
    var pao = parseInt(document.getElementById("pao").value);
    var broa = parseInt(document.getElementById("broa").value);
    var valorPao = 0.12;
    var valorBroa = 1.50;
    var totalArrecadado = pao * valorPao + broa * valorBroa;
    var poupanca = totalArrecadado * 0.1;
    document.getElementById("arrecadacaoResult").textContent = "Total arrecadado: R$ " + totalArrecadado.toFixed(2);
    document.getElementById("poupancaResult").textContent = "Valor a ser guardado na poupança: R$ " + poupanca.toFixed(2);
  }
  
  // Atividade 4 - Cálculo de dias de vida
  function calculateDiasVida() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var diasVida = age * 365;
    document.getElementById("diasVidaResult").textContent = name + ", você já viveu " + diasVida + " dias";
  }
  
  // Atividade 5 - Cálculo de litros de gasolina
  function calculateLitrosGasolina() {
    var precoLitro = parseFloat(document.getElementById("precoLitro").value);
    var valorPagamento = parseFloat(document.getElementById("valorPagamento").value);
    var litrosGasolina = valorPagamento / precoLitro;
    document.getElementById("litrosGasolinaResult").textContent = "Quantidade de litros de gasolina: " + litrosGasolina.toFixed(2) + " litros";
  }
  
  // Atividade 6 - Cálculo do valor a pagar no restaurante Bem-Bão
  function calculateValorPagar() {
    var pesoPrato = parseFloat(document.getElementById("pesoPrato").value);
    var valorPagar = pesoPrato * 12.0;
    document.getElementById("valorPagarResult").textContent = "Valor a pagar: R$ " + valorPagar.toFixed(2);
  }
  
  // Atividade 7 - Cálculo de dias passados desde o início do ano
  function calculateDiasPassados() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var diasPassados = (mes - 1) * 30 + dia;
    document.getElementById("diasPassadosResult").textContent = "Dias passados desde o início do ano: " + diasPassados;
  }
  
  // Atividade 8 - Cálculo do valor arrecadado com a venda de camisetas
  function calculateValorArrecadado() {
    var small = parseInt(document.getElementById("small").value);
    var medium = parseInt(document.getElementById("medium").value);
    var large = parseInt(document.getElementById("large").value);
    var valorSmall = 10.0;
    var valorMedium = 12.0;
    var valorLarge = 15.0;
    var valorArrecadado = small * valorSmall + medium * valorMedium + large * valorLarge;
    document.getElementById("valorArrecadadoResult").textContent = "Valor arrecadado com a venda de camisetas: R$ " + valorArrecadado.toFixed(2);
  }
  