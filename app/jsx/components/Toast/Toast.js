/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

export class Toast {

    constructor(options) {
        this.options = options;
        this.initDom();
        this.initEvents();
        this.hidden = true;
    }

    show() {
        this.hidden = false;
        this.main.show();
    }

    hide() {
        this.hidden = true;
        this.main.hide();
    }

    html(text) {
        this.main.html(text);
    }

    initDom() {

        var me = this;
        var main = $(''
            + '<div class="toast">'
            + '</div>'
        );

        main.addClass('toast-' + me.options.skin);

        $(document.body).append(main);

        me.main = main;

    }

    setSkin(skin) {
        this.main.addClass('toast-' + skin );
    }

    initEvents() {

    }
}
