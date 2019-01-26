const button = document.querySelector('#buscar-pacientes');
button.addEventListener('click', function(event){
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
        if(xhr.status == 200){
            document.querySelector('#erro-mensager').classList.add('hide');
            let pacientes = JSON.parse(xhr.responseText);
        
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.error(xhr.status);
            console.log(xhr.responseText);
            document.querySelector('#erro-mensager').classList.remove('hide');


        }
        
        
    });
    xhr.send();
    this.classList.add('hide');
});