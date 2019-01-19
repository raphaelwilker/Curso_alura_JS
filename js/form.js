let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click",function(event){
    
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');

    let paciente = obtemPacienteDoFormulario(form);

    let pacientTr = montaTr(paciente);

    let table =  document.querySelector('#tabela-pacientes');
    table.appendChild(pacientTr);

    form.reset();

});

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