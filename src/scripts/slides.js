$(document).ready(function all() {
    let position = 0;
    let slidesToShow;
    const slidesToScroll = 1;
    const container = $('.slider-container').width();
    const track = $('.slider-track');
    const item = $('.slider-item');
    const itemComment = $('.item');
    const itemsCount = item.length;
    const slidePosition = $('.slide-position');
    const slideCount = $('.slide-count');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    let itemWidth;
    let i = 0;
    let resizeTimer;


    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(all, 100);
        initialSizes();
        changeSize();
        setPosition();
        checkBtns();
    })

    if (container < 750) {
        slidesToShow = 1;
        itemWidth = container / slidesToShow;
    } else {
        slidesToShow = 3;
        itemWidth = container / slidesToShow;
    }


    const checkBtns = () => {
        if (container < 750) {
            btnPrev.prop('disabled', position === 0);
            btnNext.prop('disabled', position <= -(itemsCount - slidesToShow - 2) * itemWidth);
        } else {
            btnPrev.prop('disabled', position === 0);
            btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
        }
    }

    const changeSize = () => {
        $(itemComment[i - 1]).removeClass(`choice`);
        $(itemComment[i]).addClass(`choice`);
        $(itemComment[i + 1]).removeClass(`choice`);

        $(item[i]).each(function (index, item) {
            $(item).css({
                justifyContent: `start`,
                opacity: `0.6`
            });
        });
        $(item[i + 2]).each(function (index, item) {
            $(item).css({
                justifyContent: `end`,
                opacity: `0.6`
            });
        });
        $(item[i + 1]).each(function (index, item) {
            $(item).css({
                justifyContent: `center`,
                opacity: `1`
            });
        });

    }

    const initialSizes = () => {
        itemComment.each(function (index, item) {
            $(item).removeClass(`choise`);
        });
    }

    const setPosition = () => {
        track.each(function () {
            $(this).css({
                transform: `translateX(${position}px)`
            });
        });
    };

    let movePosition = slidesToScroll * itemWidth;

    $(slideCount).html(itemsCount - 2);
    $(slidePosition).html(i + 1);

    btnPrev.click(function () {
        const itemRight = Math.abs(position) / itemWidth;

        position += itemRight >= slidesToScroll ? movePosition : itemRight * itemWidth;
        i -= 1;
        $(slidePosition).html(i + 1);
        initialSizes();
        changeSize();
        setPosition();
        checkBtns();
    })
    btnNext.click(function () {
        const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
        i += 1;
        $(slidePosition).html(i + 1);
        initialSizes();
        changeSize();
        setPosition();
        checkBtns();
    });


    initialSizes();
    changeSize();
    checkBtns();
})
