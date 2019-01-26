const filtro = document.querySelector('#filtrar-tabela');

filtro.addEventListener('input',function(event){
    
    let pacientes = document.querySelectorAll('.paciente')
        
    if(this.value.length > 0){
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            let tdnome = paciente.querySelector('.info-nome')
            let nome = tdnome.textContent;
            let expression = new RegExp(this.value,"i");
            if(!expression.test(nome)){
                paciente.classList.add('hide');
            }else{
                paciente.classList.remove('hide');
            }

        }
    }else{
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove('hide');
        }
    }
});