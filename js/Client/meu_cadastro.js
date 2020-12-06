function carregaDados(){
    console.log('Dados Cadastro')
    // var txtNomeMeuCad = .val();
    // var txtEmailMeuCad = .val();
    // var txtSenhaMeuCad = .val();
    // var txtConfSenhaMeuCad = .val();

    $.ajax({
            url: '/api/cadastro/meucadastro',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: true,
            success: function(response) {
                console.log('Sucesso API')
                console.log(response)
                // data_user = response['user'];
                // console.log(data_user);
                // // $("#txtNomeMeuCad").val(data_user.name);
                // // $("#txtEmailMeuCad").val(data_user.email);
                // // $("#txtSenhaMeuCad").val(data_user.password);
                // // $('#txtConfSenhaMeuCad').val(data_user.password);
            },
            error : function(response){
                console.log(response['message'])
                console.log(response)
                alert("Não foi possível atualizar cadastro. Tente novamente mais tarde.");
            }
        });
    
    console.log('After jQuery')

    };
