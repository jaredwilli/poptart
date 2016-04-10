(function() {
    'use strict';

    angular
        .module('app.upload')
        .controller('UploadController', UploadController);

    UploadController.$inject = [
        '$q', '$scope', 'Upload', 'logger'
    ];

    /* @ngInject */
    function UploadController(
        $q, $scope, Upload, logger
    ) {
        var vm = this;
        vm.title = 'Upload';
        vm.uploader = {
            title: 'File Upload'
        };

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
            var promises = [];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
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

            }, null, function(evt) {
                console.log('Processing...', evt);
                vm.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    }
})();
