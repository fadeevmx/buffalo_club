$(document).ready(function () {
    const aMenu = $('#menu');
    const aStructure = $('#structure');
    const aSale = $('#sale');
    const aReviews = $('#reviews');
    const aPhotos = $('#photos');
    const aContacts = $('#contacts');
    const btnDetailed = $('.advertisement-action .button')
    const contBurgerStructure = $('.burger-structure');
    const contOffers = $('.offers');
    const contSale = $('.sale');
    const contReviews = $('.reviews');
    const contPhotoGuests = $('.photoGuests');
    const contContactsMap = $('.contacts-map');
    const cards = $('.col');
    const popularCards = $('.cool');
    const hotCards = $('.hot');
    const veganCards = $('.vegan');
    const stillCards = $('.still');
    const allBurgersBtn = $('#allBurgers');
    const popularBurgersBtn = $('#popularBurgers');
    const hotBurgersBtn = $('#hotBurgers');
    const veganBurgersBtn = $('#veganBurgers');
    const otherBurgersBtn = $('#otherBurgers');
    const allBtns = $('.header-actions button');
    const secondPhotoBlock = $('.secondPhotoBlock');
    const photosAtionBtn = $('.photos-actions button');
    const photosGuests = $('.photos');
    const upBtn = $('#up');
    const smallMenu = $('#smallMenu')

    $(smallMenu).click(function () {
        $('.menu').addClass('open');
    });

    $('.menu').click(function () {
        $('.menu').each(function () {
            $('.menu').removeClass('open')
        })
    });

    smallMenu.click(function () {
        aMenu.addClass('open');
    });



    aMenu.click(function () {
        aMenu.each(function () {
            aMenu.removeClass('open')
        })
    });



    $(aMenu).click(function () {
        $('html, body').animate({
            scrollTop: contOffers.offset().top
        }, 500);
    });

    $(aStructure).click(function () {
        $('html, body').animate({
            scrollTop: contBurgerStructure.offset().top
        }, 500);
    });

    $(aSale).click(function () {
        $('html, body').animate({
            scrollTop: contSale.offset().top
        }, 500);
    });

    $(btnDetailed).click(function () {
        $('html, body').animate({
            scrollTop: contSale.offset().top
        }, 500);
    });

    $(aReviews).click(function () {
        $('html, body').animate({
            scrollTop: contReviews.offset().top
        }, 500);
    });

    $(aPhotos).click(function () {
        $('html, body').animate({
            scrollTop: contPhotoGuests.offset().top
        }, 500);
    });

    $(aContacts).click(function () {
        $('html, body').animate({
            scrollTop: contContactsMap.offset().top
        }, 500);
    });

    // Блок с карточками товаров

    $(allBurgersBtn).click(function () {
        $(allBtns).css({
            borderColor: `rgb(253, 202, 22)`
        });

        $(this).css({
            borderColor: `rgb(254, 252, 250)`
        });

        $(cards).css({
            display: `block`,
            position: `relative`
        });

        $(stillCards).css({
            display: `none`,
            position: `absolute`
        });

        $(otherBurgersBtn).css({
            display: `block`,
            position: `relative`
        });

    });

    $(popularBurgersBtn).click(function () {
        $(allBtns).css({
            borderColor: `rgb(253, 202, 22)`
        });

        $(this).css({
            borderColor: `rgb(254, 252, 250)`
        });

        $(cards).css({
            display: `none`,
            position: `absolute`
        });

        $(popularCards).css({
            display: `block`,
            position: `relative`
        });

        $(otherBurgersBtn).css({
            display: `block`,
            position: `relative`
        });

    });

    $(hotBurgersBtn).click(function () {
        $(allBtns).css({
            borderColor: `rgb(253, 202, 22)`
        });

        $(this).css({
            borderColor: `rgb(254, 252, 250)`
        });

        $(cards).css({
            display: `none`,
            position: `absolute`
        });

        $(otherBurgersBtn).css({
            display: `block`,
            position: `relative`
        });

        $(hotCards).css({
            display: `block`,
            position: `relative`
        });
    });

    $(veganBurgersBtn).click(function () {
        $(allBtns).css({
            borderColor: `rgb(253, 202, 22)`
        });

        $(this).css({
            borderColor: `rgb(254, 252, 250)`
        });

        $(cards).css({
            display: `none`,
            position: `absolute`
        });

        $(veganCards).css({
            display: `block`,
            position: `relative`
        });

        $(otherBurgersBtn).css({
            display: `block`,
            position: `relative`
        });
    });

    $(otherBurgersBtn).click(function () {
        $(allBtns).css({
            borderColor: `rgb(253, 202, 22)`
        });

        $(this).css({
            display: `none`,
            position: `absolute`
        });

        $(cards).css({
            display: `block`,
            position: `relative`
        });

        $(stillCards).css({
            display: `block`,
            position: `relative`
        });
    });

    //Блок с фото посетителей

    $(photosAtionBtn).click(function () {
        $(this).css({
            display: `none`
        })

        $(secondPhotoBlock).css({
            display: `flex`
        })
    })

    //Открытие POPUP с фото

    $(photosGuests).magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{enabled:true}
    });

    $(upBtn).click(function () {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 500);
    });

})
