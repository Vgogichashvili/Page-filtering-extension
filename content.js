const table = document.querySelector("#table-Body");
const input = document.querySelector("#searchBar");



chrome.runtime.onMessage.addListener((request) => {
    if(request.command == "start"){
         localStorage.setItem("popupInpValue",request.value)
         location.reload(); 
         
    }
    else if(request = "stop"){
        location.reload(); 

        
}})

function onLoad() {
    const interval = setInterval(() => {
        let lastRow = table.rows[table.rows.length - 1];
        if (lastRow) {
            if (localStorage.getItem("popupInpValue") || localStorage.getItem("popupInpValue") === "") {
                input.value = localStorage.getItem("popupInpValue");
                input.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'a' }));
                localStorage.removeItem("popupInpValue");
               lastRow = table.rows[table.rows.length - 1];
                lastRow.style.backgroundColor = 'red';
}
            clearInterval(interval);
}
    }, 500);
}

onLoad();




