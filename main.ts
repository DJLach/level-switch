namespace SpriteKind {
    export const NPC = SpriteKind.create()
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
        tiles.placeOnRandomTile(mySprite2, sprites.swamp.swampTile3)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.x += -10
        level = 2
    }
})
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
game.onUpdate(function () {
    if (level != 0) {
        sprites.destroy(mySprite2)
    }
})
