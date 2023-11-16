
  $(function() {
   

    function enviarMensagemWhatsApp() {
      // Obter os valores dos campos do formulário
      var nome = $('#name').val();
      var email = $('#email').val();
      var mensagem = $('#message').val();

      // Formatar a mensagem para o link do WhatsApp
      var mensagemWhatsApp = "Olá,%20eu%20sou%20" + nome + ".%20Meu%20email:%20" + email + "%20" + mensagem;

      // Criar o link do WhatsApp
      var linkWhatsApp = "https://api.whatsapp.com/send?phone=+5543996567547&text=" + mensagemWhatsApp;

      // Redirecionar para o link do WhatsApp
      window.location.href = linkWhatsApp;
    }

    

    // Adicione um manipulador de clique ao botão de envio do WhatsApp
    $('#submit').on('click', function() {
      enviarMensagemWhatsApp();
    });
  });

