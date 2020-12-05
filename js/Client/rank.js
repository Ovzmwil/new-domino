function CarregarTodos () {
    $.ajax({
        url: '/api/rank',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        success: function(response) {
            console.log(response);
            let jsonResponse = response['user'];
            console.log(jsonResponse);
            document.getElementById('tbody').innerHTML = '';
            let countKey = Object.keys(jsonResponse).length;
            let row = ""
            for (let i = 0; i < countKey; i++) {
                pos = i + 1
                row = '<tr>' +
                    '<td name="position"> ' + pos + '</td>' +
                    '<td name="nome"> ' + jsonResponse[i]['nome'] + '</td>' +
                    '<td name="pontos"> ' + jsonResponse[i]['pontos'] + '</td>' +
                    '</tr>';
                $("table").append(row);
            }
        },
        error : function(response){
            console.log(response)
            alert(response.responseJSON.error.message);
        }
    });
}