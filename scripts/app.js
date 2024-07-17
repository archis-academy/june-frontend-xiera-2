const jobs = [
    {
        background: "images/designBg.png",
        symbol:"images/designImg.png",
        jobsName: "Design",
        description: "310 Vacancy"
    },
    {
        background: "images/businessBg.png",
        symbol:"images/businessImg.png",
        jobsName: "Business",
        description: "310 Vacancy"
    },
    {
        background: "images/developmentBg.png",
        symbol:"images/developmentImg.png",
        jobsName: "Development",
        description: "310 Vacancy"
    },
    {
        background: "images/communicationBg.png",
        symbol:"images/communicationImg.png",
        jobsName: "Communication",
        description: "310 Vacancy"
    }
]

const jobsContainer = document.getElementById("categories");

jobsContainer.innerHTML = jobs.map(item => {
    return`
    <div class="job-item">
      <div class="image-div">
        <img class="background" src="${item.background}" alt="background">
        <div class="symbol-div">
           <img class="symbol" src="${item.symbol}" alt="symbol">
        </div>
      </div>  
      <h1 class="jobsName">${item.jobsName}</h1>
      <p class="jobsDescription">${item.description}</p>
    </div>
    `   ;
}).join('');