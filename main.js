function scrollEvent() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.a');
    const menu = document.querySelector('.nav__list')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                links.forEach(link => {
                    const linkHref = link.getAttribute('href').replace('#', '');
                   
                    if(linkHref === entry.target.id){
                        link.classList.add('active');
                    }else{
                        link.classList.remove('active');
                    }
                })
            }
        })
    }, {threshold: 0.8})

    sections.forEach(section => {
        observer.observe(section)
    })

    menu.addEventListener('click', (e) => {
        if(e.target.classList.contains('a')){
            e.preventDefault()
            const sectionID = e.target.getAttribute('href').replace('#', '');
            window.scrollTo({
                top: document.getElementById(sectionID).offsetTop,
                behavior: 'smooth'
            })
        }
    })
}
scrollEvent()