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
let section1=document.createElement('section')
let div1=document.createElement('div')
let h1=document.createElement('h1')
let div2=document.createElement('div')
let div3=document.createElement('div')
let div4=document.createElement('div')
let article0=document.createElement('article')
let div5=document.createElement('div')
let div6=document.createElement('div')
let div7=document.createElement('div')
let a10=document.createElement('a')
let img1=document.createElement('img')
/*second project*/ 
let div8=document.createElement('div')
let article1=document.createElement('article')
let div9=document.createElement('div')
let article2=document.createElement('article')
let div10=document.createElement('div')
let div11=document.createElement('div')
let div12=document.createElement('div')
let a11=document.createElement('a')
let img2=document.createElement('img')
/*third project*/
let div13=document.createElement('div')
let article3=document.createElement('article')
let div14=document.createElement('div')
let article4=document.createElement('article')
let div15=document.createElement('div')
let div16=document.createElement('div')
let div17=document.createElement('div')
let a12=document.createElement('a')
let img3=document.createElement('img')
/*fourth project*/
let div18=document.createElement('div')
let article5=document.createElement('article')
let div19=document.createElement('div')
let article6=document.createElement('article')
let div20=document.createElement('div')
let div21=document.createElement('div')
let div22=document.createElement('div')
let a13=document.createElement('a')
let img4=document.createElement('img')
/*fifth project*/
let div23=document.createElement('div')
let article7=document.createElement('article')
let div24=document.createElement('div')
let article8=document.createElement('article')
let div25=document.createElement('div')
let div26=document.createElement('div')
let div27=document.createElement('div')
let a14=document.createElement('a')
let img5=document.createElement('img')
/*sixth project*/
let div28=document.createElement('div')
let article9=document.createElement('article')
let div29=document.createElement('div')
let article10=document.createElement('article')
let div30=document.createElement('div')
let div31=document.createElement('div')
let div32=document.createElement('div')
let a15=document.createElement('a')
let img6=document.createElement('img')

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

function pop_project_window() {
    body.append(section1)
    section1.append(div1,h1,div2,div3,div4,article0,div5,div6,div7,a10,img1,div8,article1,div9,article2,div10,div11,div12,a11,img2,div13,article3,div14,article4,div15,div16,div17,a12,img3)
    section1.append(div18,article5,div19,article6,div20,div21,div22,a13,img4,div23,article7,div24,article8,div25,div26,div27,a14,img5,div28,article9,div29,article10,div30,div31,div32,a15,img6)
    div3.append(div4)
    article0.append(div5,div6,div7)
    article1.append(div9)
    article2.append(div10,div11,div12)
    article3.append(div14)
    article4.append(div15,div16,div17)
    article5.append(div19)
    article6.append(div20,div21,div22)
    article7.append(div24)
    article8.append(div25,div26,div27)
    article9.append(div29)
    article10.append(div30,div31,div32)

    section1.setAttribute('class','projects-container')
    section1.setAttribute('id','portfolio')
    div1.setAttribute('class','secondimagecontain')
    h1.setAttribute('class','text3')
    h1.textContent='Projects'
    div2.setAttribute('class','projectpageimage1')
    div3.setAttribute('class','rectangle1')
    div4.setAttribute('class','text4')
    div4.textContent='Project name goes here'
    article0.setAttribute('class','grid-container')
    div5.setAttribute('class','grid-item box1')
    div5.textContent="HTML/CSS"
    div6.setAttribute('class','grid-item box2')
    div6.textContent="Ruby on Rails"
    div7.setAttribute('class','grid-item box3')
    div7.textContent="Javascript"
    a10.setAttribute('class','text115')
    a10.setAttribute('href','#')
    a10.textContent="See this project"
    img1.setAttribute('class','img113')
    img1.setAttribute('src','images/arrowsymbol.svg')
    img1.setAttribute('alt','arrow symbol for webpage')
    div8.setAttribute('class', 'projectpageimage2')
    article1.setAttribute('class','rectangle3')
    div9.setAttribute('class','text4')
    div9.textContent='Project name goes here'
    article2.setAttribute('class', 'grid-container')
    div10.setAttribute('class','grid-item box1')
    div10.textContent="HTML/CSS"
    div11.setAttribute('class','grid-item box2')
    div11.textContent="Ruby on Rails"
    div12.setAttribute('class','grid-item box3')
    div12.textContent="Javascript"
    a11.setAttribute('class','text25')
    a11.setAttribute('href','#')
    a11.textContent='See this project'
    img2.setAttribute('class','img img23')
    img2.setAttribute('src','images/arrowsymbol.svg')
    img2.setAttribute('alt','arrow symbol for webpage')

    div13.setAttribute('class', 'projectpageimage3')
    article3.setAttribute('class','rectangle5')
    div14.setAttribute('class','text text4')
    div14.textContent='Project name goes here'
    article4.setAttribute('class', 'grid-container')
    div15.setAttribute('class','grid-item box1')
    div15.textContent="HTML/CSS"
    div16.setAttribute('class','grid-item box2')
    div16.textContent='Ruby on Rails'
    div17.setAttribute('class','grid-item box3')
    div17.textContent="Javascript"
    a12.setAttribute('class','text35')
    a12.setAttribute('href','#')
    a12.textContent='See this project'
    img3.setAttribute('class','img33')
    img3.setAttribute('src','images/arrowsymbol.svg')
    img3.setAttribute('alt','arrow symbol for webpage')

    div18.setAttribute('class', 'projectpageimage4')
    article5.setAttribute('class','rectangle7')
    div19.setAttribute('class','text4')
    div19.textContent='Project name goes here'
    article6.setAttribute('class', 'grid-container')
    div20.setAttribute('class','grid-item box1')
    div20.textContent='HTML/CSS'
    div21.setAttribute('class','grid-item box2')
    div21.textContent="Ruby on Rails"
    div22.setAttribute('class','grid-item box3')
    div22.textContent="Javascript"
    a13.setAttribute('class','text45')
    a13.setAttribute('href','#')
    a13.textContent='See this project'
    img4.setAttribute('class','img43')
    img4.setAttribute('src','images/arrowsymbol.svg')
    img4.setAttribute('alt','arrow symbol for webpage')

    div23.setAttribute('class', 'projectpageimage5')
    article7.setAttribute('class','rectangle9')
    div24.setAttribute('class','text4')
    div24.textContent='Project name goes here'
    article8.setAttribute('class', 'grid-container')
    div25.setAttribute('class','grid-item box1')
    div25.textContent="HTML/CSS"
    div26.setAttribute('class','grid-item box2')
    div26.textContent="Ruby on Rails"
    div27.setAttribute('class','grid-item box3')
    div27.textContent="Javascript"
    a14.setAttribute('class','text55')
    a14.setAttribute('href','#')
    a14.textContent="See this project"
    img5.setAttribute('class','img35')
    img5.setAttribute('src','images/arrowsymbol.svg')
    img5.setAttribute('alt','arrow symbol for webpage')

    div28.setAttribute('class', 'projectpageimage6')
    article9.setAttribute('class','rectangle11')
    div29.setAttribute('class','text4')
    div29.textContent='Project name goes here'
    article10.setAttribute('class', 'grid-container')
    div30.setAttribute('class','grid-item box1')
    div30.textContent="HTML/CSS"
    div31.setAttribute('class','grid-item box2')
    div31.textContent="Ruby on Rails"
    div32.setAttribute('class','grid-item box3')
    div32.textContent="Javascript"
    a15.setAttribute('class','text5')
    a15.setAttribute('href','#')
    a15.textContent='See this project'
    img6.setAttribute('class','img3')
    img6.setAttribute('src','images/arrowsymbol.svg')
    img6.setAttribute('alt','arrow symbol for webpage')

    insertBefore(section1)
}
//pop_project_window()
