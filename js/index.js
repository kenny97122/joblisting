const jobContainer = document.getElementById('jobs-container')

const jobOffers = [
    {
        id: 1,
        companyName: 'Photosnap',
        companyLogo: 'images/photosnap.svg',
        new: true,
        featured: true,
        jobTitle: 'Senior Frontend Developer',
        forTime: 'Full time',
        location: 'USA only',
        tags: ['frontend', 'senior', 'html', 'css', 'javacript'],
        date: '1d ago'
    },
    {
        id: 2,
        companyName: 'Manage',
        companyLogo: 'images/manage.svg',
        new: true,
        featured: true,
        jobTitle: 'Fullstack Developer',
        forTime: ' Part Time',
        location: 'Remote',
        tags: ['midweight', 'fullstack', 'python', 'react', 'javascript'],
        date: '1d ago'
    },
    {
        id: 3,
        companyName: 'Account',
        companyLogo: 'images/account.svg',
        new: true,
        featured: false,
        jobTitle: 'Junior Frontend Developer',
        forTime: ' Part Time',
        location: 'USA only',
        tags: ['frontend', 'junior', 'sass', 'react', 'javascript'],
        date: '2d ago'
    },
    {
        id: 4,
        companyName: 'MyHome',
        companyLogo: 'images/myhome.svg',
        new: false,
        featured: false,
        jobTitle: 'Junior Frontend Developer',
        forTime: ' Contract',
        location: 'USA only',
        tags: ['junior', 'frontend', 'css', 'javascript'],
        date: ' 5d ago'
    }
    ,
    {
        id: 5,
        companyName: 'Loop Studios',
        companyLogo: 'images/loop-studios.svg',
        new: false,
        featured: false,
        jobTitle: 'Software Engineer',
        forTime: ' Full Time',
        location: 'Worldwide',
        tags: ['frontend', 'midweight', 'sass', 'ruby', 'javascript'],
        date: ' 1w ago'
    }
    ,
    {
        id: 6,
        companyName: 'FaceIt',
        companyLogo: 'images/faceit.svg',
        new: false,
        featured: false,
        jobTitle: ' Junior Backend Developer',
        forTime: ' Part Time',
        location: 'UK only',
        tags: ['junior', 'backend', 'ruby', 'ror'],
        date: ' 2w ago'
    }
    ,
    {
        id: 7,
        companyName: 'Shortly',
        companyLogo: 'images/shortly.svg',
        new: false,
        featured: false,
        jobTitle: 'Junior Developer',
        forTime: '  Full Time',
        location: 'Worldwide',
        tags: ['frontend', 'junior', 'sass', 'html', 'javascript'],
        date: '  2w ago'
    },
    {
        id: 8,
        companyName: 'Insure',
        companyLogo: 'images/insure.svg',
        new: false,
        featured: false,
        jobTitle: 'Junior Frontend Developer',
        forTime: '  Full Time',
        location: ' USA only',
        tags: ['frontend', 'junior', 'sass', 'vue', 'javascript'],
        date: '2w ago'
    },
    {
        id: 9,
        companyName: ' Eyecam Co.',
        companyLogo: 'images/eyecam-co.svg',
        new: false,
        featured: false,
        jobTitle: ' Full Stack Engineer',
        forTime: '  Full Time',
        location: 'Worldwide',
        tags: ['frontend', 'midweight', 'python', 'django', 'javascript'],
        date: '3w ago'
    },
    {
        id: 10,
        companyName: '  The Air Filter Company',
        companyLogo: 'images/the-air-filter-company.svg',
        new: false,
        featured: false,
        jobTitle: ' Front-end Dev',
        forTime: 'Part Time',
        location: 'Worldwide',
        tags: ['backend', 'midweight', 'react', 'sass', 'javascript'],
        date: '1mo ago'
    }
]

let filter = []
renderJobs(filterJob(filter, jobOffers), filter)