describe('Homepage', function (){

  before(function () {
    casper.start('http://localhost:3000/');
  });

  describe('There are no players', function () {

    it('shows an empty ladder', function () {
      casper.then(function () {
        expect("body").to.contain.text("There are no players");
      });
    });

  });

  describe('There are players', function() {

    it('shows a player', function() {
      casper.then(function() {
        this.fill('form[id="addplayer"]',{
        name: 'Ben'
        }, true);
        this.click('button[value="Add Player"]');
      });
        casper.thenOpen('http://localhost:3000/', function(){
          expect("body").to.contain.text("Ben");
          "noplayers".should.be.inDOM.and.not.be.visible;
        });
    });

    it('shows the player\'s rank', function() {
      casper.then(function() {
        this.fill('form[id="addplayer"]',{
        name: 'Nick'
        }, true);
        this.click('button[value="Add Player"]');
        casper.then(function(){
          expect("body").to.contain.text("1");
          expect("body").to.contain.text("2");
        });
      });
    });
  });
});
