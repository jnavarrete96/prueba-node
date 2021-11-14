function asientosDisponibles(disponibles,elCliente){
    if (disponibles.indexOf(elCliente)!==-1){
        return "Felicitaciones, el asiento número " +elCliente + " está disponible";
    }else {
        return "Lo sentimos, el asiento número " +elCliente + " está ocupado, pero aún quedan "+ disponibles.length + " asientos disponibles"
    }

}
