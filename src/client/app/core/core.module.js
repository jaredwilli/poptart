(function() {
    'use strict';

    angular
        .module('app.core', [
            'firebase',
            'ngAnimate',
            'ngSanitize',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'ui.router',
            'ngplus',
            'ngFileUpload'
        ]);
})();
