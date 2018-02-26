function deleteEmpresa(nombre) {
    document.getElementById('deleteLabel').innerHTML=nombre;
}


function editEmpresa(nombre, direccion) {
    document.getElementById('editNombre').value=nombre;
    document.getElementById('editDireccion').value=direccion; 
}