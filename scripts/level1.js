$(document).ready(function () {
    var first_click_count = 0;
    var second_click_count = 0;
    var third_click_count = 0;
    var success_count = 0;
    // $('.flip-card-inner').on({

    // })
    $('.flip-card').on({
        mouseenter: function () {

            $(this).find('.flip-card-inner').css("transform", "rotateY(180deg)")


        },
        mouseleave: function () {
            $(this).find('.flip-card-inner').css("transform", "unset")
        }
    })
    $('#obj-one').click(function () {
        if (!third_click_count) {
            $('#third').on({
                mouseenter: function () {

                    $(this).find('.flip-card-inner').css("transform", "unset")
                }
            })
            $(this).css("margin", "300px 900px 10px 340px")
                .css("background-image", 'url("./img/team.svg")')
                .css("background-size", "cover")
                .css("width", "211px")
                .css("height", "170px")
            $(this).on({
                mouseenter: function () {
                    $(this).css("animation", "glow 1s infinite alternate")
                        .css("animation-duration", "0.4s")
                },
                mouseleave: function () {
                    $(this).css("animation", "none")
                }
            })
            $(this).css("cursor", "pointer");
            $('#third p').css("display", "none")
            $('#third .flip-card-inner').css("transform", "unset")
            $('#third .flip-card-front').css("background-color", "#182a9017")
            $('#third .flip-card-front h1').css("display", "none")
            $('#third .flip-card-inner').append('<div class="done"></div>')
            ++third_click_count;
            ++success_count;
            if (success_count == 3) {
                $('#to-second').css('display', 'flex')
                    .append('לשלב הבא');
                    $('#pic-h1').text(".");

            }

        }
    })
    $('#obj-two').click(function () {
        if (!second_click_count) {
                $('#second').on({
                    mouseenter: function () {

                        $(this).find('.flip-card-inner').css("transform", "unset")
                    }
                })
                $(this).css("margin", "90px 900px 10px 630px")
                    .css("background-image", 'url("./img/drone.png")')
                    .css("background-size", "cover")
                    .css("width", "150px")
                    .css("height", "80px")
                $(this).on({
                    mouseenter: function () {
                        $(this).css("animation", "glow 1s infinite alternate")
                            .css("animation-duration", "0.4s")
                    },
                    mouseleave: function () {
                        $(this).css("animation", "none")
                    }
                })
                $(this).css("cursor", "pointer");
                $('#second p').css("display", "none")
                $('#second .flip-card-inner').css("transform", "unset")
                $('#second .flip-card-front').css("background-color", "#182a9017")
                $('#second .flip-card-front h1').css("display", "none")
                $('#second .flip-card-inner').append('<div class="done"></div>')
                ++second_click_count;
                ++success_count;
                if (success_count == 3) {
                    $('#to-second').css('display', 'flex')
                        .append('לשלב הבא');
                        $('#pic-h1').text(".");

                }

            }
        })
    $('#obj-three').click(function () {
        if (!first_click_count) {
            $('#first').on({
                mouseenter: function () {

                    $(this).find('.flip-card-inner').css("transform", "unset")
                }
            })
            $(this).css("margin", "135px 900px 10px 220px")
                .css("width", "55px")
                .css("background-image", 'url("./img/engineer.png")')
                .css("background-size", "cover")
                .css("height", "100px")
            $(this).on({
                mouseenter: function () {
                    $(this).css("animation", "glow 1s infinite alternate")
                        .css("animation-duration", "0.4s")
                },
                mouseleave: function () {
                    $(this).css("animation", "none")
                }
            })
            $(this).css("cursor", "pointer");
            $('#first p').css("display", "none")
            $('#first .flip-card-inner').css("transform", "unset")
            $('#first .flip-card-front').css("background-color", "#182a9017")
            $('#first .flip-card-front h1').css("display", "none")
            $('#first .flip-card-inner').append('<div class="done"></div>')
            ++first_click_count;
            ++success_count;
            if (success_count == 3) {
                $('#to-second').css('display', 'flex')
                    .append('לשלב הבא');
                    $('#pic-h1').text(".");
                }

        }
    })

})