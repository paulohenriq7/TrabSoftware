$('#modalExemplo').on('shown.bs.modal', function () {
    $('#modalExemplo').trigger('focus')
  })

  //
  $('.carousel').carousel()
  $('#imgs').carousel({
    interval: 2000
  })

  //

function mascaraCA(mascaraInput) {

  const cpf = document.getElementById('cpfal').maxLength
  let valorcpf = document.getElementById('cpfal').value
  const mascaracpf = {
      Cpfal: valorcpf.replace(/[^\d]/g, "").replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4')
  };

  if (valorcpf.length == cpf) {
      document.getElementById('cpfal').value = mascaracpf[mascaraInput]
  }
}

//

function mascaraa(mascaraInput) {

  const tamanhoInputTelFixo = document.getElementById('telefone').maxLength
  let valorInputTelFixo = document.getElementById('telefone').value
  const mascaraTelFixo = {
      TelPai: valorInputTelFixo.replace(/[^\d]/g, "").replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
  };

  if (valorInputTelFixo.length == tamanhoInputTelFixo) {
      document.getElementById('telefone').value = mascaraTelFixo[mascaraInput]
  }
}
