
// Função para consultar endereços através do CEP informado.

function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html("Logradouro: " +response.logradouro);
            $("#bairro").html("Bairro: " + response.bairro);
            $("#localidade").html("Cidade: " + response.localidade);
            $("#uf").html("Estado: " + response.uf);

            // Outra forma

            //document.getElementById("logradouro").innerHTML = "Logradouro: " + response.logradouro;
            //document.getElementById("bairro").innerHTML = "Bairro: " +response.bairro;
            //document.getElementById("localidade").innerHTML = "Cidade: " +response.localidade;
            //document.getElementById("uf").innerHTML = "Estado: " +response.uf;
        }
    })
}