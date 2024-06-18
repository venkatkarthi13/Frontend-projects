
// let myleads = `["www.google.com"]`
//     myleads=JSON.parse(myleads)
//     myleads.push("www.Yahoo.com")
//     console.log(myleads);

//     myleads=JSON.stringify(myleads)
//     console.log(myleads);
//     console.log(typeof myleads);

let myleads=[]
const inputEl = document.getElementById("input-el")
const input = document.getElementById("input-btn")
const savetab=document.getElementById("saveTab")
const dltBtn=document.getElementById("delete-btn")
const unorder = document.getElementById("ulEl")

// Load leads from local storage
let leadsfromstorage=JSON.parse(localStorage.getItem("myleads"))
if(leadsfromstorage){
    myleads=leadsfromstorage
    render(myleads)
}

// Save current tab URL
savetab.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true},function (tabs){
        myleads.push((tabs[0].url))
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    }) 
})

// Render list items
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
      listItems+=`<li><a class='list' target='_blank' href=${leads[i]}> ${leads[i]} </a></li>`
        // console.log(listItems);
        //Another method
        //  let li=document.createElement("li")
        //  li.textContent=myleads[i]
        //  unorder.append(li)
    }
    unorder.innerHTML = listItems
}

// Clear all leads
let dtn=""
dltBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    render(myleads)
    console.log("doubleclicked");
})

// Add lead from input
input.addEventListener("click", function () {
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)

    // console.log(localStorage.getItem("myleads"));
})

