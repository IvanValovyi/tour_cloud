let headers = document.querySelector('header')

headers.innerHTML = `
<section class='logo'>
    <svg>
        <use xlink:href="./sprite.svg#logo"></use>
    </svg>
    <h1>TourCloud</h1>
</section>

<nav class='desctop_nav'>
    <a href='./home.html'>HOME</a>
    <a href='./about.html'>ABOUT</a>
    <a href='./contacts.html'>CONTACTS</a>
</nav>

<button class='mobile_nav_btn'>=</button>

<nav class='mobile_nav'>
    <a href='./home.html'>HOME</a>
    <a href='./about.html'>ABOUT</a>
    <a href='./contacts.html'>CONTACTS</a>
</nav>
`

let footer = document.querySelector('footer')

footer.innerHTML = `
<p>Copyright © 2021. All Rights Reserved.</p>
`

let mobile_menu_btn = document.querySelector('.mobile_nav_btn')
let mobile_menu = document.querySelector('.mobile_nav')
let body = document.querySelector('body')

    mobile_menu_btn.addEventListener('click', ()=>{
        menu_animation()
    })

    function clear_class(){
        mobile_menu_btn.classList.remove('active')
        mobile_menu.classList.remove('active')
    }

    function menu_animation (){
        if (mobile_menu.classList.contains('active')) {
            mobile_menu_btn.classList.add('active')
            mobile_menu.classList.remove('active')
            body.classList.remove('hidden')
            setTimeout(()=>{
                mobile_menu_btn.innerHTML = '='
                mobile_menu_btn.classList.remove('active')
            }, 300)
        }
        else {
            body.classList.add('hidden')
            mobile_menu_btn.classList.add('active')
            mobile_menu.classList.add('active')
            setTimeout(()=>{
                mobile_menu_btn.innerHTML = '×'
                mobile_menu_btn.classList.remove('active')
            }, 300)
        }
    }