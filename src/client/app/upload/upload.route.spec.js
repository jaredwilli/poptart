/* jshint -W117, -W030 */
describe('upload routes', function() {
    describe('state', function() {
        var view = 'app/upload/upload.html';

        beforeEach(function() {
            module('app.upload', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state upload to url /upload ', function() {
            expect($state.href('upload', {})).to.equal('/upload');
        });

        it('should map /upload route to upload View template', function() {
            expect($state.get('upload').templateUrl).to.equal(view);
        });

        it('of upload should work with $state.go', function() {
            $state.go('upload');
            $rootScope.$apply();
            expect($state.is('upload'));
        });
    });
});
