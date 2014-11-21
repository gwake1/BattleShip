(function (){
  "use strict";
});

describe("Show and Hide", function(){
  describe("Player1 class should be show", function(){
    it("Player1 show should be set to true", function(){
      assert.equal(player.player1.show, true)
    });
  });
  describe("Player1 class should be hide", function(){
    it("Player1 show should be set to false", function(){
      gameIndicator();
      assert.equal(player.player1.show, false)
    });
  });
});

describe("Player Name Log", function(){
  it("should be Jessica", function(){
    assert.equal(playerName(), "Jessica")
  });

  describe("set Player turn", function (){
    describe("at beginning player 1 should move first", function(){
      it("player1 turn should be set to true", function(){
        assert.equal(player.player1.turn, true)
      });
    });
    describe("at beginning player 2 should not be able to move", function(){
      it("player2 turn should be set to false", function(){
        assert.equal(player.player2.turn, false)
      })
    });
    describe("Call game indicator", function(){
      it("game indicator should return false", function (){
        assert.equal(gameIndicator(), false)
      });
    });
    describe("Player2 's turn", function(){
      it("Should return Jackie", function(){
        assert.equal(playerName(), "Jackie")
      });
    });
    describe("Player1 's turn", function(){
      it("Should return Jessica", function(){
        assert.equal(gameIndicator(), true);
        assert.equal(player.player1.turn, true)
      });
    });
  });
});
