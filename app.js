const sections = document.getElementsByTagName("section");
const chat = document.getElementById("chat");
const welcome = document.getElementById("welcome");
const nick = document.getElementById("nick")
const message = document.getElementById("message")
const onlineList = document.getElementById("onlineList")
const messages = document.getElementById("messages")

function changeSection(section) {
  Array.from(sections).forEach((s) => {
    s.classList.remove("showSection");
  });
  section.classList.add("showSection");
}

//desarrollo
//let url = "ws://localhost:8080/ws";
//produccion
let url = "wss://chat-backend.cemp2703.repl.co/ws";
/**
 * @type {WebSocket}
 */
let socket;

const btnSend = document.getElementById("btnSend")
btnSend.addEventListener("click", function(){
  let outgoingMessage = JSON.stringify({
    event: "send-new-message",
    payload: {
      nick: nick.value,
      message: message.value,
    },
  });

  socket.send(outgoingMessage);
  return false;
});


const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () => {
  socket = new WebSocket(url);
  // handle incoming messages
  socket.onopen = function(event){
    let outgoingMessage = JSON.stringify({
      event: "new-login",
      payload: {
        nick: nick.value,
        message: "Connected",
      },
    });
    socket.send(outgoingMessage)
  }
  socket.onerror = function(event){
    console.log(event)
  }
  socket.onmessage = function (event) {
    showMessage(event.data);
  };

  socket.onclose = (event) => console.log(`Closed ${event.code}`);

  // show message in div#messages
  function showMessage(datastr) {
    
    let data = JSON.parse(datastr);
    switch (data.event) {
      case "new-login":
        messages.innerHTML=""
        message.value=""
        document.title = nick.value;
        updateNickList(data)
        changeSection(chat);
        break;
      case "send-new-message":
        message.value=""
        updateNewMessage(data)
      break;
      case "update-nick-list":
        updateNickList(data)
      break;
      case "update-new-message":
        updateNewMessage(data)
      break;
    }
  }

  function updateNewMessage(data){
    let messageElem = document.createElement("div");
    messageElem.textContent = `${data.payload.nick}: ${data.payload.message}`;
    document.getElementById("messages").append(messageElem);
  }

  function updateNickList(data){
    let listitem
    console.log(data.payload.nicks)
    onlineList.innerHTML=""
    for(let n of data.payload.nicks){
        listitem = document.createElement("p")
      listitem.innerText=n
      onlineList.append(listitem)
    }
  }

});

const btnLogout = document.getElementById("btnLogout");
btnLogout.addEventListener("click", () => {

  socket.close(1000, "close chat");
  changeSection(welcome);
});
