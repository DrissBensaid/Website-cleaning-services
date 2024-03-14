// slider 1
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto', // Ajustement automatique du nombre de slides
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});


// slider comment users
$(document).ready(function () {
    // Activer le carrousel
    $("#testimonial4").carousel();

    // Gérer les contrôles personnalisés
    $("#prev-button").click(function () {
        $("#testimonial4").carousel("prev");
    });

    $("#next-button").click(function () {
        $("#testimonial4").carousel("next");
    });
});



// slider 2

$(document).ready(function () {

    // Initialize Slider 1
    $('#slider1').slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
        breakpoint: 980,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    });

    // Initialize Slider 2
    $('#slider2').slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
        breakpoint: 980,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    });

    // Initialize Slider 3
    $('#slider3').slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
        breakpoint: 980,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    });

    // Initialize Slider 4
    $('#slider4').slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
        breakpoint: 980,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    });

    // Button click events
    $('#slider23Btn').click(function () {
    $('#slider2').addClass('hidden');
    $('#slider1').addClass('hidden');
    $('#slider4').addClass('hidden');
    $('#slider3').removeClass('hidden');
    });

    // Button click events
    $('#slider4Btn').click(function () {
    $('#slider2').addClass('hidden');
    $('#slider1').addClass('hidden');
    $('#slider3').addClass('hidden');
    $('#slider4').removeClass('hidden');
    });
    // Button click events
    $('#slider1Btn').click(function () {
    $('#slider2').addClass('hidden');
    $('#slider3').addClass('hidden');
    $('#slider4').addClass('hidden');
    $('#slider1').removeClass('hidden');
    });

    // Button click events
    $('#slider2Btn').click(function () {
    $('#slider3').addClass('hidden');
    $('#slider1').addClass('hidden');
    $('#slider4').addClass('hidden');
    $('#slider2').removeClass('hidden');
    });

});