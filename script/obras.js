function abrirCor(){
    const urlParams = new URLSearchParams(window.location.search);
    const cor = urlParams.get("cor");
    mostrarGIF(cor)
}

function mostrarGIF(cor) {
    var select = document.getElementById("corSelect");
    var corSelecionada = cor ?? select.value;
    var gifImg = document.getElementById("gifImg");
  
    switch (corSelecionada) {
      case "amarelo":
        gifImg.src = "../imagens/amarelo.gif";
        break;
      case "preto":
        gifImg.src = "../imagens/preto.gif";
        break;
      case "azul":
        gifImg.src = "../imagens/azul.gif";
        break;
    }
  }