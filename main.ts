namespace SpriteKind {
    export const PLAYER2 = SpriteKind.create()
    export const PLAYER3 = SpriteKind.create()
    export const PLAYER4 = SpriteKind.create()
}
namespace StatusBarKind {
    export const health2 = StatusBarKind.create()
    export const health3 = StatusBarKind.create()
    export const health4 = StatusBarKind.create()
}
controller.player4.onEvent(ControllerEvent.Connected, function () {
    statusbar5 = statusbars.create(20, 4, StatusBarKind.health4)
    mySprite4 = sprites.create(assets.image`heroFrontAttack3`, SpriteKind.PLAYER4)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, mySprite4)
    controller.player4.moveSprite(mySprite4)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.BottomRight)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.darkGroundSouthWest0)
    statusbar5.attachToSprite(mySprite4)
    statusbar5.value = 100
})
scene.onOverlapTile(SpriteKind.PLAYER4, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile0`)
})
statusbars.onZero(StatusBarKind.health2, function (status) {
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundSouthWest0)
    statusbar3.value = 100
    splitScreen.cameraShake(splitScreen.Camera.Camera2, 4, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
statusbars.onZero(StatusBarKind.health4, function (status) {
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.darkGroundSouthWest0)
    statusbar5.value = 100
    splitScreen.cameraShake(splitScreen.Camera.Camera4, 4, 500)
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    statusbar4 = statusbars.create(20, 4, StatusBarKind.health3)
    mySprite3 = sprites.create(assets.image`heroFrontAttack2`, SpriteKind.PLAYER3)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mySprite3)
    controller.player3.moveSprite(mySprite3)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.darkGroundSouthWest0)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.VerticalRightThird)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftThird)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalMiddleThird)
    statusbar4.attachToSprite(mySprite3)
    statusbar4.value = 100
})
scene.onOverlapTile(SpriteKind.PLAYER2, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundSouthWest0)
    statusbar.value = 100
    if (screen_v == 1) {
        splitScreen.cameraShake(splitScreen.Camera.Camera1, 4, 500)
    } else {
        scene.cameraShake(4, 500)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.PLAYER3, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.PLAYER3, sprites.dungeon.hazardLava1, function (sprite, location) {
    statusbar4.value += -1
})
statusbars.onZero(StatusBarKind.health3, function (status) {
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.darkGroundSouthWest0)
    statusbar4.value = 100
    splitScreen.cameraShake(splitScreen.Camera.Camera3, 4, 500)
})
scene.onOverlapTile(SpriteKind.PLAYER2, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.PLAYER4, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.PLAYER2, sprites.dungeon.hazardLava1, function (sprite, location) {
    statusbar3.value += -1
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    screen_v = 1
    statusbar3 = statusbars.create(20, 4, StatusBarKind.health2)
    statusbar2 = 0
    scene.centerCameraAt(0, 0)
    mySprite2 = sprites.create(assets.image`heroFrontAttack0`, SpriteKind.PLAYER2)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
    controller.player2.moveSprite(mySprite2)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundSouthWest0)
    statusbar3.attachToSprite(mySprite2)
    statusbar3.value = 100
})
scene.onOverlapTile(SpriteKind.PLAYER4, sprites.dungeon.hazardLava1, function (sprite, location) {
    statusbar5.value += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.PLAYER3, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
})
let statusbar2 = 0
let screen_v = 0
let mySprite3: Sprite = null
let statusbar4: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let mySprite2: Sprite = null
let mySprite4: Sprite = null
let statusbar5: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(assets.image`heroFrontAttack1`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundSouthWest0)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 100
mySprite.setFlag(SpriteFlag.GhostThroughTiles, true)
