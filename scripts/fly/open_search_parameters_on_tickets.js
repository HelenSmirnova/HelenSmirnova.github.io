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
    setInterval(function () {
        if ($('app-modify-search-dialog').length) {
            if (!this.isCleared) {
                this.styleTheModal();
                this.isClicked = false;
                this.isCleared = true;
            //    this.hideLoaderScreen();
            }

        } else {
            console.trace('New 5');
            if (!this.isClicked) {
                this.showLoaderScreen();
                $(".modify-search").click();
                this.isClicked = true;
                this.isCleared = false;
            }
        }
    }, 10);

}

function hideLoaderScreen() {
    $( ".loader-screen" ).remove();
}

function showLoaderScreen() {
    jQuery('<div/>', {
        "class": 'loader-screen',
         title: 'now this div has a title!'
    }).appendTo('app-header');
}

function styleTheModal() {
    $(".mat-dialog-backdrop-light").hide();
    $("app-mat-dialog-header").hide();

    var styles = "<style>";
    styles += `
    /* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.26, autoprefixer: v9.7.3) */
    .loader-screen {
        background: yellow;
        width: 100%;
        height: 100%;
        z-index: 2000;
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
