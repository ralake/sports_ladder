describe('Homepage', function (){

  before(function () {
    casper.start('http://localhost:3000');
  });

  describe('There are no players', function () {
    it('shows an empty ladder', function () {
      casper.then(function () {
        expect("body").to.contain.text("There are no Players")
      });
    });
  });
});
