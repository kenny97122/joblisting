// filter job if in the filter array
const filterJob = (filter, arrJob) => {
    const filteredJob = arrJob.filter(job => {
        const isInfilter = filter.every(filterTag => job.tags.includes(filterTag))
        if (isInfilter) {
            return job
        }
    })
    return Array.from(new Set(filteredJob))
}


// Check if the filter is empty or not and add class active to the filter element
const checkFilter = (filter, filterElement) => {
    if (filter[0] === undefined) {
        filterElement.classList.remove('active')
    } else {
        filterElement.classList.add('active')
    }
}


// Render filter box on the top of the pag
const renderFilter = (tool, filter) => {
    const filterList = document.getElementById('filter')
    const clearBtn = document.getElementById('clear-btn')
    // Create filter box
    const filterBox = document.createElement('div')
    filterBox.className = 'filter__box'
    const filterTag = document.createElement('span')
    filterTag.className = 'tag tag--filter'
    filterTag.innerHTML = tool
    const filterBtn = document.createElement('button')
    filterBtn.className = 'btn btn-filter'
    filterBtn.innerHTML = '<i class="fas fa-times"></i>'
    filterBtn.addEventListener('click', (e) => {

        const index = filter.indexOf(tool)
        filter.splice(index, 1)
        checkFilter(filter, filterList)
        renderJobs(filterJob(filter, jobOffers), filter)
        filterList.removeChild(filterBox)
    })

    filterBox.appendChild(filterTag)
    filterBox.appendChild(filterBtn)
    filterList.appendChild(filterBox)

    console.log(filter);

    // Clear the filter

    clearBtn.addEventListener('click', (e) => {
        filter = []
        checkFilter(filter, filterList)
        renderJobs(filterJob(filter, jobOffers), filter)
        filterList.innerHTML = ''
        filterList.appendChild(clearBtn)
    })
}



// Render the job offers to the screen
const renderJobs = (arrJobs, filter) => {


    const filterList = document.getElementById('filter')

    jobContainer.innerHTML = ''
    arrJobs.forEach(job => {

        const parentDiv = document.createElement('div')
        parentDiv.className = 'job'
        const jobInfo = document.createElement('div')
        jobInfo.className = 'job-info'

        // Create the img container with the logo inside
        const jobImgContainer = document.createElement('div')
        jobImgContainer.className = 'job-info__img-container'
        const img = document.createElement('img')
        img.src = job.companyLogo

        jobImgContainer.appendChild(img)
        jobInfo.appendChild(jobImgContainer)


        // // Create the job info box and put elements inside
        const jobInfoBox = document.createElement('div')
        jobInfoBox.className = 'job-info__box'
        const jobInfoBoxTop = document.createElement('div')
        jobInfoBoxTop.className = 'job-info__box__top'
        const companyName = document.createElement('span')
        companyName.className = 'job-info__box__top__company-name'
        companyName.innerText = job.companyName

        jobInfoBoxTop.appendChild(companyName)

        if (job.new) {
            const newTag = document.createElement('span')
            newTag.className = 'job-info__box__top__new tag-round tag-round-new'
            newTag.innerText = 'NEW!'

            jobInfoBoxTop.appendChild(newTag)
        }
        if (job.featured) {
            const featuredTag = document.createElement('span')
            featuredTag.className = 'job-info__box__top__featured tag-round tag-round-featured'
            featuredTag.innerText = 'Featured'

            jobInfoBoxTop.appendChild(featuredTag)
        }

        jobInfoBox.appendChild(jobInfoBoxTop)
        jobInfo.appendChild(jobInfoBox)

        // // Create link for job title
        const jobTitle = document.createElement('a')
        jobTitle.href = '#'
        jobTitle.className = 'job-info__box__job-title'
        jobTitle.innerText = job.jobTitle

        jobInfoBox.appendChild(jobTitle)

        // // Create The job info box bottom and put elements inside
        const jobInfoBoxBottom = document.createElement('div')
        jobInfoBoxBottom.className = 'job-info__box__bottom'
        const date = document.createElement('span')
        date.className = 'job-info__box__bottom__date'
        const time = document.createElement('span')
        time.className = 'job-info__box__bottom__time'
        const location = document.createElement('span')
        location.className = 'job-info__box__bottom__location'
        date.innerText = job.date
        time.innerText = job.forTime
        location.innerText = job.location

        jobInfoBoxBottom.appendChild(date)
        jobInfoBoxBottom.appendChild(time)
        jobInfoBoxBottom.appendChild(location)
        jobInfoBox.appendChild(jobInfoBoxBottom)

        // Create tags
        const tagsDiv = document.createElement('div')
        tagsDiv.className = 'tags'
        job.tags.forEach(tool => {
            const toolElement = document.createElement('span')
            toolElement.className = 'tag tag-primary'
            toolElement.innerText = tool

            // Create filters
            toolElement.addEventListener('click', (e) => {
                if (!filter.includes(tool)) {
                    filter.push(tool.toLowerCase())
                    renderFilter(tool, filter)
                    checkFilter(filter, filterList)
                    renderJobs(filterJob(filter, jobOffers), filter)
                }

            })
            tagsDiv.appendChild(toolElement)
        })

        parentDiv.appendChild(jobInfo)
        parentDiv.appendChild(tagsDiv)
        jobContainer.appendChild(parentDiv)
    })
}

