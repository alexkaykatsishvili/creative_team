;(function ($) {
    $(function () {
        $('.slider').slick({
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            responsive: [
                {
                    breakpoint: 970,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        });
    });
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });
    window.onload = function () {
        var map;
        var point =  {lat: 48.752219, lng: 37.593790};
            iv1content = document.querySelector('.info-window-1');
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17,
                disableDefaultUI: true
            });
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                title: 'hello',
                icon: 'images/key.png'
            });
            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            })
        }
        initMap()
    }
})(jQuery);