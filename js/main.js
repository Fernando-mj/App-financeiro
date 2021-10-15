function adicionarDinheiro() {
    document.getElementById('popUpDinheiro').style.display = "flex";
    document.getElementById('botao-Dinheiro').style.display = "none";
    document.getElementById('botao-Despesa').style.display = "none";
}

      function adicionarSaldo () {
        var capturando = "";
        var saldoTotal = "";

        capturando = document.getElementById("adicionarSaldo").value;

        var tudo = parseFloat(capturando) + parseFloat((saldoTotal = document.getElementById("saldo").value));

        document.getElementById("saldo").value = tudo;
      };