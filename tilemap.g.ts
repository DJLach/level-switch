// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "middleLevel":
            case "level1":return tiles.createTilemap(hex`1000100006070707070707070707070707070705080a010101010101010101010101010208010101010101010101010101010102080101010101010101010101010101020801010101010101010101010101010208010101010101010101010101010102080101010101010101010101010101020801010101010101010101010101010208010101010101010101010101010102080101010101010101010101010101020801010101010101010101010101010208010101010101010101010101010102080101010101010101010101010101020801010101010101010101010101010208010101010101010101010101010b0204090909090909090909090909090903`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.stairLarge], TileScale.Sixteen);
            case "topLevel":
            case "topFloor1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202010202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.stairLadder,sprites.builtin.oceanDepths5], TileScale.Sixteen);
            case "bottomLevel":
            case "bottomFloor1":return tiles.createTilemap(hex`1000100001010105010101010101010101010101010301050101010101010101010101010101010506010102010101010101010105050505010101010101010101010101010101010101010101010104010101010101010101010101010101010101010101010101010104010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101040101010101010101010101010101010101010101010101010401010101010101010101010101010101010101010101010101010101010101010101040101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.swamp.swampTile3,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tileDarkGrass2,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
