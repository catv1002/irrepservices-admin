function deleteUsuario(nombre) {
    document.getElementById('deleteLabel').innerHTML=nombre;
}


function editUsuario(nombre, direccion) {
    document.getElementById('editNombre').value=nombre;
    document.getElementById('editDireccion').value=direccion; 
}