let nameHTML = document.getElementById("name-list")
let addBtn = document.getElementById("add-btn")
let clearBtn = document.getElementById("clear-btn")

// var data = JSON.parse("{{data|escapejs}}");

var list = [ 
    'Panuvit Chantara',
    'Michale Mueller',
    'Sricharan Yedu Thirnathi',
    'Sai Preetham Kamishetty'
]

const updateCountDom = () => {
    nameHTML.innerHTML = list
}


addBtn.addEventListener("click", () => {
    updateCountDom();
})

clearBtn.addEventListener("click", () => {
    nameHTML.innerHTML = "-"
})