/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $("#channels").load("view/sidebar-wrapper.html", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
        }
        if (statusTxt === "error")
            alert("Error loading sidebar-wrapper.html : " + xhr.status + ": " + xhr.statusText);
    });

    $("#navbar").load("view/navbar-wrapper.html", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            $('#btn-about').on('click', function () {
                var htmlString;
                htmlString = `
                    <p><span style="font-weight: 600;">Velodata Discord Viewer</span> was developed by <a href='https://velodata.org'>Ivan Julian Vetsich</a> as an <a href='${e = "https://github.com/velodata/Velodata-Discord-Viewer"}/blob/master/LICENSE.md'>open source</a> body of evidence relating to an Unfair Dismissal Application filed by Vetsich in June 2023.</p>
                    <sub>v.31e, released 7th August 2023</sub>
                    <p></p>
                    <p>As part of their defence, the Respondent in the proceedings claimed Vetsich was no longer capable of "effectively writing modern software".</p>
                    <p></p>
                    <p>In response,  Vetsich wrote a clone of the Discord messaging system to demonstrate (a) his skills were still perfectly up to date and (b) he was a highly effective and productive employee prior to his termination.</p>
                    <p></p>
                    <p>In August 2023 the matter was resolved in an Out of Court settlement,  the details of which remain confidential.</p>
                    <sub>To close this window,  click anywhere on the screen.</sub>`;
                $("#dialog").html(htmlString);
                $("#modal").addClass('visible');
            });
        }
        if (statusTxt === "error")
            alert("Error loading navbar-wrapper.html : " + xhr.status + ": " + xhr.statusText);
    });

    $('#overlay').on('click', function () {
        // alert('This alert should not show up!');
        $("#dialog").html("");
        $("#modal").removeClass("visible");
    });

    $(() => {
        $(document).tooltip();
    });


});



// function F0_About() {
//     var htmlString;
//     htmlString = `<p>Velodata Discord Viewer was developed by <a href='https://velodata.org'>Ivan Julian Vetsich</a> as an <a href='${e = "https://github.com/chylex/Discord-History-Tracker"}/blob/master/LICENSE.md'>open source</a> project.</p>
//                   <sub>v.31e, released 10 October 2022</sub>
//                   <p>Please, report any issues and suggestions to the <a href='${e}/issues'>tracker</a>. If you want to support the development, please spread the word and consider <a href='https://www.patreon.com/chylex'>becoming a patron</a> or <a href='https://ko-fi.com/chylex'>buying me a coffee</a>. Any support is appreciated!</p>
//                   <p><a href='${e}/issues'>Issue Tracker</a> &nbsp;&mdash;&nbsp; <a href='${e}'>GitHub Repository</a> &nbsp;&mdash;&nbsp; <a href='https://twitter.com/chylexmc'>Developer's Twitter</a></p>`;
//     $("#dialog").html(htmlString);
//     $("#modal").addClass('visible');
// };



function load_Kenn_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Kenn_Page_One.html?v=2", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error") {
            alert("Error loading Kenn_Page_One.html : " + xhr.status + ": " + xhr.statusText);
        }
    });
}


function load_Brady_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Brady_Page_One.html?v=2", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error") {
            alert("Error loading Brady_Page_One.html : " + xhr.status + ": " + xhr.statusText);
        }
    });
}


function load_Jackson_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Jackson_Page_One.html?v=2", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error") {
            alert("Error loading Jackson_Page_One.html : " + xhr.status + ": " + xhr.statusText);
        }
    });
}


function load_Nathan_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Nathan_Page_One.html?v=2", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error") {
            alert("Error loading Nathan_Page_One.html : " + xhr.status + ": " + xhr.statusText);
        }
    });
}


function load_Michael_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Michael_Page_One.html?v=3", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error") {
            alert("Error loading Michael_Page_One.html : " + xhr.status + ": " + xhr.statusText);
        }
    });
}


function load_Eugene_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Eugene_Page_One.html", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error") {
            alert("Error loading Eugene_Page_One.html : " + xhr.status + ": " + xhr.statusText);
        }
    });
}


function load_Reece_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Reece_Page_One.html?v=2", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error") {
            alert("Error loading Reece_Page_One.html : " + xhr.status + ": " + xhr.statusText);
        }
    });
}


function load_Jerry_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Jerry_Page_One.html?v=4", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error")
            alert("Error loading Jerry_Page_One.html : " + xhr.status + ": " + xhr.statusText);
    });
}


function load_Puneet_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Puneet_Page_One.html?v=4", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error")
            alert("Error loading Puneet_Page_One.html : " + xhr.status + ": " + xhr.statusText);
    });
}


function load_Carlo_Page_One(lcAriaLabel) {
    $("#iosLoading").click();
    $("#messages").load("view/Carlo_Page_One.html?v=4", function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") {
            goOverlay.hide();
            $("a.link-39sEB3[aria-label='" + lcAriaLabel + "']").parent().addClass("selected");
            $("a.link-39sEB3").not("[aria-label='" + lcAriaLabel + "']").parent().removeClass("selected");
            prepareLazyLoadImages();
            $("#messages").animate({ scrollTop: 1 }, 10);
        }
        if (statusTxt === "error")
            alert("Error loading Jerry_Page_One.html : " + xhr.status + ": " + xhr.statusText);
    });
}







function prepareLazyLoadImages() {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
}






$('#myTask').on('click', 'li', function (event) {
    $(event.target).remove()
});



