// Função para formatar 1 em 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:ii:ss
  const dataHora =
    zeroFill(now.getUTCDate()) +
    "/" +
    zeroFill(now.getMonth() + 1) +
    "/" +
    now.getFullYear() +
    " " +
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  // Exibe na tela usando a div#data-hora
  document.getElementById("data").innerHTML = dataHora;
  document.getElementById("data1").innerHTML = dataHora;
  document.getElementById("data2").innerHTML = dataHora;
}, 1000);


function norte(){
  document.getElementById("1").innerHTML = "América do Norte"
  document.getElementById("2").innerHTML = "8.307.034"
  document.getElementById("3").innerHTML = "4.232.593"
  document.getElementById("4").innerHTML = "292.371"
}

function sul(){
  document.getElementById("1").innerHTML = "América do Sul"
  document.getElementById("2").innerHTML = "4.940.499"
  document.getElementById("3").innerHTML = "4.295.302"
  document.getElementById("4").innerHTML = "146.773"
}

function africa(){
  document.getElementById("1").innerHTML = "África"
  document.getElementById("2").innerHTML = "682.215"
  document.getElementById("3").innerHTML = "275.645"
  document.getElementById("4").innerHTML = "17.016"
}

function europa(){
  document.getElementById("1").innerHTML = "Europa"
  document.getElementById("2").innerHTML = "1.219.796"
  document.getElementById("3").innerHTML = "535.302"
  document.getElementById("4").innerHTML = "237.773"
}

function asia(){
  document.getElementById("1").innerHTML = "Ásia"
  document.getElementById("2").innerHTML = "6.685.082"
  document.getElementById("3").innerHTML = "2.104.105"
  document.getElementById("4").innerHTML = "103.569"
}

function oceania(){
  document.getElementById("1").innerHTML = "Oceania"
  document.getElementById("2").innerHTML = "27.174"
  document.getElementById("3").innerHTML = "7.408"
  document.getElementById("4").innerHTML = "895"
}