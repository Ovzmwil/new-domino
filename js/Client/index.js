var comprou = false;
var moedas = 0;
var skinComprada= 0;

moedas = localStorage.getItem('moedas');
if(isNaN(moedas) || moedas< 0) {
    moedas = 0;
}
//zerar quando precisar
//moedas = 0;
//localStorage.setItem('moedas', moedas);
//fim zerar moedas

console.log(moedas);
skinComprada = localStorage.getItem('skinComprada');

function ComprarMoedas() {
    comprou = true;
    moedas = parseInt(moedas) + 400;
    $('#moedasCount').html(moedas);   

    localStorage.setItem('moedas', moedas);
    console.log(moedas);
}

function ComprarSkin(valor) {
    //$("#MensagemComprarPeca").modal("show");

    if(moedas>=valor) {
        UsarMoedas(valor);
        skinComprada = 1;
        localStorage.setItem('skinComprada', skinComprada);
        
        $('#botaoComprarSkinEsferas').hide();
        $('#botaoSkinEsferas').prop('disabled', false);
    }else {
        //alert("Compre mais moedas na Loja!!");
        $("#MensagemComprarPeca").modal("show");
    }

}

function UsarMoedas(valor) {
    comprou = true;
    moedas = parseInt(moedas) - parseInt(valor);
    $('#moedasCount').html(moedas);
    localStorage.setItem('moedas', moedas);
    console.log(moedas);
}

function MokarCompra() {
    //alert ("comprando")
    $('#subTotalEscolhido').html('2.99');
    $('#totalEscolhido').html('2.99');
}

$(document).ready(function() {
    if(typeof(Storage) === "undefined" || !localStorage.username)
        return;

    var welcome = $(".welcome-msg");
    var username = $(".username-msg");
    var logout = $(".logout");
    
    $('#moedasCount').html(moedas);

    username.html(localStorage.username + "!");
    welcome.show();
    username.show();

    logout.click(function(){
        $.ajax({
            url: '/api/logout',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function() {
                window.location.href = "/";
            },
            error : function(){
                window.location.href = "/";
            }
        });
    });    
});
