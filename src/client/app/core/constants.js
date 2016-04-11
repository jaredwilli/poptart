/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('FIREBASE_URL', 'https://webernote.firebaseio.com/')
        .constant('loginRedirectPath', '/login');
})();
