// Слайдер

$('.sl').slick({
    cssEase: 'ease-in',
    fade: true,
    prevArrow: '<div class="leftArrow"><img src="img/leftArrow.png"></div>',
    nextArrow: '<div class="rightArrow"><img src="img/rightArrow.png"></div>'
});

//Клендар

$(function () {

    var start = moment().subtract(29, 'days');

    function cb(start) {
        $('#reportrange span').html(start.format('DD/MM/YYYY'));
    }

    function cb2(start) {
        $('#reportrange2 span').html(start.format('DD/MM/YYYY'));
    }

    $('#reportrange').daterangepicker({
        singleDatePicker: true,
        startDate: start,
        endDate: "12/03/2018",
        "locale": {
            "daysOfWeek": [
                "Нд",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        }
    }, cb);
    cb(start);

    $('#reportrange2').daterangepicker({
        singleDatePicker: true,
        startDate: start,
        endDate: "15/03/2018",
        "locale": {
            "daysOfWeek": [
                "Нд",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        }
    }, cb2);
    cb2(start);
});

//Селект

$(document).ready(function () {
    $('select').each(function () {
        $(this).siblings('p').text($(this).children('option:selected').text());
    });
    $('select').change(function () {
        $(this).siblings('p').text($(this).children('option:selected').text());
    });
});

//Кнопка наверх

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
});

