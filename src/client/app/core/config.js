(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);
    toastrConfig.$inject = ['toastr'];

    /* @ngInject */
    function toastrConfig(toastr) {
        /**
         * http://codeseven.github.io/toastr/
         toastr.options = {
          "closeButton": true,
          "debug": true,
          "newestOnTop": true,
          "progressBar": true,
          "positionClass": "toast-bottom-right",
          "preventDuplicates": true,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": 0,
          "extendedTimeOut": 0,
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut",
          "tapToDismiss": false
         }
         */
        toastr.options.timeOut = 4000;
        toastr.options.hideDuration = 500;
        toastr.options.closeButton = true;
        toastr.options.preventDuplicates = true;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[Poptart Error] ',
        appTitle: 'Poptart'
    };

    core.value('config', config);
    core.config(configure);

    configure.$inject = [
        '$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'
    ];

    /* @ngInject */
    function configure(
        $logProvider, routerHelperProvider, exceptionHandlerProvider
    ) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({
            docTitle: config.appTitle + ': '
        });
    }
})();