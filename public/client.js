


const socket = io()

let names;
let textarea = document.querySelector('#textarea')
let messagearea = document.querySelector('.message__area')

do{
    names = prompt('Please Enter Your Name: ');
}while(!names)


textarea.addEventListener('keyup',(e)=>{
if(e.key === 'Enter'){
    sendMessage(e.target.value);
}
})


async function sendMessage(message){
    const timestamp = new Date().toLocaleTimeString(); // Get the current time


    let msg =  {

     user: names,
     message : message.trim(),
     timestamp: timestamp
     
    }
    appendMessage(msg,'outgoing')
    textarea.value = ''
    scrollToBottom()

    socket.emit('message',msg );
}


function appendMessage(msg,type){
              
    const mainDiv = document.createElement('div');            

    const classname = type; // incoming or outgoing class which one dynamic
   
    mainDiv.classList.add(classname,'message') // message-class  use for the ui of messages in chat  

    const markup = `
      <h4>${msg.user}</h4>
      <p>${msg.message}</p>
      <span class="timestamp">${msg.timestamp}</span>
     `

     mainDiv.innerHTML = markup
     messagearea.appendChild(mainDiv);   
}






function scrollToBottom(){

    messagearea.scrollTop = messagearea.scrollHeight 

}

// receive message


socket.on('message',(msg)=>{
    console.log(msg);
    appendMessage(msg,'incoming')
    scrollToBottom();
    // const receiverUsername = msg.names; 
})


