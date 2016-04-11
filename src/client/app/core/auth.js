(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('Auth', Auth);

    Auth.$inject = ['$firebaseAuth', 'FIREBASE_URL'];

    /* @ngInject */
    function Auth($firebaseAuth, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
        return $firebaseAuth(ref);
    }
})();