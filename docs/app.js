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
if(data[3].languages.length == 1){
    languageEl.text(data[3].languages)
}else{
    for(let i = 0; i < data[3].languages.length; i++){
        console.log("entrou")
        let newDiv = document.createElement('div');
        newDiv.classList.add('languages')
        console.log(newDiv)
        let getNewDiv = $(".languages")
        //const newContent = languageEl.text(data[3].languages[i])
        getNewDiv.text(data[3].languages[i])
        console.log(getNewDiv)
        document.body.insertBefore(newDiv, document.body.firstChild)
    }
}


console.log(data[3].languages.length)


