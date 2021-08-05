let body=document.body
let section=document.createElement('section')
let i0=document.createElement('i')
let ul=document.createElement('ul')
let li0=document.createElement('li')
let li1=document.createElement('li')
let li2=document.createElement('li')
let li3 = document.createElement('li')
let a0 = document.createElement('a');
let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
/*first project*/
// let section1=document.createElement('section')
// let div1=document.createElement('div')
// let h1=document.createElement('h1')
// let div2=document.createElement('div')
// let div3=document.createElement('div')
// let div4=document.createElement('div')
// let article0=document.createElement('article')
// let div5=document.createElement('div')
// let div6=document.createElement('div')
// let div7=document.createElement('div')
// let a10=document.createElement('a')
// let img1=document.createElement('img')
// /*second project*/ 
// let div8=document.createElement('div')
// let article1=document.createElement('article')
// let div9=document.createElement('div')
// let article2=document.createElement('article')
// let div10=document.createElement('div')
// let div11=document.createElement('div')
// let div12=document.createElement('div')
// let a11=document.createElement('a')
// let img2=document.createElement('img')
// /*third project*/
// let div13=document.createElement('div')
// let article3=document.createElement('article')
// let div14=document.createElement('div')
// let article4=document.createElement('article')
// let div15=document.createElement('div')
// let div16=document.createElement('div')
// let div17=document.createElement('div')
// let a12=document.createElement('a')
// let img3=document.createElement('img')
// /*fourth project*/
// let div18=document.createElement('div')
// let article5=document.createElement('article')
// let div19=document.createElement('div')
// let article6=document.createElement('article')
// let div20=document.createElement('div')
// let div21=document.createElement('div')
// let div22=document.createElement('div')
// let a13=document.createElement('a')
// let img4=document.createElement('img')
// /*fifth project*/
// let div23=document.createElement('div')
// let article7=document.createElement('article')
// let div24=document.createElement('div')
// let article8=document.createElement('article')
// let div25=document.createElement('div')
// let div26=document.createElement('div')
// let div27=document.createElement('div')
// let a14=document.createElement('a')
// let img5=document.createElement('img')
// /*sixth project*/
// let div28=document.createElement('div')
// let article9=document.createElement('article')
// let div29=document.createElement('div')
// let article10=document.createElement('article')
// let div30=document.createElement('div')
// let div31=document.createElement('div')
// let div32=document.createElement('div')
// let a15=document.createElement('a')
// let img6=document.createElement('img')

function mobile_menu() {
    body.append(section);
    section.append(i0);
    section.append(ul);
    ul.append(li0, li1, li2, li3)
    li0.append(a0);
    li1.append(a1);
    li2.append(a2);
    li3.append(a3);

    section.setAttribute('class', 'Menubutton')
    i0.setAttribute('class', 'material-icons')
    ul.setAttribute('class', 'menu_ul')
    a0.setAttribute('href', '#hello');
    a0.setAttribute('onclick','section.remove()')
    a1.setAttribute('href', '#portfolio');
    a1.setAttribute('onclick','section.remove()')
    a2.setAttribute('href', '#about');
    a2.setAttribute('onclick','section.remove()')
    a3.setAttribute('href', '#contact');
    a3.setAttribute('onclick','section.remove()')

    i0.textContent='close';
    i0.setAttribute('onclick','section.remove()')

    a0.textContent='Hello';
    a1.textContent='Portfolio';
    a2.textContent='About';
    a3.textContent='Contact';

    a0.style.color="Black";
    a0.style.fontSize="large";
    a1.style.color="Black";
    a1.style.fontSize="large";
    a2.style.color="Black";
    a2.style.fontSize="large";
    a3.style.color="Black";
    a3.style.fontSize="large";
}

function pop_project_win(title, image, tech0, tech1, tech2, livelink, sourcelink) {
    this.title=title;
    this.image=image;
    this.tech0=tech0;
    this.tech1=tech1;
    this.tech2=tech2;
    this.livelink=livelink
    this.sourcelink=sourcelink;
}

const project0 = new pop_project_win(
    'Project name goes here',
    'projectpageimage1',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
  );
  
const project1 = new pop_project_win(
    'Project name goes here',
    'projectpageimage2',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);
  
const project2 = new pop_project_win(
    'Project name goes here',
    'projectpageimage3',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);
  
const project3 = new pop_project_win(
    'Project name goes here',
    'projectpageimage4',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);

const project4 = new pop_project_win(
    'Project name goes here',
    'projectpageimage5',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);

const project5 = new pop_project_win(
    'Project name goes here',
    'projectpageimage6',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);

const projects = [project0, project1, project2, project3, project4, project5];
const titles = [];
const images = [];
const tech0s = [];
const tech1s = [];
const tech2s = [];
const tech3s = [];
const liveLinks = [];
const sourceLinks = [];

for (let i = 0; i < projects.length; i += 1) {
    titles.push(projects[i].title);
    images.push(projects[i].image);
    tech0s.push(projects[i].tech0);
    tech1s.push(projects[i].tech1);
    tech2s.push(projects[i].tech2);
    liveLinks.push(projects[i].liveLink);
    sourceLinks.push(projects[i].sourceLink);
  }

const section1=document.createElement('section')
const div1=document.createElement('div')
const h1=document.createElement('h1')

body.append(section1);
section1.append(div1,h1);

section1.setAttribute('class','projects-container')
section1.setAttribute('id','portfolio')
div1.setAttribute('class','secondimagecontain')
h1.setAttribute('class','text3')
h1.textContent='Projects'

function display_project(title, image, tech0, tech1, tech2, id) {
    const div2=document.createElement('div')
    const div3=document.createElement('div')
    const div4=document.createElement('div')
    const div5=document.createElement('div')
    const div6=document.createElement('div')
    const div7=document.createElement('div')
    const div8=document.createElement('div')
    const a0=document.createElement('a')
    const img0=document.createElement('img')
    section1.append(div2,div3,div4,div5,div6,div7,div8,a0,img0)
    div3.append(div4);
    div5.append(div6,div7,div8)

    div2.setAttribute('class',image)
    div3.setAttribute('class','rectangle1')
    div4.setAttribute('class','text4')
    div5.setAttribute('class','grid-container')
    div6.setAttribute('class','grid-item box1')
    div7.setAttribute('class','grid-item box2')
    div8.setAttribute('class','grid-item box3')
    a0.setAttribute('class','text115')
    a0.setAttribute('href','#')
    a0.textContent="See this project"
    img0.setAttribute('class','img113')
    img0.setAttribute('src','images/arrowsymbol.svg')
    img0.setAttribute('alt','arrow symbol for webpage')

    div4.textContent= title;
    div6.textContent= tech0;
    div7.textContent= tech1;
    div8.textContent= tech2;

}

for (let i = 0; i < titles.length; i += 1) {
    display_project(
        titles[i],
        images[i],
        tech0s[i],
        tech1s[i],
        tech2s[i],
        i,
    );
}// pop_project_window()
