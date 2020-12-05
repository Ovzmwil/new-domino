$(function(){
    var btnLogin = $("#btnLogin");
    var btnConta = $("#btnConta");
    var btnCadastrar = $("#btnCadastrar");
    var btnCancelar = $("#btnCancelar");
    
    var txtUsernameCad = $("#txtNomeCad");
    var txtEmailCad = $("#txtEmailCad")
    var txtPasswordCad = $("#txtSenhaCad");
    var txtConfPasswordCad = $('#txtConfSenhaCad')


    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        txtUsername.val("akamine");
    }else{
        var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
        if (fs) {
            fs(window.TEMPORARY, 100, function() {}, function() {
                txtUsername.val("akamine");
            });
        }
    }

    btnConta.click(function(){
        window.location.href = "/index";
    });

    // btnCancelar.click(function(){
    //      window.location.href = "/index";
    //  });

    btnCadastrar.click(function(){
        console.log('Botao pressionado')
        var data = {
            "name" : txtUsernameCad.val(),
            "password" : txtPasswordCad.val(),
            "email": txtEmailCad.val()
        };
        
        $.ajax({
            url: '/api/cadastro',
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
                alert("Não foi possível realizar cadastro. Tente novamente mais tarde.");
            }
        });
    });
});
