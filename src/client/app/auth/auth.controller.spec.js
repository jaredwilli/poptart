/* jshint -W117, -W030 */
describe('AuthController', function() {
    var controller, scope;

    beforeEach(function() {
        bard.appModule('app.auth');
        bard.inject('$controller', '$log', '$rootScope');
        scope = $rootScope.$new();
    });

    beforeEach(function() {
        controller = $controller('AuthController', {
            $scope: scope
        });
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Auth controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Auth', function() {
                expect(controller.title).to.equal('Auth');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
