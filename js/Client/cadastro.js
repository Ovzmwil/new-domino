$(function(){
    var btnLogin = $("#btnLogin");
    var btnConta = $("#btnConta");
    var btnCancelar = $("#btnCancelar");
    
    var txtUsername = $("#txtUsername");
    var txtPassword = $("#txtPassword");


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

    btnCancelar.click(function(){
        window.location.href = "/index";
    });

    btnLogin.click(function(){
        var data = {
            "username" : txtUsername.val(),
            "password" : txtPassword.val()
        };
        
        $.ajax({
            url: '/api/login',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(response) {
                if(typeof(Storage) !== "undefined")
                    localStorage.username = response.user.username;

                window.location.href = "/";
            },
            error : function(){
                alert("Não foi possível realizar login. Tente novamente mais tarde.");
            }
        });
    });
});