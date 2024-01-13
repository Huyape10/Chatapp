 var socket = io(); // khai bao socket 
      
    var name= prompt("WRITE YOUR NICKNAME BELOW^^");
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var messages = document.getElementById('messages');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value) {
        socket.emit('chat message', name + ": "+ input.value );
        input.value = '';
      }
    });

    socket.on('chat message', function(msg) 
    {
      var item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    }
             );