describe("Class", function() {

    var assert = chai.assert;

    beforeEach(function() {

    });

    it('should create sub-class and inherits super-class fields', function() {
        var RootClass = Class.extend({ init : function() {
            this.rootField = 'root';
        }});
        assert.isNotNull(RootClass);

        var Child1Class = RootClass.extend();

        assert.isNotNull( Child1Class );

        var rootObj = new RootClass();
        assert.equal( rootObj.rootField, 'root' );

        var child1Obj = new Child1Class();
        assert.equal( child1Obj.rootField, 'root' );
    });

//  it("should be able to play a Song", function() {
//    player.play(song);
//    expect(player.currentlyPlayingSong).toEqual(song);
//
//    //demonstrates use of custom matcher
//    expect(player).toBePlaying(song);
//  });
//
//  describe("when song has been paused", function() {
//    beforeEach(function() {
//      player.play(song);
//      player.pause();
//    });
//
//    it("should indicate that the song is currently paused", function() {
//      expect(player.isPlaying).toBeFalsy();
//
//      // demonstrates use of 'not' with a custom matcher
//      expect(player).not.toBePlaying(song);
//    });
//
//    it("should be possible to resume", function() {
//      player.resume();
//      expect(player.isPlaying).toBeTruthy();
//      expect(player.currentlyPlayingSong).toEqual(song);
//    });
//  });
//
//  // demonstrates use of spies to intercept and test method calls
//  it("tells the current song if the user has made it a favorite", function() {
//    spyOn(song, 'persistFavoriteStatus');
//
//    player.play(song);
//    player.makeFavorite();
//
//    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//  });
//
//  //demonstrates use of expected exceptions
//  describe("#resume", function() {
//    it("should throw an exception if song is already playing", function() {
//      player.play(song);
//
//      expect(function() {
//        player.resume();
//      }).toThrow("song is already playing");
//    });
//  });
});