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
const bodyContainerCardJobs = $(".cards-jobs .body-container") //inside cards-jobs
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
    let newDiv = document.createElement('div')
    newDiv.classList.add('card-job')
    bodyContainerCardJobs.append(newDiv)
    bodyContainerCardJobs[i].append(addInfos(i))
    bodyContainerCardJobs[i].append(addLanguages(i))
    bodyContainerCardJobs[i].append(addTools(i))
    console.log(newDiv[i])
    console.log(bodyContainerCardJobs[i])
    //addInfos(i)
}

function addInfos(x) {
    //--
    logoEl.attr("src", data[x].logo)
    //--
    companyNameEl.text(data[x].company)
    positionEl.text(data[x].position)
    //--
    jobPostedEl.text(data[x].postedAt)
    jobType.text(data[x].contract)
    jobLocation.text(data[x].location)
    //--
    roleEl.text(data[x].role)
    levelEl.text(data[x].level)
    //-- 
}

function verifyNewAndFeture(){
    if (data[i].new !== true) { // add elements new and featured  ---
        newEl.hide()
    } else {
        newEl.show()
    }
    if (data[i].featured !== true) {
        featuredEl.hide()
    } else {
        featuredEl.show()
    } // ------
}

function addLanguages(x) {
    for (let i = 0; i < data[x].languages.length; i++) {
        textAddLang.push(data[x].languages[i])
        let newDiv = document.createElement('div');
        newDiv.classList.add('bg-tag')
        newDiv.classList.add('languages')
        tagsRoleEl.append(newDiv)
        let getNewDiv = $(".languages:last");
        return getNewDiv.text(textAddLang[i])
    }
}
//--
function addTools(x) {
    for (let i = 0; i < data[x].tools.length; i++) {
        textAddTools.push(data[x].tools[i])
        let newDiv = document.createElement('div')
        newDiv.classList.add('bg-tag')
        newDiv.classList.add('tools')
        tagsRoleEl.append(newDiv)
        let getNewDiv = $('.tools:last')
        getNewDiv.text(textAddTools[i])
    }
}


runSystem()