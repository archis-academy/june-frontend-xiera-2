const jobData = [
    {
        company: "Gucci",
        logo: "gucci-logo.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time"
    },
    {
        company: "Adidas",
        logo: "adidas.png",
        time: "5 days ago",
        title: "Junior analytic person with social skills",
        location: "Oslo, Norway",
        type: "Part-Time"
    },
    {
        company: "Ford",
        logo: "ford-logo.png",
        time: "5 days ago",
        title: "Graphic designer with wordpress experience",
        location: "Oslo, Norway",
        type: "Part-Time"
    },
    {
        company: "Microsoft",
        logo: "microsoft-logo.png",
        time: "5 days ago",
        title: "Frontend developer for growing marketplace",
        location: "Oslo, Norway",
        type: "Part-Time"
    },
    {
        company: "Nike",
        logo: "nike-logo.png",
        time: "5 days ago",
        title: "Senior UX/UI Developer with strong Designer skills",
        location: "Oslo, Norway",
        type: "Part-Time"
    },
    {
        company: "Gucci",
        logo: "gucci-logo.png",
        time: "5 days ago",
        title: "Frontend developer for gucci pro",
        location: "Oslo, Norway",
        type: "Part-Time"
    }
];

const jobCardsContainer = document.getElementById('job-cards');

jobData.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');

    jobCard.innerHTML = `
        <img src="${job.logo}" alt="${job.company}">

        <h3>${job.company}</h3>
        <p>${job.time}</p>
        <h4>${job.title}</h4>
        <p class="location">${job.location}</p>
        <p class="type">${job.type}</p>
    `;

    jobCardsContainer.appendChild(jobCard);
});
