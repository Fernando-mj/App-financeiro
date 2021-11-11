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

// if(document.getElementById('saldo').value < 1){
//   document.getElementById('saldo').style.color = "#fc7272";
// } else{
//   document.getElementById('saldo').style.color = "#181818";
// }

let despesa = [];

function capturarDespesa() {
  // var capturarTitulo = "";
  // var capturarValor = "";
  // var capturarData = "";
  console.log("Cheguei aqui");


  let novaDespesa = {
    titulo: "",
    preco: 0.00,
    data: "",
    dia: "",
    mes: "",
    ano: ""
  }

  novaDespesa.titulo = document.getElementById("titulo-despesa").value;
  novaDespesa.preco = document.getElementById("preco-despesa").value;
  let data = document.getElementById("data-despesa").value.toLocaleString("pt-BR", { month: "short"});

  novaDespesa.data = data;
  novaDespesa.dia = new Date(data).getDate();
  novaDespesa.mes = new Date(data).getMonth();
  novaDespesa.ano = new Date(data).getFullYear();

  despesa.push(novaDespesa);

  tudo -= novaDespesa.preco;

  document.getElementById("saldo").value = tudo; //Atualizar saldo

  historicoDespesa(novaDespesa);
};

/* MODIFICAR O PREENCHIMENTO DO MÊS
document.getElementById("mes-jan").style.height = '40%';
*/


function historicoDespesa(e){
  document.getElementById("historico").innerHTML += "<div class=\"card\"><p>"+e.data+" foi gasto R$"+e.preco+" reais em <strong>"+e.titulo+"</strong></p></div>";

}



let filtro = document.getElementById("filtro-ano");

filtro.addEventListener('change', (e) => {
  filtrar(filtro.value);
});

function filtrar(ano) {

  let despesasFiltrada = despesa.filter((e) => e.ano == ano);
 
  if(despesasFiltrada.length === 0) {
    document.getElementById("historico").innerHTML = "Não tem nada";
  } else {
    document.getElementById("historico").innerHTML = "";
    for(i = 0; i < despesasFiltrada.length; i++) {
      document.getElementById("historico").innerHTML += "<div class=\"card\"><p>"+despesasFiltrada[i].data+" foi gasto R$"+despesasFiltrada[i].preco+" reais em <strong>"+despesasFiltrada[i].titulo+"</strong></p></div>";
    }
  }
}