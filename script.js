
function solicitarOrcamento(event) {
    //pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorCPF = document.getElementById("campo-CPF").value
    let valorCelular = document.getElementById("campo-Celular").value
    let valorDescricao = document.getElementById("campo-texto").value

    //organizar os valores em um objeto 
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        valorCPF,
        valorCelular,
        descricao: valorDescricao
    }

    console.log(dadosForm);
    //enviar a requisicao para a API
    //metodo HTTP POST - creat/criar -> cadastrar um novo registro (solucoes)
    fetch("http://localhost:3000/formulario", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        //CASO SUCESSO
        .then(resposta => {
            console.log(resposta);
            //limpar os inputs
            document.querySelector("#contato form").reset()

            //mostrar alert de sucesso
            alert("solicitacao enviada com sucesso!!!👍")   
        })
.catch(erro =>{
    console.log(erro)
     //mostrar alert com mensagem de erro
    alert("erro na requisição 😢")
})
    //CASO ERRO
   

event.preventDefalt()
}