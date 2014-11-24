;(function (){
  "use strict";


  describe("set Player turn", function (){
    describe("at beginning player 1 should move first", function(){
      it("player1 turn should be set to true", function(){
        assert.equal(player.player1.turn, true)
      });
    });
    describe("Player Name Log", function(){
      it("should be Jessica", function(){
        assert.equal(playerName(), "Jessica")
      });
    });
    describe("at beginning player 2 should not be able to move", function(){
      it("player2 turn should be set to false", function(){
        assert.equal(player.player2.turn, false)
      })
    });
  });

  describe("Show and Hide", function(){
    describe("Player1 class should be show", function(){
      it("Player1 show should be set to true", function(){
        assert.equal(player.player1.show, true)
      });
    });
    describe("Player 1 display none", function(){
      it("Player 1 display should be set to inline-block", function(){
        assert.equal(hidePlayer1(), "display none")
      });
    });
    describe("Player1 class should be hide", function(){
      it("Player1 show should be set to false", function(){
        gameIndicator();
        assert.equal(player.player1.show, false)
      });
    });
  });
})();
