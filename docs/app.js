import data from './data.json' assert {type: 'json'};

// Elements Document
const logoEl = $(".logo-img")
const companyNameEl = $(".company-name")
const newEl = $(".company-tag-new")
const featuredEl = $(".company-tag-featured")
const positionEl = $(".job-title")
const jobPostedEl = $(".job-day-posted")
const jobType = $(".job-type")
const jobLocation = $(".job-location")
const roleEl = $(".role")
const levelEl = $(".level")
const languageEl = $(".languages")
const toolEl = $(".tools")
const tagsRoleEl = $(".tags-role")
const cardsJobs = $('.cards-jobs') //parent 1l
const bodyContainer = $(".body-container") //inside cards-jobs
const cardJob = $('.card-job')//child that all elements are inside
let textAddLang = [] // languages
let textAddTools = [] // tools

function runSystem(){
    addInfos()
    verifyNewAndFeture()
    addLanguages()
    addTools()
}

console.log(data[9])
console.log(data.length)
for(let i = 0; i < data.length; i++){
    console.log("i ", i , ": ", data[i].logo)
    let newDiv = document.createElement('div')
    newDiv.classList.add('card-job')
    bodyContainer.append(newDiv)
    addInfos(i)
}

function addInfos() {
    //--
    logoEl.attr("src", data[2].logo)
    //--
    companyNameEl.text(data[2].company)
    positionEl.text(data[2].position)
    //--
    jobPostedEl.text(data[2].postedAt)
    jobType.text(data[2].contract)
    jobLocation.text(data[2].location)
    //--
    roleEl.text(data[2].role)
    levelEl.text(data[2].level)
    //-- 
}

function verifyNewAndFeture(){
    if (data[2].new !== true) { // add elements new and featured  ---
        newEl.hide()
    } else {
        newEl.show()
    }
    if (data[2].featured !== true) {
        featuredEl.hide()
    } else {
        featuredEl.show()
    } // ------
}

function addLanguages() {
    for (let i = 0; i < data[2].languages.length; i++) {
        textAddLang.push(data[2].languages[i])
        let newDiv = document.createElement('div');
        newDiv.classList.add('bg-tag')
        newDiv.classList.add('languages')
        tagsRoleEl.append(newDiv)
        let getNewDiv = $(".languages:last");
        return getNewDiv.text(textAddLang[i])
    }
}
//--
function addTools() {
    for (let i = 0; i < data[2].tools.length; i++) {
        textAddTools.push(data[2].tools[i])
        let newDiv = document.createElement('div')
        newDiv.classList.add('bg-tag')
        newDiv.classList.add('tools')
        tagsRoleEl.append(newDiv)
        let getNewDiv = $('.tools:last')
        getNewDiv.text(textAddTools[i])
    }
}


runSystem()