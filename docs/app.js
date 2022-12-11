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


logoEl.attr("src", data[3].logo)
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
jobPostedEl.text(data[3].postedAt)
jobType.text(data[3].contract)
jobLocation.text(data[3].location)

console.log(data[3].languages)


