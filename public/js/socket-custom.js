
var socket = io();
socket.on('connect', function(){
    console.log('conectado al servidor');
});

// escuchar 
socket.on('disconnect', function(){
    console.log('perdimos coneccion con el servidor');
});

// enviar informaccion
socket.emit('enviarMensaje', {
    usuario: 'Andy',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('respuesta server: ', resp);
});

// escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
})

