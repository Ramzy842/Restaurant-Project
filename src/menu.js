export default function menu(){
    let container = document.querySelector('.content_container')
    const mealsMenu = document.createElement('div');
    mealsMenu.classList.add('meals_menu');

    const img1Div = document.createElement('div');
    img1Div.classList.add('img1');
    const img1 = document.createElement('img');
    img1.src = 'img/menu/asgardian_pancakes.jpg'
    const p1 = document.createElement('p');
    p1.innerText = "Asgardian Pancakes"


    const img2Div = document.createElement('div');
    img2Div.classList.add('img2');
    const img2 = document.createElement('img');
    img2.src = 'img/menu/assemble_soup.jpg'
    const p2 = document.createElement('p');
    p2.innerText = "Assemble Soup"

    const img3Div = document.createElement('div');
    img3Div.classList.add('img3');
    const img3 = document.createElement('img');
    img3.src = 'img/menu/titan_burger.jpg'
    const p3 = document.createElement('p');
    p3.innerText = "Titan Burger"

    const img4Div = document.createElement('div');
    img4Div.classList.add('img4');
    const img4 = document.createElement('img');
    img4.src = 'img/menu/earth_cookies.jpg'
    const p4 = document.createElement('p');
    p4.innerText = "Earth Cookies"

    //appending
    img1Div.appendChild(img1)
    img1Div.appendChild(p1)
    
    img2Div.appendChild(img2)
    img2Div.appendChild(p2)

    img3Div.appendChild(img3)
    img3Div.appendChild(p3)

    img4Div.appendChild(img4)
    img4Div.appendChild(p4)

    mealsMenu.appendChild(img1Div)
    mealsMenu.appendChild(img2Div)
    mealsMenu.appendChild(img3Div)
    mealsMenu.appendChild(img4Div)

    
    container.appendChild(mealsMenu)

    
    
}