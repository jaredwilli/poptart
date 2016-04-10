(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /**
     * Example docstring
     * @param  {Object} $delegate
     * @param  {Object} exceptionHandler
     * @param  {Object} logger
     * @return {Function} the decorated $exceptionHandler service
     */
    DashboardController.$inject = [
        '$q', '$scope', 'Upload', 'dataservice', 'logger'
    ];

    /* @ngInject */
    function DashboardController(
        $q, $scope, Upload, dataservice, logger
    ) {

        var vm = this;
        vm.title = 'Dashboard';
        vm.uploader = {
            title: 'File Upload'
        };

        vm.news = {
            title: 'Placeholder Title',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };

        vm.messageCount = 0;
        vm.people = [];

        vm.files = [];
        vm.errorFiles = [];
        vm.allowMultiple = true;
        vm.allowDirectory = true;
        vm.keepFiles = false;
        vm.maxFileSize = '20MB';
        vm.allowedFileTypes = 'image/*';
        vm.url = '/upload';

        vm.uploadFiles = uploadFiles;
        vm.upload = upload;

        $scope.$watch(function() {
            return vm.files;
        }, function(files) {
            vm.upload(files);
        });

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function(data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function(data) {
                vm.people = data.results;
                return vm.people;
            });
        }

        function upload(files, errorFiles) {
            vm.files = files;
            vm.errorFiles = errorFiles;

            if (files && files.length) {
                var dataObj = {
                    total: files.length,
                    files: files
                };

                vm.uploadFiles(dataObj);
            }
        }

        function uploadFiles(dataObj) {
            Upload.upload({
                url: vm.url,
                data: dataObj
            })
            .then(function(resp) {
                console.log('## RESPONSE');
                console.log(resp);

            }, null, function(process) {
                console.log('Processing...', process);
            });
        }
    }
})();
