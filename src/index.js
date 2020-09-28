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
