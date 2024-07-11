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
        name: "Justin Alins",
        subtitle: "Product Designer",
        description: " “Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.” ",
        star: "image/stars.png",
        designer: "image/designer.png"
    }
]

const evaluationsContainer = document.getElementById('evaluations-container');

evaluationsContainer.innerHTML = evaluation.map(item => {
    return `
        
            <div class="evaluation">
                <h1 class="name">${item.name}</h1>
                <h3 class="product-designer">${item.subtitle}</h3>
                <p class="text">${item.description}</p>
                <img src="${item.star}" alt="${item.star}" class="evaluation-stars">
                <img src="${item.designer}" alt="${item.designer}" class="evaluation-designer">
            </div>
        
    `;
}).join('');