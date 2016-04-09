(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [
        '$q', 'Upload', 'dataservice', 'logger'
    ];

    /* @ngInject */
    function DashboardController(
        $q, Upload, dataservice, logger
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
        vm.maxFileSize = '10MB';
        vm.allowedFileTypes = '*';
        vm.url = '/upload';

        vm.uploadFiles = uploadFiles;
        vm.upload = upload;

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
                vm.people = data;
                return vm.people;
            });
        }

        function upload(files, errorFiles) {
            vm.files = files;
            vm.errorFiles = errorFiles;

            if (files && files.length) {

                var dataObj = {
                    total: files.length,
                    files: files,
                    policy: vm.policies.filter(function(i) {
                        return i.id === vm.selectedPolicy;
                    })[0].value
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

                vm.matches = resp.data;
                console.log(vm.matches);
            }, null, function() {
                console.log('Processing...');
            });
        }
    }

})();
