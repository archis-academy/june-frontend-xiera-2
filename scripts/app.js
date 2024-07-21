const jobData = [
    {
        company: "Gucci",
        logo: "../images/gucci-logo.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Adidas",
        logo: "../images/adidas.png",
        time: "5 days ago",
        title: "Junior analytic person with social skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Ford",
        logo: "../images/ford.png",
        time: "5 days ago",
        title: "Graphic designer with wordpress experience",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Microsoft",
        logo: "../images/microsoft.png",
        time: "5 days ago",
        title: "Frontend developer for growing marketplace",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Nike",
        logo: "../images/nike.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Gucci",
        logo: "../images/gucci-logo.png",
        time: "5 days ago",
        title: "Frontend developer for gucci pro",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Gucci",
        logo: "../images/gucci-logo.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },

    {
        company: "Gucci",
        logo: "../images/gucci-logo.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Adidas",
        logo: "../images/adidas.png",
        time: "5 days ago",
        title: "Junior analytic person with social skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Microsoft",
        logo: "../images/microsoft.png",
        time: "5 days ago",
        title: "Frontend developer for growing marketplace",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
    {
        company: "Ford",
        logo: "../images/ford.png",
        time: "5 days ago",
        title: "Graphic designer with wordpress experience",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },


    {
        company: "Nike",
        logo: "../images/nike.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationVector: "../images/Vector.png"
    },
];

function createJobCard(job) {
    return `
        <div class="job-card">
            <div class="job-card-header">
                <img src="${job.logo}" alt="${job.company}">
                <div>
                    <h3>${job.company}</h3>
                    <p class="date">${job.time}</p>
                </div>
            </div>
            <h4>${job.title}</h4>
            <div class="location-type">
                <p class="location">
                    <img src="${job.locationVector}" alt="location icon">
                    ${job.location}
                </p>
                <p class="type">${job.type}</p>
            </div>
        </div>
    `;
}

function renderJobCards(jobData, startIndex = 0) {
    const jobCardsContainer = document.getElementById('job-cards');
    jobCardsContainer.innerHTML = '';
    for (let i = startIndex; i < startIndex + 6 && i < jobData.length; i++) {
        jobCardsContainer.innerHTML += createJobCard(jobData[i]);
    }
}

let currentIndex = 0;

document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex + 6 < jobData.length) {
        currentIndex += 6;
        renderJobCards(jobData, currentIndex);
        updateButtons();
    }
});

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentIndex - 6 >= 0) {
        currentIndex -= 6;
        renderJobCards(jobData, currentIndex);
        updateButtons();
    }
});

function updateButtons() {
    document.getElementById('prev-button').disabled = currentIndex === 0;
    document.getElementById('next-button').disabled = currentIndex + 6 >= jobData.length;
}

renderJobCards(jobData);
updateButtons();
