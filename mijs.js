let ArrayTarea = [];

let button = document.getElementById("ButtonEnviar")
button.addEventListener("click", function () {
    let tituloTarea = document.getElementById("tituloTarea").value;
    let contenidoTarea = document.getElementById("contenidoTarea").value;

    if (tituloTarea !== "" && contenidoTarea !== "") {
        let tarea = {
            titulo: tituloTarea,
            contenido: contenidoTarea,
            completada: false
        };
        ArrayTarea.push(tarea);
        alert("Se Agrego La Tarea");
        
        document.getElementById("tituloTarea").value = "";
        document.getElementById("contenidoTarea").value = "";
    } else {
        console.log("Error al Agregar La Tarea");
        
    }
});

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", function () {
    mostrarTareas(ArrayTarea);
});

let mostrarCompletadas = document.getElementById("mostrarCompletadas");
mostrarCompletadas.addEventListener("click", function () {
    const tareasCompletadas = ArrayTarea.filter(tarea => tarea.completada);
    mostrarTareas(tareasCompletadas);
});

let mostrarNoRealizadas = document.getElementById("mostrarNoRealizadas");
mostrarNoRealizadas.addEventListener("click", function () {
    const tareasNoRealizadas = ArrayTarea.filter(tarea => !tarea.completada);
    mostrarTareas(tareasNoRealizadas);
});

/////////////////////////////////////////////////////////

function mostrarTareas(tareas) {
    let informacion = document.getElementById("informacion");
    informacion.innerHTML = ""; 

/////////////////////////////////////////////////////////

    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];
        let listItem = document.createElement("li");
        listItem.textContent = "Título: " + tarea.titulo + ", Descripción: " + tarea.contenido;
       

        //agregar id o class para el titulo y la discripcio////
        //

        

        let markButton = document.createElement("button");
        if (tarea.completada) {


            markButton.textContent = "Marcar como Sin Realizar";
        } else {
            markButton.textContent = "Marcar como Completada";
        }
        markButton.addEventListener("click", function () {
            tarea.completada = !tarea.completada;
            if (tarea.completada) {

                markButton.textContent = "REALIZADA";
            } else {
                markButton.textContent = "SIN REALIZAR";
            }
        });

        let editButton = document.createElement("button");
        editButton.textContent = "Editar";

        editButton.addEventListener("click", function () {
            let editForm = document.createElement("div");


            let editTitleInput = document.createElement("input");
            
            editTitleInput.value = tarea.titulo;
            


            let editContentInput = document.createElement("input");

            
            editContentInput.value = tarea.contenido;

            let saveButton = document.createElement("button");
            
            saveButton.textContent = "Guardar";
            saveButton.setAttribute('id','editar')
            saveButton.addEventListener("click", function () {
                tarea.titulo = editTitleInput.value;
                tarea.contenido = editContentInput.value;
                listItem.textContent = "Título: " + tarea.titulo + ", Descripción: " + tarea.contenido;
                informacion.removeChild(editForm);
               
                
            });

            editForm.appendChild(editTitleInput);
            editForm.appendChild(editContentInput);
            editForm.appendChild(saveButton);

            informacion.appendChild(editForm);
        });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function () {
            ArrayTarea.splice(ArrayTarea.indexOf(tarea), 1);
            informacion.removeChild(listItem);
        });

                /////////


        listItem.appendChild(markButton);
        markButton.setAttribute('id','editar')
        listItem.appendChild(editButton);
        editButton.setAttribute('id','editar')
        listItem.appendChild(deleteButton);
        deleteButton.setAttribute('id','editar')
        informacion.appendChild(listItem);
    }
}