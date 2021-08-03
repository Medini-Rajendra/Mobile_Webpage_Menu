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
