/* jshint -W117, -W030 */
describe('ComponentsController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.components');
        bard.inject('$controller', '$log', '$rootScope');
    });

    beforeEach(function() {
        controller = $controller('ComponentsController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Components controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Components', function() {
                expect(controller.title).to.equal('Components');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
