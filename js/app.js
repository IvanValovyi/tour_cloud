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
    <a href='#' class='login'>
    <svg>
        <use xlink:href='./sprite.svg#profile'></use>
    </svg>

    <span>Увійти</span>
    </a>

    <a href='./about.html'>Про нас</a>
    <a href='./home.html'>Стати партнером</a>
    <a href='./contacts.html'>контакти</a>

    <a href='#' class='pay'>
        <svg>
            <use xlink:href='./sprite.svg#bitcoin'></use>
        </svg>
        <span>Приймаємо для оплати криптовалюту</span>
    </a>
</nav>
`

let footer = document.querySelector('footer')

footer.innerHTML = `
<section class='black_blok'>
<div class='info'>
    <section>
        <p>+38 067 277 40 40</p>
        <p>+38 067 277 40 40</p>
        <p>+38 067 277 40 40</p>
    </section>
    <section>
        <p class='email'>info@glory-tour.com.ua</p>
        <p class='address desctop'>м. Київ, вул. Велика Васильківська 129, офіс 3</p>
        <p class='address mobile'>м. Київ,<br/>вул. Велика<br/>Васильківська 129, офіс 3</p>
    </section>
</div>
<div class='social'>
    <section class='images'>
        <svg class='facebook'>
            <use xlink:href='./sprite.svg#facebook'></use>
        </svg>
        <svg class='instagram'>
            <use xlink:href='./sprite.svg#instagram'></use>
        </svg>
    </section>
    <section class='pay'>
        <svg class='bitcoin'>
            <use xlink:href='./sprite.svg#bitcoin'></use>
        </svg>
        <p>Приймаємо для оплати криптовалюту</p>
    </section>
</div>
</section>
<section class='white_blok'>
    <p>© 2021 Компанія "Glory Tour"</p>
</section>
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