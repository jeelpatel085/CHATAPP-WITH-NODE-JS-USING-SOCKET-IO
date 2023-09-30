
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

module.exports = { appendMessage, scrollToBottom };
