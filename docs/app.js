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



logoEl.attr("src", data[1].logo)
companyNameEl.text(data[1].company)
if (data[1].new !== true) { // add elements new and featured  ---
    newEl.hide()
} else {
    newEl.show()
}
if (data[1].featured !== true) {
    featuredEl.hide()
} else {
    featuredEl.show()
} // ------
positionEl.text(data[1].position)



