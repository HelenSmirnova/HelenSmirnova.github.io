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
        if ($('app-modify-search-dialog').length && $('app-modify-search-dialog').css('opacity') == 1) {
            if (!this.isCleared) {
                this.styleTheModal();
                this.isClicked = false;
                this.isCleared = true;
            }

        } else {
            console.trace('New 5');
            if (!this.isClicked) {
                $(".modify-search").click();
                this.isClicked = true;
                this.isCleared = false;
            }
        }
    }, 100);

}

function styleTheModal() {
    $(".mat-dialog-backdrop-light").hide();
    $("app-mat-dialog-header").hide();

    var styles = "<style>";
    styles += `
    /* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.26, autoprefixer: v9.7.3) */
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
