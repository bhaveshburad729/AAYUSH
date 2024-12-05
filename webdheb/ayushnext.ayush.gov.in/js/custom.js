$("input[type ='text']").attr('autocomplete', 'off');
$("input[type ='email']").attr('autocomplete', 'off');
$("input[type ='password']").attr('autocomplete', 'off');
//Browser Back Button Disable
window.history.pushState(null, "", window.location.href);
window.onpopstate = function() {
    //swal.fire("Browser Back Button not Working!!");
    window.history.pushState(null, "", window.location.href);
};


$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
        .prev()
        .find("i:last-child")
        .toggleClass("fa-minus fa-plus");
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
}

function validateEmail(email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return pattern.test($.trim(email));

}

$('#phone').on('change', function() {
    //console.log($(this).val());
    var val = $(this).val();
    var len = val.length;
    if (val.indexOf('0') == 0) {
        swal.fire('', 'First number should not be 0', 'error');
        $(this).val('');
    }
    if (len < 10) {
        swal.fire('', "Please Enter 10 Digit Mobile Number Only.", "error");
        var val = $(this).val('');
    }
});

$(document).on('change', '#email', function() {
    var email = $(this).val();
    if (email.length > 0) {
        email = $.trim(email);
        var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (pattern.test(email)) {
            return true;
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please Enter valid email',
                type: 'error',
                confirmButtonText: 'Ok'
            })
            $(this).val('');
            return false;
        }
    }
});

/* Field Validation JS */

$(document).on('keypress mouseenter mouseleave', '.numbersonly', function(e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        e.preventDefault();
        return false;
    }
});

$(document).on('keydown mouseenter mouseleave', '.textonly', function(e) {
    var key = e.keyCode;
    if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 190) || (key == 9))) {
        e.preventDefault();
    }
});

$(document).on('cut copy paste', '.nopaste', function(e) {
    e.preventDefault();
    return false;
});

$(document).on('change', '#pincode', function(e) {
    var pin = $(this).val();

    if (pin.length != 6) {
        swal.fire("Please Enter 6-digit Pincode only");
        $(this).val('');
        return false;
    }
});