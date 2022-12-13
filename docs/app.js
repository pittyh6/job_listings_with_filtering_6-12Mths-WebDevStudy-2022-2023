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

//--
logoEl.attr("src", data[2].logo)
//--
companyNameEl.text(data[2].company)
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
positionEl.text(data[2].position)
//--
jobPostedEl.text(data[2].postedAt)
jobType.text(data[2].contract)
jobLocation.text(data[2].location)
//--
roleEl.text(data[2].role)
levelEl.text(data[2].level)
//-- 
let textAddLang = [] // languages
for (let i = 0; i < data[2].languages.length; i++) {
    textAddLang.push(data[2].languages[i])
    let newDiv = document.createElement('div');
    newDiv.classList.add('bg-tag')
    newDiv.classList.add('languages')
    tagsRoleEl.append(newDiv)
    let getNewDiv = $(".languages:last");
    getNewDiv.text(textAddLang[i])
}
//--
let textAddTools = []
for(let i = 0; i < data[2].tools.length; i++){
    textAddTools.push(data[2].tools[i])
    let newDiv = document.createElement('div')
    newDiv.classList.add('bg-tag')
    newDiv.classList.add('tools')
    tagsRoleEl.append(newDiv)
    let getNewDiv = $('.tools:last')
    getNewDiv.text(textAddTools[i])
}



