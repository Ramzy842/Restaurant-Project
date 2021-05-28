export default function contact(){
    let div = document.createElement('div');
    let container = document.querySelector('.content_container')
    div.innerHTML = `
    <ul>
        <li><span>Location:</span> Galaxies and Planets</li>
        <li><span>Phone:</span> 655-788-127</li>
        <li><span>Website:</span><a href="https://github.com/Ramzy842"> https://github.com/Ramzy842</a></li>
    </ul>
        `

    div.classList.add('contact-info')    


container.appendChild(div)
}