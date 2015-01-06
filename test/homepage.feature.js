describe('Homepage', function (){

  before(function () {
    casper.start('http://localhost:3000');
  });

  describe('There are no players', function () {

    it('shows an empty ladder', function () {
      casper.then(function () {
        expect("body").to.contain.text("There are no Players");
      });
    });

  });

  describe('Adding a player', function() {

    it('allows a player to be added to the ladder', function() {
      casper.then(function() {
        this.fill('form[id="addplayer"]',{
        name: 'Rich'
        }, true);
        this.click('button[value="Add Player"]');
        });
        expect("body").to.contain.text("Rich");
        "There are no Players".should.be.inDOM.and.not.be.visible;
      });
    });

  });
