// Doctors Clinic & Diagnostics JavaScript Document
//functions
function preloadImages(imgArray, callback) {
    var loadedImages = 0;
    var totalImages = imgArray.length;
    for (var i = 0; i < totalImages; i++) {
        var img = new Image();
        img.src = imgArray[i];
        img.onload = function () {
            loadedImages++;
            // When all images are loaded, call the callback function
            if (loadedImages === totalImages) {

            }
        };
    }
}
function numscrolls(obj) {
    $.getScript("js/counter.min.js").done(function () {
        $(obj).each(function () {
            $counters = $(this).text();
            $countnum = $counters.replace(",", "");
            $(this).easy_number_animate({
                start_value: 0,
                end_value: $countnum,
                duration: 1000,
                delimiter: ','
            });
        });
    });
}
function checkemaildomain(obj){
	if ($(obj).length > 0) {
		const freeDomains = [
			'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
			'aol.com', 'icloud.com', 'protonmail.com', 'zoho.com',
			'gmx.com', 'mail.com', 'yandex.com'
		];
		$(obj).on('change', function () {
			const email = $(this).val().trim().toLowerCase();
			const domain = email.split('@')[1];

			if (domain && $.inArray(domain, freeDomains) !== -1) {
				alert("Please use your business or organizational email address, not a free email provider.");
				$(this).val('').focus();
			}
		});
	}
}

//on page load
$(function () {
    var browserName = navigator.appName;
    var browserVer = parseInt(navigator.appVersion);
    if ((browserName == "Netscape" && browserVer < 5) || (browserName == "Microsoft Internet Explorer" && browserVer < 9)) {
        window.location = "detect_browser.html";
    }
	$("#loadin").fadeOut(3000); 
    const loadin = setTimeout(function () {
        $("#loadin").html("");
    }, 6000);
	$("body").addClass("show");
    if ($(".alert").length > 0) {
        var timer = setTimeout(function () {
            $(".alert").fadeOut()
        }, 12000);
    }
    if ($("#dcdnavbars .dropdown-item.active").length > 0) {
        $("#dcdnavbars .dropdown-item.active").parent(".dropdown-menu").parent(".nav-item").addClass("active");
    }
    if ($("#dcdsearchbtn").length > 0) {
        $("#dcdsearchbtn").click(function () {
            $("#dcdsearch").slideDown(300, function () {
                $("#dcd_search").focus();
            });
        });
        $("#dcdsearchclose").click(function () {
            $("#dcdsearch").slideUp(300);
        });
    }
    if ($("#whatsApp").length > 0) {
        var timer = setTimeout(function () {
            $("#whatsApp").addClass("anim_left");
        }, 5000);
        $("#whatsdis").click(function () {
            $(this).find('[class*="fa"]').toggleClass("d-none");
            $("#whatsApp").toggleClass("anim_right");
        });
    }
    if ($(".btn.btn-aside").length > 0) {
        $(".btn.btn-aside").click(function () {
            $('.btn.btn-aside [class*="fa-"]').toggleClass("d-none");
            $("aside.theme_adcolor_2").toggleClass("slide");
        });
    }
    if ($("#dcd_gallery").length > 0) {
        $.getScript("js/lightgallery.min.js").done(function () {
            $("#dcd_gallery").lightGallery({
                selector: "#dcd_gallery .dcd_photo_1 a",
                download: false
            });
        });
    }
    if ($(".dcd_block2_flex").length > 0) {
        $.getScript("js/jquery-isotope.min.js").done(function () {
            var $grid = $(".dcd_block2_flex").isotope({
                itemSelector: ".dcd_block2_flex .dcd_block2_1",
                percentPosition: true,
                transitionDuration: "0.7s",
                layoutMode: "masonry",
                masonry: {
                    columnWidth: ".dcd_block2_flex .dcd_block2_1",
                }
            });
        })
    }
    if ($("#gallery .dcd_flex").length > 0) {
        $.getScript("js/jquery-isotope.min.js").done(function () {
            var $grid = $("#gallery .dcd_flex").isotope({
                itemSelector: "#gallery .dcd_flex .dcd_flex_1",
                originLeft: true,
                percentPosition: true,
                transitionDuration: "0.7s",
                layoutMode: "masonry",
                masonry: {
                    columnWidth: "#gallery .dcd_flex .dcd_flex_1",
                }
            });
        })
    }
    if ($("#gallery").length > 0) {
        $.getScript("js/lightgallery.min.js").done(function () {
            $("#gallery").lightGallery({
                selector: "#gallery .dcd_flex_1 a",
                download: false
            });
        });
    }
    if ($(".gallery").length > 0) {
        $.getScript("js/lightgallery.min.js").done(function () {
            $(".gallery").lightGallery({
                selector: ".gallery .dcd_flex_1 a",
                download: false
            });
        });
    }
    if ($("#dcd_carousel").length > 0) {
        $.getScript("js/slick.min.js").done(function () {
            $("#dcd_carousel").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                centerMode: true,
                nextArrow: '<i class="fa-solid fa-arrow-right-long"></i>',
                prevArrow: '<i class="fa-solid fa-arrow-left-long"></i>',
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000
            });
        });
    }
    if ($("#dcd_slider .dcd_slider").length > 0) {
        $.getScript("js/slick.min.js").done(function () {
            $("#dcd_slider .dcd_slider").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                centerMode: false,
                nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
                prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 426,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }
    if ($(".dcd_sliders").length > 0) {
        $.getScript("js/slick.min.js").done(function () {
            $(".dcd_sliders").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                centerMode: false,
                nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
                prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 426,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }
    if ($("video").length > 0) {
        let videos = document.querySelectorAll("video");
        videos.forEach((video) => {
            video.addEventListener("play", function () {
                videos.forEach((vid) => {
                    if (vid !== video) {
                        vid.pause();
                    }
                });
            });
        });
    }
    if ($(".dcd_secn .result").length > 0) {
        $.getScript("js/jquery.simplePagination.js").done(function () {
            var items = $(".dcd_secn .result");
            var numItems = items.length;
            var perPage = 8;
            items.slice(perPage).hide();
            $('#pagination-container').pagination({
                items: numItems,
                itemsOnPage: perPage,
                prevText: "&laquo;",
                nextText: "&raquo;",
                onPageClick: function (pageNumber) {
                    var showFrom = perPage * (pageNumber - 1);
                    var showTo = showFrom + perPage;
                    items.hide().slice(showFrom, showTo).show();
                    window.location.hash = '#search_results';
                }
            });
        });
    }
    if ($(".dcd_secn_video a.btn").length > 0) {
        $(".dcd_secn_video a.btn").click(function () {
            var $ytsrc = $(this).attr("data-src");
            $("#dcd_YT iframe").attr("src", $ytsrc);
            $("#dcd_YT").modal();
        });
        $("#dcd_YT .close").click(function () {
            $("#dcd_YT iframe").removeAttr("src");
        });
    }
    if ($(".fa-group-arrows-rotate").length > 0) {
        $(document).ajaxStart(function () {
            $(".fa-group-arrows-rotate").fadeIn();
        }).ajaxStop(function () {
            $(".fa-group-arrows-rotate").fadeOut();
        });
    }
});
