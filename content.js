const table = document.querySelector("#table-Body");
const lastRow = table.rows[ table.rows.length - 1 ];
const input = document.querySelector("#searchBar");



chrome.runtime.onMessage.addListener((request) => {
    if(request.command == "start"){
         localStorage.setItem("popupInpValue",request.value)
         location.reload(); 
         
    }
    else if(request = "stop"){
        lastRow.style.background = "#FFF";
        location.reload(); 

        
}})

// document.addEventListener("DOMContentLoaded",autoRefresh);

function autoRefresh(){
    console.log(localStorage.getItem("popupInpValue"))
    if(localStorage.getItem("popupInpValue") || localStorage.getItem("popupInpValue")=== "" ){
        let interval =
        setInterval(() => {
       if(lastRow){
        lastRow.style.background = "red";
         input.value = localStorage.getItem("popupInpValue")
        console.log(input)
        input.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'a' }));
        localStorage.removeItem("popupInpValue");
        clearInterval(interval)
    }
        }, 500);
    }


}






