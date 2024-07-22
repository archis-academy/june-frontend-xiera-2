document.getElementById("testimonials-header").innerHTML = `TESTIMONIALS`
document.getElementById("testimonial-subtitle").innerHTML = `What our customer say`


const testimonialsEvaluation = [
    {
      testimonialsUserProfile :"image/justinAlins.png",
      testimonialsName: "Justin Alins",
      testimonialsSubtitle: "Product Designer",
      testimonialsDescription: " “Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.” ",
      testimonialsStar: "image/stars.png",
      testimonialsDesigner: "image/designer.png"
    },
    {
      testimonialsUserProfile :"image/emilyCarter.png",
      testimonialsName: "Emily Carter",
      testimonialsSubtitle: "UX/UI Designer",
      testimonialsDescription: "“Jobfind made my job search incredibly easy. The platform is user-friendly and their support team is always there to help.”",
      testimonialsStar: "image/stars.png",
      testimonialsDesigner: "image/designer.png"
    },
    {
      testimonialsUserProfile :"image/michaelBrown.png",
      testimonialsName: "Michael Brown",
      testimonialsSubtitle: "Front-end Developer",
      testimonialsDescription: "“I found my dream job thanks to Jobfind. Their vast network of employers and their professional support team are top-notch.”",
      testimonialsStar: "image/stars.png",
      testimonialsDesigner: "image/designer.png"
    },
    {
      testimonialsUserProfile :"image/sophieTurner.png",
      testimonialsName: "Sophie Turner",
      testimonialsSubtitle: "Graphic Designer",
      testimonialsDescription: "“Jobfind is a game changer. The platform is intuitive, and the support I received was exceptional. Highly recommended!”",
      testimonialsStar: "image/stars.png",
      testimonialsDesigner: "image/designer.png"
    },
    {
      testimonialsUserProfile :"image/davidSmith.png",
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