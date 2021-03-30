$(document).ready(function() {
  const socket = io('http://localhost:5000');
  socket.on('connect', function() { 
    if (socket.connected) {
      console.info('Socket connected...');
      $('#sendBtn').click(() => {
        const message = $('#msgInput').val(); 
        const name = $('#nameInput').val();       
        console.log('sending', message);
        socket.emit('new-message', {name, message}, data => {
           console.log('message sent!');          
        });
        $('#msgInput').val('');
      });  

      socket.on('server-message', data => {       
         console.log('message received!'); 
         const {name, message, time} = data;
         $('#content').append(`
           <p class="bg-secondary text-white p-2" style="border-radius: 1em"> 
             <em>${time} ${name}:</em>  ${message}
           </p>
         `);        
      })
    }
  });
});
