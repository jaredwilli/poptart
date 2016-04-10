/* jshint -W117, -W030 */
describe('components routes', function() {
    describe('state', function() {
        var view = 'app/components/components.html';

        beforeEach(function() {
            module('app.components', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state components to url /components ', function() {
            expect($state.href('components', {})).to.equal('/components');
        });

        it('should map /components route to components View template', function() {
            expect($state.get('components').templateUrl).to.equal(view);
        });

        it('of components should work with $state.go', function() {
            $state.go('components');
            $rootScope.$apply();
            expect($state.is('components'));
        });
    });
});
