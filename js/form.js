let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click",function(event){
    
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');

    let paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    
    adicionaPacienteNaTabela(paciente)
    

    form.reset();
    document.querySelector("#mensagem-error").innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){

    let pacientTr = montaTr(paciente); 
    let table =  document.querySelector('#tabela-pacientes');
    table.appendChild(pacientTr);
}

function obtemPacienteDoFormulario(form){
    
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){

    let pacientTr = document.createElement("tr");
    pacientTr.classList.add('paciente');

    pacientTr.appendChild(montaTd(paciente.nome,'info-nome'));
    pacientTr.appendChild(montaTd(paciente.peso,'info-peso'));
    pacientTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacientTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
    pacientTr.appendChild(montaTd(paciente.imc,'info-imc'));

    return pacientTr;
}

function montaTd(dado, classe){

    let td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;
    return td;

} 


function validaPaciente(paciente){
    
    let array_erros = [];

    if(paciente.nome.length == 0){
        array_erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
       array_erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        array_erros.push("Altura inválida");
    }

    if(paciente.gordura.length == 0){
        array_erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        array_erros.push("A peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        array_erros.push("A altura do não pode ser em branco");
    }

    return array_erros;
}

function exibeMensagensDeErro(listErros){
    
    let ul = document.querySelector("#mensagem-error");
    ul.innerHTML = "";
    listErros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro + ';'
        li.classList.add('list-error');
        ul.appendChild(li);
    });
}