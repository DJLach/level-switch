namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const key = SpriteKind.create()
    export const HUD = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    270,
    50,
    100,
    0,
    2.5
    )
})
controller.combos.attachCombo("U+L", function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    225,
    50,
    100,
    0,
    2.5
    )
})
controller.combos.attachCombo("D+R", function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    45,
    50,
    100,
    0,
    2.5
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == mySprite2) {
        timer.throttle("action", 1000, function () {
            mySprite2.sayText("Hello", 1000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.x += -10
        level = 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedWest, function (sprite, location) {
    if (number_of_keys > 0) {
        tiles.setTileAt(location, sprites.castle.tileDarkGrass2)
        tiles.setTileAt(tiles.getTileLocation(0, 3), sprites.castle.tileDarkGrass3)
        tiles.setTileAt(tiles.getTileLocation(1, 3), sprites.castle.tileDarkGrass3)
        tiles.setTileAt(tiles.getTileLocation(2, 3), sprites.castle.tileDarkGrass3)
        tiles.setTileAt(tiles.getTileLocation(3, 3), sprites.castle.tileDarkGrass3)
        tiles.setTileAt(tiles.getTileLocation(3, 2), sprites.castle.tileDarkGrass3)
        tiles.setTileAt(tiles.getTileLocation(3, 1), sprites.castle.tileDarkGrass3)
        tiles.setTileAt(tiles.getTileLocation(3, 0), sprites.castle.tileDarkGrass3)
        tiles.setWallAt(tiles.getTileLocation(0, 3), false)
        tiles.setWallAt(tiles.getTileLocation(1, 3), false)
        tiles.setWallAt(tiles.getTileLocation(2, 3), false)
        tiles.setWallAt(tiles.getTileLocation(3, 3), false)
        tiles.setWallAt(tiles.getTileLocation(3, 2), false)
        tiles.setWallAt(tiles.getTileLocation(3, 1), false)
        tiles.setWallAt(tiles.getTileLocation(3, 0), false)
        number_of_keys += -1
        mySprite.sayText("I used a key.", 2000, false)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    180,
    50,
    100,
    0,
    2.5
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
controller.combos.attachCombo("D+L", function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    135,
    50,
    100,
    0,
    2.5
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.x += 10
        level = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    0,
    50,
    100,
    0,
    2.5
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    90,
    50,
    100,
    0,
    2.5
    )
})
controller.combos.attachCombo("U+R", function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    315,
    50,
    100,
    0,
    2.5
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    number_of_keys += 1
    mySprite.sayText("I got the key!")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.x += 10
        level = 0
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.NPC)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 9))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.x += -10
        level = 2
    }
})
let number_of_keys = 0
let mySprite2: Sprite = null
let level = 0
let mySprite: Sprite = null
let maps: tiles.TileMapData[] = []
multilights.toggleLighting(false)
// Arrays start at 0, not 1.
maps = [tilemap`bottomLevel`, tilemap`middleLevel`, tilemap`topLevel`]
mySprite = sprites.create(assets.image`bat`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`bottomLevel`)
level = 0
multilights.addLightSource(
mySprite,
5,
3,
1
)
mySprite.z = 1
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.NPC)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 2))
let key_0 = sprites.create(assets.image`key`, SpriteKind.key)
tiles.placeOnTile(key_0, tiles.getTileLocation(8, 1))
number_of_keys = 0
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 9))
let AirTankSprite = sprites.create(assets.image`AirTank5_5`, SpriteKind.HUD)
game.onUpdate(function () {
    if (level != 0) {
        sprites.destroy(mySprite2)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, mySprite2) < 50) {
        mySprite2.follow(mySprite, 10)
        mySprite2.sayText("What's up, my man?")
    } else {
        mySprite2.follow(null)
        mySprite2.sayText("bruh")
    }
})
