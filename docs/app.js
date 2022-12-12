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

//--
logoEl.attr("src", data[3].logo)
//--
companyNameEl.text(data[3].company)
if (data[3].new !== true) { // add elements new and featured  ---
    newEl.hide()
} else {
    newEl.show()
}
if (data[3].featured !== true) {
    featuredEl.hide()
} else {
    featuredEl.show()
} // ------
positionEl.text(data[3].position)
//--
jobPostedEl.text(data[3].postedAt)
jobType.text(data[3].contract)
jobLocation.text(data[3].location)
//--
roleEl.text(data[3].role)
levelEl.text(data[3].level)

let textadd = []
for (let i = 0; i < data[2].languages.length; i++) {
    console.log("entrou")
    let tagsRoleEl = $(".tags-role")
    textadd.push(data[2].languages[i])
    console.log(textadd)
    let newDiv = document.createElement('div');
    newDiv.classList.add('bg-tag')
    newDiv.classList.add('languages')
    tagsRoleEl.append(newDiv)
    let getNewDiv = $(".languages:last");
    getNewDiv.text(textadd[i])
}





