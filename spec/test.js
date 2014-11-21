(function (){
  "use strict";
});

describe("Player Name Log", function(){
  it("should be David", function(){
    assert.equal(playerName(), "David")
  });
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
