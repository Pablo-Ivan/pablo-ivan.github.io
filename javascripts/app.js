var toogleNavbar = function() {
  document.getElementById('mobile').classList.toogle('w3-show');
}

var config = {
  apiKey: 'AIzaSyAr_gcP4-n9_M5MjXlLrUXI4hjd__v7om4',
  authDomain: 'alphatalk.firebaseapp.com',
  databaseURL: 'https://alphatalk.firebaseio.com',
  storageBucket: 'project-1765476389964612481.appspot.com'
};

firebase.initializeApp(config);
var myDataRed = firebase.database().red();

var enviar = function() {
  var nombre = $('#name-input').val().toUpperCase();
  var edad = $('#age-input').val();
  var correo = $('#chat-mail-input').val();
  var mensaje = $('#chat-message-input').val();
  
  if (nombre === '$PABLO' && correo !== 'pabloivangomezsoto@gmail.com') {
    return null;
  } else if (nombre === '' || edad === '' || mensaje === '' || correo === '' || $('#chat-mail-input').hasClass('ng-invalid')) {
    var modal = function() {
      document.getElementById('chat-modal').style.display='block';
    }
    modal();
    return null;
  } else {
    console.log('¡Comentario enviado!');
  }
  
  var now = new Date().toString();
  var formatDay = now.substring(8, 10);
  var formatMonth = now.substring(4, 7);
  var formatYear = now.substring(11, 15);
  var formatTime = now.substring(16, 21);
  var finalDate = formatDay + "/" + formatMonth + "/" + formatYear + " " + "(" + formatTime + ") ";
  
  myDataRef.push({
    date: finalDate,
    name: nombre,
    age: edad,
    email: correo,
    text: mensaje
  });
  $('chat-message-input').val('');
}

myDataRef.on('child_added', function(snapshot) {
  var comentario = snapshot.val();
  mostrarMensaje(comentario.date, comentario.name, comentario.text);
});

var mostrarMensaje = function(fecha, nombre, mensaje) {
  $('<div/>').text(mensaje).prepend($('<strong class="w3-text-blue"/>').text(fecha + ' - ' + nombre + ': ')).appendTo($('#messages-div'));
  $('#messages-div')[0].scrollTop = $('#messages-div')[0].scrollHeight;
}
