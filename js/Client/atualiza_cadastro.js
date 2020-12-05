$(function(){

    var btnAtualizarDados = $("#btnCadastrar");
    var btnCancelar = $("#btnCancelar");
    
    var txtNomeMeuCad = $("#txtNomeCad");
    var txtEmailMeuCad = $("#txtEmailCad")
    var txtSenhaMeuCad = $("#txtSenhaCad");
    var txtConfSenhaMeuCad = $('#txtConfSenhaCad')

    


    btnCancelar.click(function(){
         window.location.href = "/index";
     });

     btnAtualizarDados.click(function(){
        console.log('Botao pressionado')

        if(txtSenhaMeuCad.val() !== txtConfSenhaMeuCad.val()){
            alert('Confirmação de senha diferente do campo senha')
            return
        }else{


        var data = {
            "password" : txtSenhaMeuCad.val(),
            "email": txtEmailMeuCad.val()
        };
        
        $.ajax({
            url: '/api/cadastro/atualiza_cadastro',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: true,
            success: function(response) {
                if(typeof(Storage) !== "undefined")
                    localStorage.username = response.user.username;

                window.location.href = "/";
            },
            error : function(){
                alert("Não foi possível atualizar cadastro. Tente novamente mais tarde.");
            }
        });
    }
    });
});
