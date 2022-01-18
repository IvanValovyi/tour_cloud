
    let password = document.querySelector('#password')
    let confirm_password = document.querySelector('#confirm_password')
    let confirm_password_error = document.querySelector('.password_error')
    confirm_password_error.style.display = 'none'

    confirm_password.addEventListener('input', ()=>{
        if (password.value.length >= 8 && confirm_password.value.length >= 8) {
            if (confirm_password.value != password.value) {
                confirm_password_error.style.display = 'flex'
            } else {
                confirm_password_error.style.display = 'none'
            }
        }
    })

    password.addEventListener('input', ()=>{
        if (password.value.length >= 8 && confirm_password.value.length >= 8) {
            if (confirm_password.value != password.value) {
                confirm_password_error.style.display = 'flex'
            } else {
                confirm_password_error.style.display = 'none'
            }
        }
    })


    function show_password(input_blok){

        let btn = input_blok.querySelector('.show_password')
        let input = input_blok.querySelector('input')

        btn.addEventListener('mouseover', (e)=>{
            btn.querySelector('img').src = './images/show_password.svg'
            input.type = 'text'
        })

        btn.addEventListener('mouseout', (e)=>{
            btn.querySelector('img').src = './images/hide_password.svg'
            input.type = 'password'
        })

    }

    let all_password_blok = document.querySelectorAll('#password_blok')

    all_password_blok.forEach(blok=>{
        show_password(blok)
    })