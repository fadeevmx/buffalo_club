$(document).ready(function () {
    const callBtn = $('#call');
    const popupForm = $('#popup');
    const popupBtn = $('#popupButton');
    const name = $('#nameForm');
    const phone = $('#phoneForm');
    const order = $('#orderForm');
    const close = $('#popupClose');
    let orderSuccess = $('#order-success');
    let loader = $('.loader');



    callBtn.click(function () {
        popupForm.css({
            display: `flex`
        })
    });

    function resetForm() {
        $('.popup-image').css({display: `none`});
        $('.popup-header').css({display: `none`});
        $('#form').css({display: `none`});
        orderSuccess.css('display', 'flex');
    }

    popupBtn.click(function () {
        let hasError = false;
        loader.css('display', 'flex');
        name.css({
            "border": "1px solid rgb(253, 202, 22)"
        });
        phone.css({
            "border": "1px solid rgb(253, 202, 22)"
        });
        order.css({
            "border": "1px solid rgb(253, 202, 22)"
        });

        $('.error-input').hide();

        if (!name.val()) {
            name.next().show();
            name.css({
                "border": "1px solid rgb(255, 0, 0)"
            });
            hasError = true;
            loader.hide();
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css({
                "border": "1px solid rgb(255, 0, 0)"
            });
            hasError = true;
            loader.hide();
        }
        if (!order.val()) {
            order.next().show();
            order.css({
                "border": "1px solid rgb(255, 0, 0)"
            });
            hasError = true;
            loader.hide();
        }

        if (!hasError) {

            // ajax

            $.ajax({
                method: "POST",
                url: 'http://testologia.site/checkout',
                data: {product: order.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $(popupBtn).prop('click', resetForm);
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                    console.log(msg);
                });
        }
    })

    close.click(function () {
        popupForm.css({
            display: `none`
        })
        $('.popup-image').css({display: `block`});
        $('.popup-header').css({display: `block`});
        $('#form').css({display: `flex`});
        $('#form input').val(``);
        orderSuccess.css('display', 'none');
    });

})