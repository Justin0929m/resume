let resumeArray = [
  {
    id: 1,
    date: "Apr 2023 - Current",
    description:
      "I'm currently attending a 12 month coding bootcamp at Life Choices which will prepare me to become a web developer, I'm learning all the necessary skills thrive as a front end developer.",
    place: "Life Choices",
  },
  {
    id: 2,
    date: "Mar 2022 - Nov 2022",
    description:
      "I worked at Business Technology for 9 months as a Systems Engineer and my daily tasks were as following seeing to clients hardware and software issues, doing client visits and setting up PCs for clients. The reason why I left was because I felt like it wasn't what I wanted to do and needed to do something else.",
    place: "Business Technology",
  },
  {
    id: 3,
    date: "Jun 2019 - Nov 2019",
    description:
      "I worked at First Technology for 5 months and my daily tasks were creating power apps and power flows for clients, seeing to clients SharePoint Sites, creating custom sharepoint sites. The reason why I left was because I felt like I wasn't ready and needed to studying further.",
    place: "First Technology",
  },
  {
    id: 4,
    date: "2016",
    description:
      "My high school period wasn't the best but I'm proud of the person I become after I graduated.",
    place: "Rhodes High School",
  },
];

let displayResume = document.querySelector("#resume");

displayResume.innerHTML = ''
resumeArray.forEach((data) =>{
    displayResume.innerHTML += `
    <div class="resume-job">
        <div class="resume-content">
            <p class="resume-date">${data.date}</p>
            <p class="resume-place">${data.place}</p>
            <p class="resume-desc">${data.description}</p>
        </div>
    </div>
    `;
})

// Skills Section

let skillsArray = [
  {
    id: 1,
    title: "HTML5",
    level: "Advanced",
    description:
      "I've been self studying front end developer for a while now and I've managed to get a very good understanding of HTML5, though I know web development won't stop growing so I won't stop learning.",
    img: "https://i.postimg.cc/KzYFXCGr/html2.png",
  },
  {
    id: 2,
    title: "CSS3",
    level: "intermediate",
    description:
      "I've managed to get a very good grasp of CSS during over the few months, I am happy with the progress I've made but I'm still learning as much as I can to improve my skills.",
    img: "https://i.postimg.cc/hGsg5KBt/css.png",
  },
  {
    id: 3,
    title: "JavaScript",
    level: "intermediate",
    description:
      "I've been self studying front end developer for a while now and I've managed to get a very good understanding of HTML5, though I know web development won't stop growing so I won't stop learning.",
    img: "https://i.postimg.cc/Bb2GBwsy/js.png",
  },
  {
    id: 4,
    title: "GitHub",
    level: "intermediate",
    description:
      "During my 6 months at Life Choices, I learned how to use GitHub and now have a good understanding of the command we were taught and I can now use GitHub with my eyes closed.",
    img: "https://i.postimg.cc/4yqXQwTv/github.png",
  },
];

let skillsSection = document.querySelector('#skills')

skillsSection.innerHTML = ''
skillsArray.forEach((skills) =>{
  skillsSection.innerHTML += `
  <div class="custom-skills-card">
      <div class="skills-img-box">
          <img src="${skills.img}" alt="${skills.title}" class="skills-img" loading="lazy">
      </div>
      <div class="custom-skills-card-body">
          <h4 class="skills-bg">${skills.title} - <span class="skills-level">${skills.level}</span></h4>
          <p class="custom-card-text">${skills.description}</p>
      </div>
  </div>
  `;
})

// Project Section

let projectArray = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "I created a e-commerce website with an admin page using HTML, CSS, and JavaScript. The primary objective was to build a functional and visually appealing online store with an accompanying admin interface to manage products by using a CRUD system",
    gitLink: "https://github.com/LC1007/eomp-ecommerce.git",
    liveLink: "https://helpful-kangaroo-54d80a.netlify.app/",
    img: "https://i.postimg.cc/85Q7c93d/Untitled.png",
  },
  {
    id: 2,
    title: "Property Website",
    description:
      "I found a property website design on Pinterest and tried recreating it using HTML and CSS. The goal was to develop a visually appealing and user-friendly website that showcases various properties and provides essential information to potential buyers or renters.",
    gitLink: "https://github.com/Justin0929m/property-Website-Update.git",
    liveLink: "https://prowebtoday.netlify.app",
    img: "https://i.postimg.cc/RCDfcsjt/Website-2.pnghttps://i.postimg.cc/RCDfcsjt/Website-2.png",
  },
  {
    id: 3,
    title: "Travel Website",
    description:
      "I did the same process as with the property website website, where I looked for website designs to recreate to test my HTML and CSS skills. I found a travel website that peaked my interest, I've recreated the website to the best of my ability",
    gitLink: "https://github.com/Justin0929m/travel-website.git",
    liveLink: "https://1travelwebsite1.netlify.app",
    img: "https://i.postimg.cc/0jrzWBth/Website-3.png",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "I created this website for someone who sells things from their home, the purpose of the website was to make posting items more easily instead of posting on their whatsapp status. I am creating still in the process of building the website but I've completed most of the UI aspect of it.",
    gitLink: "https://github.com/Justin0929m/project-1.git",
    liveLink: "https://homesalestoday.netlify.app",
    img: "https://i.postimg.cc/dVvgdk5Z/Website-4.png",
  },
]; 

let projectSection = document.querySelector('#project-section')

projectSection.innerHTML = ''
projectArray.forEach((data) =>{
    projectSection.innerHTML += `
    <div class="custom-card">
        <img src="${data.img}" alt="${data.title}" loading="lazy">
        <div class="custom-card-body">
            <h5 class="custom-card-title">${data.title}</h5>
            <p class="custom-card-text">${data.description}</p>
            <div class="icons">
                <a href="${data.gitLink}" target="_blank"><i class="bi bi-github"></i></a>
                <a href="${data.liveLink}" target="_blank"><i class="bi bi-braces"></i></a>
            </div>
        </div>
    </div>
    `;
})

let toggleBtn = document.querySelector("#toggle-btn");
let nav = document.querySelector(".custom-navbar-links");

toggleBtn.addEventListener('click', toggle)

function toggle(){
    nav.classList.toggle('hide')
}