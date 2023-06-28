
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var telefone = document.getElementById('telefone').value;

    if (nome && email && celular) {
      var mensagem = "<h2>Obrigado por se cadastrar!</h2>" +
                     "<p><strong>Nome:</strong> " + nome + "</p>" +
                     "<p><strong>E-mail:</strong> " + email + "</p>" +
                     "<p><strong>Celular:</strong> " + celular + "</p>";
  
      if (telefone) {
        mensagem += "<p><strong>Telefone:</strong> " + telefone + "</p>";
      }
  
      document.getElementById('cadastroResultado').innerHTML = mensagem;
      limparFormulario();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
  function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('celular').value = '';
    document.getElementById('telefone').value = '';
  }
  
  
  
  
  