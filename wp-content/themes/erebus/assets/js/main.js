+function ($) {
    'use strict';

    var ThinkingJuice = function (element) {
        this.$el = $(element);
        this.init();
    };

    ThinkingJuice.prototype.init = function () {
        this.$el.find('.site-header__menu').off('click').on('click', function () {
            const body = $(this).closest('body');
            $(body).find('.site-header__menu').addClass('site-header__menu--change');
            $(body).addClass('modal-form');
            $(body).find('.site-menu').addClass('site-menu--display');
        });
        this.$el.find('.site-menu__close').off('click').on('click', function () {
            const body = $(this).closest('body');
            $(body).find('.site-header__menu').removeClass('site-header__menu--change');
            $(body).removeClass('modal-form');
            $(body).find('.site-menu').removeClass('site-menu--display');
        });
    };

    $.fn.thinkingjuice = function () {
        return $(this).each(function () {
            new ThinkingJuice(this);
        });
    };
    $.fn.thinkingjuice.Constructor = ThinkingJuice;

    $(document).ready(function () {
        $('body').thinkingjuice();
    });
}(window.jQuery);