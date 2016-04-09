(function() {
    'use strict';

    angular
        .module('app.core')
        .filter('removeunderscore', removeunderscore)
        .filter('capitalize', capitalize);


    /* @ngInject */
    function removeunderscore() {
        return function(string) {
            if (string) {
                return (!!string) ? string.replace(/_/g, ' ') : '';
            }
        };
    }

    /* @ngInject */
    function capitalize() {
        var regex = /([^\W_]+[^\s-]*) */g;

        function format(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }

        return function(string) {
            if (string) {
                return (!!string) ? string.replace(regex, format) : '';
            }
        };
    }
})();
