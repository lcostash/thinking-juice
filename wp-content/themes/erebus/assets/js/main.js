+function ($) {
    'use strict';

    var ThinkingJuice = function (element) {
        this.$el = $(element);
        this.init();
    };

    ThinkingJuice.prototype.init = function () {
        this.$el.find('.site-header__menu').off('click').on('click', function () {
            $(this).toggleClass('site-header__menu--change');
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