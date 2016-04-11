/* jshint -W117, -W030 */
describe('auth routes', function() {
    describe('state', function() {
        var view = 'app/auth/auth.html';

        beforeEach(function() {
            module('app.auth', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state auth to url /auth ', function() {
            expect($state.href('auth', {})).to.equal('/auth');
        });

        it('should map /auth route to auth View template', function() {
            expect($state.get('auth').templateUrl).to.equal(view);
        });

        it('of auth should work with $state.go', function() {
            $state.go('auth');
            $rootScope.$apply();
            expect($state.is('auth'));
        });
    });
});
