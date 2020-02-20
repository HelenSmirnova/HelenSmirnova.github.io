function initjQuery(callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }
    script.src = '//code.jquery.com/jquery-3.3.1.min.js';
    document.getElementsByTagName("head")[0].appendChild(script);
}

var showLockScreen = true;
var isClicked = false;
var isCleared = false;
if (!window.jQuery) {
    initjQuery(function () {
        readyjQueryinit();
    });
} else {
    readyjQueryinit();
}


function readyjQueryinit() {
    this.showLoaderScreen(this.start);
}


function hideLoaderScreen() {
    $(".loader-screen").hide();
}

function start() {
    setTimeout(function () {
        setInterval(function () {
            if ($('app-modify-search-dialog').length) {
                if (!this.isCleared) {
                    this.styleTheModal();
                    this.isClicked = false;
                    this.isCleared = true;
                    setTimeout(this.hideLoaderScreen, 1000);
                }

            } else {
                console.trace('New 5');
                if ((!this.isClicked) && !$('.modify-search').prop('disabled')) {
                    $(".modify-search").click();
                    this.isClicked = true;
                    this.isCleared = false;
                }
            }
        }, 100);

    }, 2000);
}

function showLoaderScreen(callback) {
    $("body").append('<div class="loader-screen">Loading ...<div/>');
    callback();
}

function styleTheModal() {
    $(".mat-dialog-backdrop-light").hide();
    $("app-mat-dialog-header").hide();

    var styles = "<style>";
    styles += `
    .loader-screen {
        background: yellow;
        width: 100%;
        height: 100%;
        z-index: 2000;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }


    .cdk-overlay-container {
        position: unset;
    }

    .mat-dialog { transition: none; }

    .mat-dialog-container {
        background: none !important;
        box-shadow: none !important;
        transition: none !important;
    }

    .cdk-overlay-backdrop {
        transition: none !important;
    }

    .cdk-global-overlay-wrapper {
        justify-content: start !important;
    }

    .notransition {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        transition: none !important;
      }
	`;
    styles += "</style>";
    jQuery('body').append(styles);
}
