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

function pop_project_win(title, image, rectclass, alinkclass, imglinkclass, tech0, tech1, tech2, livelink, sourcelink) {
    this.title=title;
    this.image=image;
    this.rectclass=rectclass;
    this.alinkclass=alinkclass;
    this.imglinkclass=imglinkclass;
    this.tech0=tech0;
    this.tech1=tech1;
    this.tech2=tech2;
    this.livelink=livelink
    this.sourcelink=sourcelink;
}

const project0 = new pop_project_win(
    'Project name goes here',
    'projectpageimage1',
    'rectangle1',
    'text115',
    'img113',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
  );
  
const project1 = new pop_project_win(
    'Project name goes here',
    'projectpageimage2',
    'rectangle3',
    'text25',
    'img img23',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);
  
const project2 = new pop_project_win(
    'Project name goes here',
    'projectpageimage3',
    'rectangle5',
    'text35',
    'img33',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);
  
const project3 = new pop_project_win(
    'Project name goes here',
    'projectpageimage4',
    'rectangle7',
    'text45',
    'img43',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);

const project4 = new pop_project_win(
    'Project name goes here',
    'projectpageimage5',
    'rectangle9',
    'text55',
    'img35',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);

const project5 = new pop_project_win(
    'Project name goes here',
    'projectpageimage6',
    'rectangle11',
    'text5',
    'img3',
    'HTML/CSS',
    'Ruby on rails',
    'Javascript',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
    'https://github.com/Medini-Rajendra/Mobile_Webpage_Menu',
);

const projects = [project0, project1, project2, project3, project4, project5];
const titles = [];
const images = [];
const rects = [];
const alinks=[];
const imglinks=[];
const tech0s = [];
const tech1s = [];
const tech2s = [];
const tech3s = [];
const liveLinks = [];
const sourceLinks = [];

for (let i = 0; i < projects.length; i += 1) {
    titles.push(projects[i].title);
    images.push(projects[i].image);
    rects.push(projects[i].rectclass);
    alinks.push(projects[i].alinkclass);
    imglinks.push(projects[i].imglinkclass);
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

function display_project(title, image, rectclass, alinkclass, imglinkclass, tech0, tech1, tech2, id) {
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
    div3.setAttribute('class',rectclass)
    div4.setAttribute('class','text4')
    div5.setAttribute('class','grid-container')
    div6.setAttribute('class','grid-item box1')
    div7.setAttribute('class','grid-item box2')
    div8.setAttribute('class','grid-item box3')
    a0.setAttribute('class',alinkclass)
    a0.setAttribute('href','#')
    a0.textContent="See this project"
    a0.setAttribute('onclick', 'pop_window_click()')
    img0.setAttribute('class',imglinkclass)
    img0.setAttribute('src','images/arrowsymbol.svg')
    img0.setAttribute('alt','arrow symbol for webpage')

    div4.textContent= title;
    div6.textContent= tech0;
    div7.textContent= tech1;
    div8.textContent= tech2;

}

const section2=document.createElement('section')
const div14=document.createElement('div')
const h34=document.createElement('h3')
const div15=document.createElement('div')
const div16=document.createElement('div')
const button10=document.createElement('button')
const div17=document.createElement('div')
const button11=document.createElement('button')
const div18=document.createElement('div')
const button12=document.createElement('button')
const img21=document.createElement('img')
const p21=document.createElement('p')
const div19=document.createElement('div')
const button13=document.createElement('button')
const div20=document.createElement('div')
const button14=document.createElement('button')

function pop_window_click() {
    body.append(section2)
    section2.append(div14,h34,div15,p21,div16,button10,div17,button11,div18,button12,img21,p21,div19,button13,div20,button14)
    div14.append(h34,div15)
    div16.append(button10,div17,button11,div18,button12)
    //img21.append(p21)
    div19.append(button13,div20,button14)
    section2.setAttribute('class', 'section_pop_window')
    div14.setAttribute('class', 'pop_container pop_window')
    h34.setAttribute('class', 'pop_title')
    div15.setAttribute('class', 'closeicon')
    div15.setAttribute('onclick', 'section2.remove()')
    div16.setAttribute('class', 'pop_container move_buttons')
    button10.setAttribute('class', 'pop_button_edit')
    button10.setAttribute('type', 'button')
    button11.setAttribute('class', 'pop_button_edit')
    button11.setAttribute('type', 'button')
    button12.setAttribute('class', 'pop_button_edit')
    button12.setAttribute('type', 'button')
    div17.setAttribute('class', 'divider')
    div18.setAttribute('class', 'divider')
    img21.setAttribute('class', 'portfolio_image')
    img21.setAttribute('src', './images/projectpage_pop.svg')
    img21.setAttribute('alt', 'portfolio_pic')
    p21.setAttribute('class', 'pop_content')
    div19.setAttribute('class', 'buttons_live_pop')
    button13.setAttribute('class', 'padding_live live_link1')
    button13.setAttribute('onclick',"window.location.href='https://github.com/Medini-Rajendra/Mobile_Webpage_Menu';")
    div20.setAttribute('class', 'divider_live')
    button14.setAttribute('class', 'padding_live live_link2')
    button14.setAttribute('onclick', "window.location.href='https://github.com/Medini-Rajendra/Mobile_Webpage_Menu';")

    h34.textContent='Project name goes here'
    div15.textContent='×'
    button10.textContent='HTML/CSS'
    button11.textContent='Ruby on Rails'
    button12.textContent='Javascript'
    p21.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
    button13.textContent='See live'
    button14.textContent='See source'
}

for (let i = 0; i < titles.length; i += 1) {
    display_project(
        titles[i],
        images[i],
        rects[i],
        alinks[i],
        imglinks[i],
        tech0s[i],
        tech1s[i],
        tech2s[i],
        i,
    );
}// pop_project_window()
