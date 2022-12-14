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

// function runSystem() {
//     addInfos()
//     verifyNewAndFeture()
//     addLanguages()
//     addTools()
// }



let dataFromJson = []
let getNewCard = ''
for (let i = 0; i < data.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('card-job')
    bodyContainerCardJobs.append(newDiv)
    getNewCard = $('.card-job:last')
    getNewCard.append(addLogo(i))
    getNewCard.append(addDescJob(i))
}


function addLogo(x) {
    let newDivLogo = document.createElement('div')
    newDivLogo.classList.add('logo')
    let newImgLogo = document.createElement('img')
    newImgLogo.classList.add('logo-img')
    getNewCard.append(newDivLogo)
    newDivLogo.append(newImgLogo)
    let newL = $('.logo-img:last')
    newL.attr("src", data[x].logo)
}
function addDescJob(x) {
    let newDescJob = document.createElement('div')
    newDescJob.classList.add('description-job')
    getNewCard.append(newDescJob)
    let newFeature = document.createElement('div')
    newFeature.classList.add('company-feature')
    newDescJob.append(newFeature)
    
    
    let newH = document.createElement('h1')
    newH.classList.add("company-name")
    let newSpanFirst = document.createElement('span')
    newSpanFirst.classList.add("company-tag-new")
    let newSpanSecond = document.createElement('span')
    newSpanSecond.classList.add("company-tag-featured")
    newFeature.append(newH)
    newFeature.append(newSpanFirst)
    newFeature.append(newSpanSecond)
    let newH1el = $('.company-name:last') //company name
    newH1el.text(data[x].company)
    let newSpanNew = $('.company-tag-new:last')
    let newSpanFeature = $('.company-tag-featured:last')
    if (data[x].new !== true) { // add elements new and featured  ---
        newSpanNew.hide()
    } else {
        newSpanNew.text('NEW')
        newSpanNew.show()
    }
    if (data[x].featured !== true) {
        newSpanFeature.hide()
    } else {
        newSpanFeature.text('FEATURED')
        newSpanFeature.show()
    } // ------
}

function addJobTitle() { }
function addJobInfos() { }

function addInfos(x) {
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

function verifyNewAndFeture(x) {
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