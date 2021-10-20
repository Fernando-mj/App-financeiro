function adicionarDinheiro() {
    document.getElementById('popUpDinheiro').style.display = "flex";
    document.getElementById('botao-Dinheiro').style.display = "none";
    document.getElementById('botao-Despesa').style.display = "none";
}

function adicionarDespesa() {
  document.getElementById('popUpDespesa').style.display = "flex";
  document.getElementById('botao-Dinheiro').style.display = "none";
  document.getElementById('botao-Despesa').style.display = "none";
}

function cancelar() {
  document.getElementById('popUpDinheiro').style.display = "";
  document.getElementById('popUpDespesa').style.display = "";
  document.getElementById('botao-Dinheiro').style.display = "";
  document.getElementById('botao-Despesa').style.display = "";
}

let tudo;

function adicionarSaldo () {
  // var capturando = "";

  var capturando = document.getElementById("adicionarSaldo").value;

  tudo = parseFloat(capturando) + parseFloat((document.getElementById("saldo").value));

  document.getElementById("saldo").value = tudo;
};

let despesa = [0, 2];
despesa.length = 2;
despesa[1] = 0
function capturarDespesa() {
  // var capturarTitulo = "";
  // var capturarValor = "";
  // var capturarData = "";
  console.log("Cheguei aqui");


  let novaDespesa = {
    titulo: "",
    preco: 0.00,
    data: ""
  }

  novaDespesa.titulo = document.getElementById("titulo-despesa").value;
  novaDespesa.preco = document.getElementById("preco-despesa").value;
  novaDespesa.data = document.getElementById("data-despesa").value;

  despesa.push(novaDespesa);

  tudo -= novaDespesa.preco;

  document.getElementById("saldo").value = tudo; //Atualizar saldo

  historicoDespesa(novaDespesa);
};

function historicoDespesa(e){
  document.getElementById("historico").innerHTML += " <div class=\"card\"><h1>"+e.data+" foi gasto R$"+e.preco+" reais em "+e.titulo+"</h1></div>";

}

let filtro = document.getElementById("filtro-ano");

filtro.addEventListener('change', (e) => {
  filtrar(filtro.value);
});

function filtrar(ano) {
  console.log("cheguei aqui");
  despesaFiltrada = despesa.filter(e => e.data.includes(ano));

  // let despesas;
  // despesaFiltrada.forEach (e => {
  //   despesas += "<div class=\"card\"><h1>"+e.data+" foi gasto R$"+e.preco+" reais em "+e.titulo+"</h1></div>";
  // });

  // document.getElementById("historico").innerHTML = despesas;
}