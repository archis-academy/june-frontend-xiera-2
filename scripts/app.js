const jobData = [
    {
        company: "Gucci",
        logo: "../images/gucci-logo.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationImg: "../images/Vector.png"
    },
    {
        company: "Adidas",
        logo: "../images/adidas.png",
        time: "5 days ago",
        title: "Junior analytic person with social skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationImg: "../images/Vector.png"
    },
    {
        company: "Ford",
        logo: "../images/ford.png",
        time: "5 days ago",
        title: "Graphic designer with wordpress experience",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationImg: "../images/Vector.png"
    },
    {
        company: "Microsoft",
        logo: "../images/microsoft.png",
        time: "5 days ago",
        title: "Frontend developer for growing marketplace",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationImg: "../images/Vector.png"
    },
    {
        company: "Nike",
        logo: "../images/nike.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationImg: "../images/Vector.png"
    },
    {
        company: "Gucci",
        logo: "../images/gucci-logo.png",
        time: "5 days ago",
        title: "Frontend developer for gucci pro",
        location: "Oslo, Norway",
        type: "Part-Time",
        locationImg: "../images/Vector.png"
    }
];

function createJobCards(jobData, containerId) {
    const jobCardsContainer = document.getElementById(containerId);

    jobData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
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
            <img src="${job.locationImg}" alt="location icon">
                ${job.location}
            </p>
            <p class="type">${job.type}</p>
            </div>
        `;

        jobCardsContainer.appendChild(jobCard);
    });
}

createJobCards(jobData, 'job-cards');
