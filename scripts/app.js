/* Featured Jobs Section */
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
/* Featured Jobs Section */


/* Jobs Section */
const jobs = [
    {
        background: "images/designBg.png",
        symbol: "images/designImg.png",
        jobsName: "Design",
        description: "310 Vacancy"
    },
    {
        background: "images/businessBg.png",
        symbol: "images/businessImg.png",
        jobsName: "Business",
        description: "310 Vacancy"
    },
    {
        background: "images/developmentBg.png",
        symbol: "images/developmentImg.png",
        jobsName: "Development",
        description: "310 Vacancy"
    },
    {
        background: "images/communicationBg.png",
        symbol: "images/communicationImg.png",
        jobsName: "Communication",
        description: "310 Vacancy"
    }
]

const jobsContainer = document.getElementById("jobs-categories");

jobsContainer.innerHTML = jobs.map(item => {
    return `
    <div class="jobs-item">
      <div class="jobs-image-div">
        <img class="jobs-background" src="${item.background}" alt="background">
        <div class="jobs-symbol-div">
           <img class="jobs-symbol" src="${item.symbol}" alt="symbol">
        </div>
      </div>  
      <h1 class="jobs-name">${item.jobsName}</h1>
      <p class="jobs-description">${item.description}</p>
    </div>
    `   ;
}).join('');
/* Jobs Section */


/* Testimonial Section */
document.getElementById("testimonials-header").innerHTML = `TESTIMONIALS`
document.getElementById("testimonial-subtitle").innerHTML = `What our customer say`


const testimonialsEvaluation = [
    {
        testimonialsUserProfile: "image/justinAlins.png",
        testimonialsName: "Justin Alins",
        testimonialsSubtitle: "Product Designer",
        testimonialsDescription: " “Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.” ",
        testimonialsStar: "image/stars.png",
        testimonialsDesigner: "image/designer.png"
    },
    {
        testimonialsUserProfile: "image/emilyCarter.png",
        testimonialsName: "Emily Carter",
        testimonialsSubtitle: "UX/UI Designer",
        testimonialsDescription: "“Jobfind made my job search incredibly easy. The platform is user-friendly and their support team is always there to help.”",
        testimonialsStar: "image/stars.png",
        testimonialsDesigner: "image/designer.png"
    },
    {
        testimonialsUserProfile: "image/michaelBrown.png",
        testimonialsName: "Michael Brown",
        testimonialsSubtitle: "Front-end Developer",
        testimonialsDescription: "“I found my dream job thanks to Jobfind. Their vast network of employers and their professional support team are top-notch.”",
        testimonialsStar: "image/stars.png",
        testimonialsDesigner: "image/designer.png"
    },
    {
        testimonialsUserProfile: "image/sophieTurner.png",
        testimonialsName: "Sophie Turner",
        testimonialsSubtitle: "Graphic Designer",
        testimonialsDescription: "“Jobfind is a game changer. The platform is intuitive, and the support I received was exceptional. Highly recommended!”",
        testimonialsStar: "image/stars.png",
        testimonialsDesigner: "image/designer.png"
    },
    {
        testimonialsUserProfile: "image/davidSmith.png",
        testimonialsName: "David Smith",
        testimonialsSubtitle: "Web Developer",
        testimonialsDescription: "“I had a fantastic experience with Jobfind. Their team was incredibly helpful and guided me through every step of the job search process.”",
        testimonialsStar: "image/stars.png",
        testimonialsDesigner: "image/designer.png"
    }
]

const testimonialsEvaluationContainer = document.getElementById('testimonials-evaluations-container');

testimonialsEvaluationContainer.innerHTML = testimonialsEvaluation.map(item => {
    return `
      <div class="swiper-slide">
        <div class="testimonials-evaluation">
          <div class="testimonials-image-div">
            <img class="testimonials-users-image" src="${item.testimonialsUserProfile}" alt="users">
          </div>
          <div class="testimonials-user-description">
            <h1 class="testimonials-userName">${item.testimonialsName}</h1>
            <h3 class="testimonials-department">${item.testimonialsSubtitle}</h3>
            <p class="testimonials-text">${item.testimonialsDescription}</p>
            <div class="testimonials-signature">
              <div class="testimonials-evaluation-stars">
                <img src="${item.testimonialsStar}" alt="stars" class="signature-img">
              </div>
              <div class="testimonials-evaluation-designer">
                <img src="${item.testimonialsDesigner}" alt="designer" class="signature-img">
              </div> 
            </div>         
          </div>
        </div>
      </div>
    `;
}).join('');


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/* Testimonial Section */

/*Hero Section*/
document.getElementById('searchButton').addEventListener('click', function () {
    const jobTitle = document.getElementById('jobTitle').value;
    const location = document.getElementById('location').value;
    const jobType = document.getElementById('jobType').value;

    const jobs = [
        { title: 'Software Engineer', location: 'New York', type: 'remotely' },
        { title: 'UI/UX Designer', location: 'San Francisco', type: 'remotely' },
        { title: 'Product Manager', location: 'Denver', type: 'remotely' },
        { title: 'Product Manager', location: 'Clevland', type: 'remotely' },
        { title: 'Product Manager', location: 'Ohio', type: 'hybrid' },
        { title: 'Marketing Manager', location: 'Los Angeles', type: 'remotely' },
        { title: 'Project Manager', location: 'Chicago', type: 'onsite' },
        { title: 'Project Manager', location: 'Denver', type: 'onsite' },
        { title: 'Project Manager', location: 'Seattle', type: 'remotely' },
        { title: 'Marketing Manager', location: 'Los Angeles', type: 'remotely' },
        { title: 'Backend Developer', location: 'Chicago', type: 'onsite' },
        { title: 'DevOps Engineer', location: 'Austin', type: 'hybrid' },
        { title: 'Backend Developer', location: 'Chicago', type: 'remotely' },
        { title: 'Accountant', location: 'New York', type: 'hybrid' },
        { title: 'Project Manager', location: 'Dallas', type: 'hybrid' },
        { title: 'UI/UX Designer', location: 'San Francisco', type: 'onsite' },
        { title: 'Accountant', location: 'Clevland', type: 'hybrid' },
        { title: 'DevOps Engineer', location: 'Austin', type: 'remotely' },
        { title: 'Accountant', location: 'Boston', type: 'onsite' },
        { title: 'Backend Developer', location: 'Boston', type: 'hybrid' },
        { title: 'Project Manager', location: 'Austin', type: 'remotely' },
        { title: 'Accountant', location: 'Boston', type: 'hybrid' },
        { title: 'Product Manager', location: 'New York', type: 'remotely' },
        { title: 'DevOps Engineer', location: 'Denver', type: 'remotely' }
    ];

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.type === jobType
    );

    const modal = document.getElementById("myModal");
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Populate results
    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.innerHTML = `<strong>Title:</strong> ${job.title} <br> <strong>Location:</strong> ${job.location} <br> <strong>Type:</strong> ${job.type}`;
            jobElement.style.borderBottom = '1px solid #ddd';
            jobElement.style.padding = '10px 0';
            resultsContainer.appendChild(jobElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No jobs found.</p>';
    }

    // Show the modal
    modal.style.display = "block";
    modal.querySelector('.modal-content').style.transform = "scale(1.05)";
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = "scale(1)";
    }, 200);
});

// Close the modal
document.querySelector('.close').addEventListener('click', function () {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    modal.querySelector('.modal-content').style.transform = "scale(0.95)";
});
// Close the modal when clicking outside of it
window.addEventListener('click', function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
        modal.querySelector('.modal-content').style.transform = "scale(0.95)";
    }
});


