let body=document.body
let section=document.createElement('section')
let i0=document.createElement('i')
let ul=document.createElement('ul')
let li0=document.createElement('li')
let li1=document.createElement('li')
let li2=document.createElement('li')
let li3=document.createElement('li')

function mobile_menu() {
    body.append(section);
    section.append(i0);
    section.append(ul);
    ul.append(li0,li1,li2,li3)

    section.setAttribute('class', 'Menubutton')
    i0.setAttribute('class', 'material-icons')
    ul.setAttribute('class', 'menu_ul')

    i0.textContent='close';
    i0.setAttribute('onclick','section.remove()')

    li0.textContent='Hello';
    li1.textContent='Portfolio';
    li2.textContent='About';
    li3.textContent='Contact';
}
mobile_menu()