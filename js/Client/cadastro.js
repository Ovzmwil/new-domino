$(function(){
    var btnCadastro = $('#btnCadastrar')
    var txtNomeCad = $('#txtNomeCad')
    var txtSenhaCad = $('#txtSenhaCad')
    var txtConfSenhaCad = $('#txtConfSenhaCad')
    var txtEmailCad = $('#txtEmailCad')

    btnCadastro.click(function(){

        if (txtSenhaCad.val() !== txtConfSenhaCad.val()){
            return () => {
                alert('Confira a confirmação da senha')
            }
        }
        var data = {
            'username': txtNomeCad.val(),
            'email': txtEmailCad.val(),
            'password': txtSenhaCad.val()
        }

        $.ajax({
            url: 'api/cadastro',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: true,
            success: function(response){
                if(typeof(Storage) !== "undefined")
                    localStorage.username = response.user.username;

                window.location.href = "/login"
            },

            error : function(){
                alert("Não foi possível realizar cadastro. Tente novamente");
            }

        })


    })

})