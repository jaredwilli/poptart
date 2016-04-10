(function() {
    'use strict';

    angular
        .module('app.components')
        .controller('ComponentsController', ComponentsController);

    ComponentsController.$inject = ['logger'];

    /* @ngInject */
    function ComponentsController(logger) {

        var vm = this;
        vm.title = 'Components';

        vm.widget = {};
        vm.widget.title = 'Widget';

        activate();

        function activate() {
            logger.info('Activated Components View');
        }
    }
})();
