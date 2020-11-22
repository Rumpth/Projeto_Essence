function ocultaresconde() {
    var valor = $("#Pagamento").val();

    if (valor == 'boleto') {
        $(".infoBoleto").show();
        $(".Credito").hide();
      
    }
    else {
    $(".Credito").show();
    $(".infoBoleto").hide();
    
    }
    
}

function comprar(){
    alert('Seu pagamento foi finalizado!')
    window.location.href='../index.html'
}