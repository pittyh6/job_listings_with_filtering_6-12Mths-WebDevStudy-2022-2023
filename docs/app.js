import data from './data.json' assert {type: 'json'};

// Elements Document
const logoEl = $(".logo-img")
const companyNameEl = $(".company-name")

logoEl.attr("src", data[1].logo)
companyNameEl.text(data[1].company)

console.log(companyNameEl)

console.log(data[1].company)


