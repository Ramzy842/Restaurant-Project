function home(){
    let container = document.querySelector('.content_container')
    
    const div = document.createElement('div');
    div.classList.add('main_content');

    const h1 = document.createElement('h1');
    h1.innerText = `Welcome to Marvaurant`

    const p = document.createElement('p');
    p.innerText = `Marvaurant is a restaurant that offers meals from every galaxy and planet of the marvel cinematic universe.`

    div.appendChild(h1)
    div.appendChild(p)

    container.appendChild(div)

}

export default home;