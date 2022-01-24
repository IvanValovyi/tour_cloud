
    let password = document.querySelector('#password')
    let confirm_password = document.querySelector('#confirm_password')
    let confirm_password_error = document.querySelector('.password_error')
    confirm_password_error.style.display = 'none'
    let submit_btn = document.querySelector('.submit')

    submit_btn.addEventListener('click', (e)=>{
        if(form_error()){
            e.preventDefault()
        } else {
            return
        }
    })

    confirm_password.addEventListener('input', ()=>{
        if(form_error()){
            confirm_password_error.style.display = 'flex'
        } else {
            confirm_password_error.style.display = 'none'
        }
    })

    function form_error(){
        if (password.value.length >= 8 && confirm_password.value.length >= 8) {
            if (confirm_password.value != password.value) {
                return true
            } else {
                return false
            }
        }
    }

    password.addEventListener('input', ()=>{
        if (password.value.length >= 8 && confirm_password.value.length >= 8) {
            if (confirm_password.value != password.value) {
                confirm_password_error.style.display = 'flex'
                console.log('submit_btn');
            } else {
                confirm_password_error.style.display = 'none'
                submit_btn.classList.remove('disabled')
            }
        }
    })


    function show_password(input_blok){

        let btn = input_blok.querySelector('.show_password')
        let input = input_blok.querySelector('input')

        btn.addEventListener('mouseover', (e)=>{
            btn.querySelector('svg').querySelector('use').href.baseVal = '../sprite.svg#hide_password'
            input.type = 'text'
        })

        btn.addEventListener('mouseout', (e)=>{
            btn.querySelector('svg').querySelector('use').href.baseVal = '../sprite.svg#show_password'
            input.type = 'password'
        })

    }

    let all_password_blok = document.querySelectorAll('#password_blok')

    all_password_blok.forEach(blok=>{
        show_password(blok)
    })