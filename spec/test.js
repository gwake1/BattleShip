(function (){
  "use strict";
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
  });
});

describe("Show and Hide Player1", function(){
  describe("Player1 class should be show", function(){
    it("Player1 show should be set to true", function(){
      assert.equal(player.player1.show, true)
    });
  });
  describe("Player 1 display none", function(){
    it("Calling hidePlayer1() should set display to none", function(){
      assert.equal(hidePlayer1(), "display 1 none")
    });
  });
});

describe("Show and Hide Player2", function(){
  describe("Player2 class should be show", function(){
    it("Calling hidePlayer2() should set display to none", function(){
      assert.equal(hidePlayer2(), "display 2 none")
    });
  });
});
