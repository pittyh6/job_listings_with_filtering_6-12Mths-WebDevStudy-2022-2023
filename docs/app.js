import data from './data.json' assert {type: 'json'};

// Elements Document
const bodyContainerCardJobs = $(".cards-jobs .body-container") //inside cards-jobs
const searchTextBar = $('.search')
const searchJob = $('.search-jobs')
const searchJobJobs = $('.jobs')


let getNewCard = ''
for (let i = 0; i < data.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('card-job')
    bodyContainerCardJobs.append(newDiv)
    getNewCard = $('.card-job:last')
    getNewCard.append(addLogo(i))
    getNewCard.append(addDescJob(i))
    let newHr = document.createElement('hr')
    getNewCard.append(newHr)
    getNewCard.append(addInfos(i))
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

    let newDivJob = document.createElement('div')
    newDivJob.classList.add('job')
    let newH2 = document.createElement('h2')
    newH2.classList.add('job-title')
    newDescJob.append(newDivJob)
    newDivJob.append(newH2)
    let newH2Text = $('.job-title:last')
    newH2Text.text(data[x].position)
    // ------

    let newDivInfoJob = document.createElement('div')
    newDivInfoJob.classList.add('infos-job')
    let newPDayJobPosted = document.createElement('p')
    newPDayJobPosted.classList.add('job-day-posted')
    let newSpanCircle = document.createElement('span')
    newSpanCircle.classList.add('circle')
    let newPJobType = document.createElement('p')
    newPJobType.classList.add('job-type')
    let newPJobLocation = document.createElement('p')
    newPJobLocation.classList.add('job-location')
    newDescJob.append(newDivInfoJob)
    newDivInfoJob.append(newPDayJobPosted) //post at
    let newPostAtText = $('.job-day-posted:last')
    newPostAtText.text(data[x].postedAt)
    newDivInfoJob.append(newSpanCircle) // circle dot btwn texts
    let newSpanCircleText = $('.circle')
    newSpanCircleText.text('.')
    newDivInfoJob.append(newPJobType)//type job
    let newJobTypeText = $('.job-type:last')
    newJobTypeText.text(data[x].contract)
    let newSpanCircle2 = document.createElement('span') //circle
    newSpanCircle2.classList.add('circle')
    newDivInfoJob.append(newSpanCircle2) // circle dot btwn texts
    let newSpanCircleText2 = $('.circle')
    newSpanCircleText2.text('.')
    newDivInfoJob.append(newPJobLocation)
    let newPJobLocationText = $('.job-location:last')
    newPJobLocationText.text(data[x].location)
}


function addInfos(x) {
    let newDivTagsRole = document.createElement('div')
    newDivTagsRole.classList.add('tags-role')
    getNewCard.append(newDivTagsRole)

    let newDivRole = document.createElement('div') //role
    newDivRole.classList.add('bg-tag')
    newDivRole.classList.add('role')
    let newDivLevel = document.createElement('div')//level
    newDivLevel.classList.add('bg-tag')
    newDivLevel.classList.add('level')
    newDivTagsRole.append(newDivRole)
    newDivTagsRole.append(newDivLevel)
    let getNewRole = $('.role:last')
    getNewRole.text(data[x].role)
    let getNewLevel = $('.level:last')
    getNewLevel.text(data[x].level)

    
    let textAddLang = [] //languages
    for (let i = 0; i < data[x].languages.length; i++) {
        textAddLang.push(data[x].languages[i])
        let newDivLanguages = document.createElement('div');
        newDivLanguages.classList.add('bg-tag')
        newDivLanguages.classList.add('languages')
        newDivTagsRole.append(newDivLanguages)
        let getNewDivLanguages = $(".languages:last");
        getNewDivLanguages.text(textAddLang[i])
    }

    let textAddTools = [] // tools
    for (let i = 0; i < data[x].tools.length; i++) {
        textAddTools.push(data[x].tools[i])
        let newDivTools = document.createElement('div')
        newDivTools.classList.add('bg-tag')
        newDivTools.classList.add('tools')
        newDivTagsRole.append(newDivTools)
        let getNewDivTools = $('.tools:last')
        getNewDivTools.text(textAddTools[i])
    }

}


// Add roles
addEventListener('click',function addJobsSearch(event){
    if(event.target.className.includes('bg-tag') && !event.target.className.includes('remove')){
        let newOne = $('.bg-tag:last').css("padding", "0 15px")
        newOne.text(event.target.innerHTML).css("align-items", "center")
        searchJobJobs.append(newOne)
        newOne.addClass('remove')
        showSelectedJobs(event.target)
    }
})

// click icon x close
addEventListener('click',function removeJobsSearch(event){
    if(event.target.className.includes('remove')){
        event.target.remove()
    }
})

// clear the search jobs list
addEventListener('click', function clearSearch(event){
    if(event.target.className.includes('btn')){
        let clearEl = $('.jobs .bg-tag')
        clearEl.remove()
    }
})


function showSelectedJobs(jobSelected){
    if(searchJobJobs.children.length>0){
        console.log('searchJobJobs', searchJobJobs)
        console.log('element clicked', jobSelected)
        console.log('element innerHtml', jobSelected.innerHTML)
        console.log('all data', data)
    }else{
        console.log('no child')
    }
        
    
    
}