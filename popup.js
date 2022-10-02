const btnStart = document.getElementById("click-start");
const btnStop = document.getElementById("click-stop");
const input = document.querySelector("#searchBar")


btnStart.addEventListener("click",function(){
    chrome.tabs.query({ currentWindow: true, active: true },function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{command:"start",value:input.value});
})})
    btnStop.addEventListener("click",function(){
       chrome.tabs.query({ currentWindow: true, active: true },function(tabs){
       chrome.tabs.sendMessage(tabs[0].id,'stop')
});
})
