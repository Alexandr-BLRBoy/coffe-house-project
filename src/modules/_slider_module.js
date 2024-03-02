// Slider
const sliderBox = document.querySelector('.slider_box');
const btnLeft = document.querySelector('.slider_btn__left');
const btnRight = document.querySelector('.slider_btn__right');
const sliderControl = document.querySelectorAll('.slider_control__item');
const sliderAvailability = document.querySelector('.favorites_slider');


let position = 0; // Смещение от левого края
let pagIndex = 0;

// Проверка на ширину экрана
const widthWindow = document.documentElement.clientWidth;

const nextSlideWindowWidth = () => {
    if(widthWindow <= 380 ) {

        // Next slide
        const nextSlide = () => {
            if(position < (sliderControl.length - 1) * 348) {
                position = position + 348;
                pagIndex = pagIndex + 1;
            } else {
                position = 0;
                pagIndex = 0;
            }

            sliderBox.style.left = -position + 'px';
            thisSlide(pagIndex);
        }

        // Prev slide
        const prevSlide = () => {
            if(position > 0) {
                position = position - 348;
                pagIndex = pagIndex - 1;
            } else {
                position = (sliderControl.length - 1) * 348;
                pagIndex = (sliderControl.length - 1);
            }

            sliderBox.style.left = -position + 'px';
            thisSlide(pagIndex);
        }

        //Pagination slide
        const thisSlide = (index) => {
            for(let slider_control__item of sliderControl) {
                slider_control__item.classList.remove('active');
            }
            sliderControl[index].classList.add('active');
        }


        btnRight.addEventListener('click', nextSlide);
        btnLeft.addEventListener('click', prevSlide);


        sliderControl.forEach((slider_control__item, index) => {
            slider_control__item.addEventListener('click', () => {
                position = 348 * index;
                sliderBox.style.left = - position + 'px';
                pagIndex = index;
                thisSlide(pagIndex);
            })
        })


    }
}



// Next slide
const nextSlide = () => {
    if(position < (sliderControl.length - 1) * 480) {
        position = position + 480;
        pagIndex = pagIndex + 1;
    } else {
        position = 0;
        pagIndex = 0;
    }

    sliderBox.style.left = -position + 'px';
    thisSlide(pagIndex);
}

// Prev slide
const prevSlide = () => {
    if(position > 0) {
        position = position - 480;
        pagIndex = pagIndex - 1;
    } else {
        position = (sliderControl.length - 1) * 480;
        pagIndex = (sliderControl.length - 1);
    }

    sliderBox.style.left = -position + 'px';
    thisSlide(pagIndex);
}

//Pagination slide
const thisSlide = (index) => {
    for(let slider_control__item of sliderControl) {
        slider_control__item.classList.remove('active');
    }
    sliderControl[index].classList.add('active');
}


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);


sliderControl.forEach((slider_control__item, index) => {
    slider_control__item.addEventListener('click', () => {
        position = 480 * index;
        sliderBox.style.left = - position + 'px';
        pagIndex = index;
        thisSlide(pagIndex);
    })
})