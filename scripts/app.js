var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


document.getElementById("testimonials").innerHTML = `TESTIMONIALS`
document.getElementById("subtitle").innerHTML = `What our customer say`


const evaluation = [
    {
        vector: "image/vectorImg.png",
        userProfile :"image/justinAlins.png",
        name: "Justin Alins",
        subtitle: "Product Designer",
        description: " “Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.” ",
        star: "image/stars.png",
        designer: "image/designer.png"
    },
    {
        vector: "image/vectorImg.png",
        userProfile :"image/emilyCarter.png",
        name: "Emily Carter",
        subtitle: "UX/UI Designer",
        description: "“Jobfind made my job search incredibly easy. The platform is user-friendly and their support team is always there to help.”",
        star: "image/stars.png",
        designer: "image/designer.png"
    },
    {
        vector: "image/vectorImg.png",
        userProfile :"image/michaelBrown.png",
        name: "Michael Brown",
        subtitle: "Front-end Developer",
        description: "“I found my dream job thanks to Jobfind. Their vast network of employers and their professional support team are top-notch.”",
        star: "image/stars.png",
        designer: "image/designer.png"
    },
    {
        vector: "image/vectorImg.png",
        userProfile :"image/sophieTurner.png",
        name: "Sophie Turner",
        subtitle: "Graphic Designer",
        description: "“Jobfind is a game changer. The platform is intuitive, and the support I received was exceptional. Highly recommended!”",
        star: "image/stars.png",
        designer: "image/designer.png"
    },
    {
        vector: "image/vectorImg.png",
        userProfile :"image/davidSmith.png",
        name: "David Smith",
        subtitle: "Web Developer",
        description: "“I had a fantastic experience with Jobfind. Their team was incredibly helpful and guided me through every step of the job search process.”",
        star: "image/stars.png",
        designer: "image/designer.png"
    }
]

const evaluationsContainer = document.getElementById('evaluations-container');

evaluationsContainer.innerHTML = evaluation.map(item => {
    return `
      <div class="swiper-slide">
        <div class="evaluation">
          <div class="image-div">
            <img class="vector" src="${item.vector}" alt="vector">
            <img class="users-image" src="${item.userProfile}" alt="users">
          </div>
          <div>
            <h1 class="name">${item.name}</h1>
            <h3 class="department">${item.subtitle}</h3>
            <p class="text">${item.description}</p>
            <img src="${item.star}" alt="stars" class="evaluation-stars">
            <img src="${item.designer}" alt="designer" class="evaluation-designer">
          </div>
        </div>
      </div>
    `;
  }).join('');