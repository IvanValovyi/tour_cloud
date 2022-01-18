let back_blok = document.querySelector('.video').querySelector('.background_blok')
let play = document.querySelector('.video').querySelector('.play')

play.addEventListener('click', ()=>{
    back_blok.classList.add('opacity')
    play.classList.add('opacity')
    setTimeout(()=>{
        back_blok.className = play.className = 'none'
    }, 500)
})