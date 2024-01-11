// top get car
if(document.querySelector('.btn__gray')) {
    const topBtns = document.querySelectorAll('.btn-get-car');
    const topImages = document.querySelectorAll('.top__img');

    topBtns.forEach(btn=> {
        btn.addEventListener('click', ()=> {
            topBtns.forEach(btn=> {
                btn.classList.remove('btn__gray_active')
            });

            topImages.forEach(img => {
                img.classList.add('top__img_hidden');


                if(btn.id === img.getAttribute('data-id-image')) {
                    img.classList.remove('top__img_hidden');
                }
            });

            btn.classList.add('btn__gray_active')
            console.log(btn.id);

        });
    })
}
// phone mask
if(document.querySelector('.phoneMask')) {
    const phoneBtns = document.querySelectorAll('.phoneMask');

    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    phoneBtns.forEach(phone=> {
        IMask(phone, maskOptions)
    })
}
// input date
if(document.querySelector('.input-date')) {
    const inputDate = document.querySelectorAll('.input-date');

    inputDate.forEach(input=> {
        input.addEventListener('change', ()=> {
            let text = input.parentElement.querySelector('p');

            let d = input.value.split('T')[0];
            let t = input.value.split('T')[1];

            let mount = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
            
            let currentMountCount = d.split('-')[1];

            text.innerHTML = `${d.split('-')[0]} ${mount[Number(currentMountCount) - 1]}, ${t}`
            if(text.textContent == ' undefined, undefined') {
                text.innerHTML = 'Дата и время'
            }
            if(text.textContent == 'Дата и время') {
                text.classList.remove('text-filled')
            }
            else {
                text.classList.add('text-filled')
            }
        });
    })
}
// open modal
if(document.querySelector('.open-modal') && document.querySelector('.modal')) {
    let modal = document.querySelector('.modal');
    let btnOpenModals = document.querySelectorAll('.open-modal');
    let btnClose = document.querySelector('.modal__close')

    btnOpenModals.forEach(btn=> {
        btn.addEventListener('click', ()=> {
            modal.classList.remove('modal_hidden')
        })
    })

    btnClose.addEventListener('click', ()=> {
        modal.classList.add('modal_hidden')
    })

    window.addEventListener('click', (e)=> {
        if(e.target.className == 'modal'){
            modal.classList.add('modal_hidden')
        }
    })

    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape") {
            modal.classList.add('modal_hidden')
        }
      });
}
// header bureger
if(document.querySelector('.header-menu')) {
    let headerMenu = document.querySelector('.header-menu');
    let headerBurger = document.querySelector('.burger');
    let headerBurgerClose = document.querySelector('.header-menu__close');

    headerBurger.addEventListener('click', ()=> {
        headerMenu.classList.add('open-modal')
    });

    headerBurgerClose.addEventListener('click', ()=> {
        headerMenu.classList.remove('open-modal')
    })
}
// slider 
if(document.querySelector('.more-details__list')) {
   if(window.innerWidth <= 768){
    const swiper = new Swiper('.more-details__list', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1.08,
        spaceBetween: 22,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.more-details-button-next',
          prevEl: '.more-details-button-prev',
        },

      });
   }
}
// accordion tarif mobile
if(document.querySelector('.tarif__item')){
    const items = document.querySelectorAll('.tarif__item');

    items.forEach(item=> {
        item.querySelector('.tarif__item-open').addEventListener('click', ()=> {
            item.classList.toggle('tarif__item_open')
        })
    });
}
// accordion .sober-driver
if(document.querySelector('.sober-driver')) {
    let parent = document.querySelector('.sober-driver');
    let btn = document.querySelector('.top-page__open');

    btn.addEventListener('click', ()=> {
        parent.classList.toggle('parent-open')
    })
}
// accordion .light-car
if(document.querySelector('.light-car')) {
    let parent = document.querySelector('.light-car');
    let btn = document.querySelector('.top-page__open');

    btn.addEventListener('click', ()=> {
        parent.classList.toggle('parent-open')
    })
}
// accordion tire-service
if(document.querySelector('.tire-service')) {
    let parent = document.querySelector('.tire-service');
    let btn = document.querySelector('.top-page__open');

    btn.addEventListener('click', ()=> {
        parent.classList.toggle('parent-open')
    })
}
// mainForm
if(document.querySelector('.input-validate')) {
    let inputs = document.querySelectorAll('.input-validate');
    
    inputs.forEach(input=> {
        input.addEventListener('input',()=> {
            input.parentElement.classList.remove('error')
        })
    })
}
if(document.querySelector('#formMain')) {
    var form = $('#formMain');
    var inputs = form.find('.input-validate');
    form.change(function(){
        var status = [];
        inputs.each(function(){
            if(this.value == '' ){
                return status.push('no');
            }
            else{
                return status.push('ok');
            }
            console.log(status)
        });
        console.log(status);
        if(status[0] == 'ok' && status[1] == 'ok' && status[2] == 'ok' && status[3] == 'ok'){
            console.log('All ok');
            
            if(document.querySelector('#formMain .more-details__form-check').checked == true) {
                document.querySelector('#formMain .more-details__form-btn').classList.remove('disabled')
            }
            else{
                document.querySelector('#formMain .more-details__form-btn').classList.add('disabled')
            }
        }
    });

}

if(document.querySelector('#modalForm')) {
    var form1 = $('#modalForm');
    var inputs1 = form1.find('.input-validate');
    form1.change(function(){
        var status = [];
        inputs1.each(function(){
            if(this.value == '' ){
                return status.push('no');
            }
            else{
                return status.push('ok');
            }
            console.log(status)
        });
        console.log(status);
        if(status[0] == 'ok' && status[1] == 'ok' && status[2] == 'ok' && status[3] == 'ok'){
            console.log('All ok');
            
            if(document.querySelector('#modalForm .more-details__form-check').checked == true) {
                document.querySelector('#modalForm .more-details__form-btn').classList.remove('disabled')
            }
            else{
                document.querySelector('#modalForm .more-details__form-btn').classList.add('disabled')

            }
        }
    });

}
