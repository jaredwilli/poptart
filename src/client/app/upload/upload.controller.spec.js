/* jshint -W117, -W030 */
describe('UploadController', function() {
    var controller, scope;

    beforeEach(function() {
        bard.appModule('app.upload');
        bard.inject('$controller', '$log', '$rootScope');
        scope = $rootScope.$new();
    });

    beforeEach(function() {
        controller = $controller('UploadController', {
            $scope: scope
        });
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Upload controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Upload', function() {
                expect(controller.title).to.equal('Upload');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
