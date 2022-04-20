namespace SpriteKind {
    export const Fake_mouse_curosr = SpriteKind.create()
    export const object2 = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const titlescreen_object = SpriteKind.create()
    export const door = SpriteKind.create()
    export const loady = SpriteKind.create()
    export const button_button = SpriteKind.create()
    export const button_button_button = SpriteKind.create()
    export const police = SpriteKind.create()
    export const cutsenen_object = SpriteKind.create()
    export const Endless_door = SpriteKind.create()
    export const Background = SpriteKind.create()
    export const Endless_enimy = SpriteKind.create()
    export const twoP_Button = SpriteKind.create()
    export const twoplayerdoor = SpriteKind.create()
    export const result_actor = SpriteKind.create()
    export const Extras = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.twoplayerdoor, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    game.splash("Great Job. Keep on going. Other Guy don't open the door. ")
    MyDoor_Endless.setPosition(randint(20, 140), randint(20, 90))
    mySprite2.setPosition(24, 27)
})
function _2P_ () {
    sprites.destroyAllSpritesOfKind(SpriteKind.button_button_button)
    sprites.destroyAllSpritesOfKind(SpriteKind.button_button)
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    sprites.destroyAllSpritesOfKind(SpriteKind.twoP_Button)
    scene.setBackgroundImage(assets.image`BLACKER`)
    game.showLongText("CCA Games: Welcome to the 2 player mode in this mode the second player will  play as Other guy and will try to kill First Player and use the controls IJKL. First player will go and get out of the house see how many points you can get. You will get 3:00mins ", DialogLayout.Full)
    scene.setBackgroundImage(assets.image`house_foor`)
    info.startCountdown(180)
    mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    animation.runImageAnimation(
    mySprite,
    assets.animation`you_animate`,
    200,
    true
    )
    controller.moveSprite(mySprite)
    mySprite2 = sprites.create(assets.image`Other Guy`, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2)
    animation.runImageAnimation(
    mySprite2,
    assets.animation`other guy animate`,
    200,
    true
    )
    mySprite2.setPosition(13, 26)
    MyDoor_Endless = sprites.create(assets.image`door_door_door_ThisGametootomuchtime`, SpriteKind.twoplayerdoor)
    info.setScore(0)
    info.player2.setScore(0)
    MyDoor_Endless.setPosition(randint(20, 140), randint(20, 90))
}
function Extas_House_Test () {
    scene.setBackgroundImage(assets.image`BLACKER`)
    game.showLongText("You: oohh my head why did I drink that much alcohol, My head hurts so much,   where am I. ", DialogLayout.Bottom)
    game.showLongText("Other Guy: You're at my party still, you passed out.", DialogLayout.Bottom)
    game.showLongText("You: Oh well sorry to keep you waiting I'll leave n..", DialogLayout.Bottom)
    game.showLongText("Other Guy: Wait Wait Wait, I want to show you something.", DialogLayout.Bottom)
    game.showLongText("You: What?", DialogLayout.Bottom)
    game.showLongText("Other Guy: MY KNIEF BECAUSE I WILL KILL YOU!!!", DialogLayout.Bottom)
    game.showLongText("You: HECK NO (you pull out your phone to dial 911).", DialogLayout.Bottom)
    game.showLongText("Police: 911 what's your emergency.", DialogLayout.Bottom)
    game.showLongText("You: THIS GUY IS TRYING TO KILL ME COME QUICK.", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
    mySprite.setPosition(320, 150)
    scene.cameraFollowSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`you_animate`,
    200,
    true
    )
    controller.moveSprite(mySprite)
    mySprite2 = sprites.create(assets.image`Other Guy`, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite2,
    assets.animation`other guy animate`,
    200,
    true
    )
    mySprite2.setPosition(0, 0)
    mySprite2.follow(mySprite, 92)
}
sprites.onOverlap(SpriteKind.titlescreen_object, SpriteKind.titlescreen_object, function (sprite, otherSprite) {
    if (title_object.overlapsWith(title_object_2) && controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.titlescreen_object)
        music.stopAllSounds()
        scene.setBackgroundImage(assets.image`Fake_Loading`)
        load = sprites.create(assets.image`loader`, SpriteKind.loady)
        scaling.scaleToPixels(load, 32, ScaleDirection.Horizontally, ScaleAnchor.Middle)
        scaling.scaleToPixels(load, 32, ScaleDirection.Vertically, ScaleAnchor.Middle)
        load.setPosition(131, 91)
        animation.runImageAnimation(
        load,
        assets.animation`load_animate`,
        200,
        true
        )
        light.showAnimation(light.rainbowAnimation, 5000)
        timer.after(randint(500, 10000), function () {
            Menu()
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Endless_door, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    game.splash("Great Job. Keep on going.")
    MyDoor_Endless.setPosition(randint(20, 140), randint(20, 90))
    CCA_Games_Door.setPosition(randint(20, 140), randint(20, 90))
    Mydoor_Purple.setPosition(randint(20, 140), randint(20, 90))
    mySprite2.setPosition(0, 0)
})
function _1p () {
    timer.after(500, function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.button_button)
        sprites.destroyAllSpritesOfKind(SpriteKind.twoP_Button)
        Endless_mode = sprites.create(assets.image`Endless_mode`, SpriteKind.button_button_button)
        Story_Mode_OK = sprites.create(assets.image`Story`, SpriteKind.button_button_button)
        Endless_mode.setPosition(80, 80)
    })
}
info.onCountdownEnd(function () {
    scene.setBackgroundImage(assets.image`Results`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.twoplayerdoor)
    winnerloser1 = sprites.create(assets.image`black_box`, SpriteKind.result_actor)
    winnerloser2 = sprites.create(assets.image`black_actoerere`, SpriteKind.result_actor)
})
function storyfunc () {
    scene.setBackgroundImage(assets.image`BLACKER`)
    game.showLongText("You: oohh my head why did I drink that much alcohol, My head hurts so much,   where am I. ", DialogLayout.Bottom)
    game.showLongText("Other Guy: You're at my party still, you passed out.", DialogLayout.Bottom)
    game.showLongText("You: Oh well sorry to keep you waiting I'll leave n..", DialogLayout.Bottom)
    game.showLongText("Other Guy: Wait Wait Wait, I want to show you something.", DialogLayout.Bottom)
    game.showLongText("You: What?", DialogLayout.Bottom)
    game.showLongText("Other Guy: MY KNIEF BECAUSE I WILL KILL YOU!!!", DialogLayout.Bottom)
    game.showLongText("You: HECK NO (you pull out your phone to dial 911).", DialogLayout.Bottom)
    game.showLongText("Police: 911 what's your emergency.", DialogLayout.Bottom)
    game.showLongText("You: THIS GUY IS TRYING TO KILL ME COME QUICK.", DialogLayout.Bottom)
    mySprite5 = sprites.create(assets.image`troubleshoot_Floor`, SpriteKind.Background)
    mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    animation.runImageAnimation(
    mySprite,
    assets.animation`you_animate`,
    200,
    true
    )
    controller.moveSprite(mySprite)
    mySprite2 = sprites.create(assets.image`Other Guy`, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite2,
    assets.animation`other guy animate`,
    200,
    true
    )
    mySprite2.setPosition(0, 0)
    mySprite2.follow(mySprite, 92)
    dooor = sprites.create(assets.image`dooor_yellow`, SpriteKind.door)
    dooor.setPosition(randint(20, 140), randint(20, 90))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.twoP_Button, function (sprite, otherSprite) {
    if (Mouse.overlapsWith(_2P) && controller.A.isPressed()) {
        _2P_()
    }
})
sprites.onOverlap(SpriteKind.police, SpriteKind.cutsenen_object, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.police)
    timer.after(500, function () {
        game.splash("Great Job")
        game.over(true)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    mySprite2.destroy()
    dooor.destroy()
    mySprite.destroy()
    mySprite5.destroy()
    scene.setBackgroundImage(assets.image`outside`)
    mySprite3 = sprites.create(assets.image`police`, SpriteKind.police)
    mySprite3.setPosition(126, 85)
    mySprite4 = sprites.create(assets.image`door_object`, SpriteKind.cutsenen_object)
    mySprite4.setPosition(21, 85)
    timer.after(500, function () {
        game.showLongText("You: Officer he's in the house.", DialogLayout.Bottom)
        game.showLongText("Officer: Ok we'll get him", DialogLayout.Bottom)
        mySprite3.follow(mySprite4)
    })
})
function Endless_mod () {
    sprites.destroyAllSpritesOfKind(SpriteKind.button_button_button)
    sprites.destroyAllSpritesOfKind(SpriteKind.button_button)
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    scene.setBackgroundImage(assets.image`BLACKER`)
    game.showLongText("You: oohh my head why did I drink that much alcohol, My head hurts so much,   where am I. ", DialogLayout.Bottom)
    game.showLongText("Other Guy: You're at my party still, you passed out.", DialogLayout.Bottom)
    game.showLongText("You: Oh well sorry to keep you waiting I'll leave n..", DialogLayout.Bottom)
    game.showLongText("Other Guy: Wait Wait Wait, I want to show you something.", DialogLayout.Bottom)
    game.showLongText("You: What?", DialogLayout.Bottom)
    game.showLongText("Other Guy: MY KNIEF BECAUSE I WILL KILL YOU!!!", DialogLayout.Bottom)
    game.showLongText("You: O HECK NO I'M OUTTA HERE.", DialogLayout.Bottom)
    game.showLongText("Other Guy: Well you won't leave anytime soon because you entered my ENDLESS House of FUN. he he he. ", DialogLayout.Bottom)
    game.showLongText("You: Welp I'm dead.", DialogLayout.Bottom)
    game.showLongText("CCA Games: Your Objective is to See how many doors you can get through before you die. You'll have 3 lives", DialogLayout.Full)
    scene.setBackgroundImage(assets.image`house_foor`)
    mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    animation.runImageAnimation(
    mySprite,
    assets.animation`you_animate`,
    200,
    true
    )
    controller.moveSprite(mySprite)
    mySprite2 = sprites.create(assets.image`Other Guy`, SpriteKind.Endless_enimy)
    animation.runImageAnimation(
    mySprite2,
    assets.animation`other guy animate`,
    200,
    true
    )
    mySprite2.setPosition(0, 0)
    mySprite2.follow(mySprite, 99)
    MyDoor_Endless = sprites.create(assets.image`door_door_door_ThisGametootomuchtime`, SpriteKind.Endless_door)
    Mydoor_Purple = sprites.create(assets.image`dooor_purple`, SpriteKind.Endless_door)
    CCA_Games_Door = sprites.create(assets.image`CCA_fav_color`, SpriteKind.Endless_door)
    MyDoor_Endless.setPosition(72, 87)
    CCA_Games_Door.setPosition(32, 23)
    Mydoor_Purple.setPosition(138, 81)
    info.setScore(0)
    info.setLife(3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("Great Job Second Player")
    info.player2.changeScoreBy(1)
    MyDoor_Endless.setPosition(randint(20, 140), randint(20, 90))
    mySprite2.setPosition(13, 26)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.result_actor, SpriteKind.result_actor, function (sprite, otherSprite) {
    timer.after(5000, function () {
        if (winnerloser1.overlapsWith(winnerloser2) && info.score() > info.player2.score()) {
            scene.setBackgroundImage(assets.image`1st_player_wins`)
            effects.confetti.startScreenEffect(2000)
            music.powerUp.play()
            timer.after(3000, function () {
                game.reset()
            })
        }
    })
    if (winnerloser1.overlapsWith(winnerloser2) && info.score() == info.player2.score()) {
        timer.after(3000, function () {
            scene.setBackgroundImage(assets.image`sshdadgakdgajlsdashkldasjdaj`)
            music.wawawawaa.play()
            timer.after(3000, function () {
                game.reset()
            })
        })
    }
    if (winnerloser1.overlapsWith(winnerloser2) && info.score() < info.player2.score()) {
        scene.setBackgroundImage(assets.image`Second_Player_win`)
        effects.confetti.startScreenEffect(2000)
        music.powerUp.play()
        timer.after(3000, function () {
            game.reset()
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button_button_button, function (sprite, otherSprite) {
    if (Mouse.overlapsWith(Story_Mode_OK) && controller.A.isPressed()) {
        storyfunc()
    }
    if (Mouse.overlapsWith(Endless_mode) && controller.A.isPressed()) {
        Endless_mod()
    } else {
        scene.setBackgroundImage(assets.image`menu_menu_menu_menu_LioP_edition`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (Mouse.overlapsWith(PLAY) && controller.A.isPressed()) {
        playfunc()
    } else {
        scene.setBackgroundImage(assets.image`menu_menu_menu_menu_LioP_edition`)
    }
    if (Mouse.overlapsWith(ABOUT) && controller.A.isPressed()) {
        aboutfunc()
    } else {
        scene.setBackgroundImage(assets.image`menu_menu_menu_menu_LioP_edition`)
    }
})
function Menu () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Background)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
    load.destroy()
    tiles.setCurrentTilemap(tilemap`level3`)
    blockMenu.setControlsEnabled(true)
    scene.setBackgroundImage(assets.image`menu_menu_menu_menu_LioP_edition`)
    blockMenu.showMenu([
    "Play",
    "About",
    "How To Play",
    "Extras"
    ], MenuStyle.List, MenuLocation.BottomHalf)
    blockMenu.setColors(1, 15)
}
function playfunc () {
    ABOUT.destroy()
    PLAY.destroy()
    timer.after(500, function () {
        _1P = sprites.create(assets.image`single player`, SpriteKind.button_button)
        _2P = sprites.create(assets.image`multiplayer`, SpriteKind.twoP_Button)
        _2P.setPosition(80, 80)
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Endless_enimy, function (sprite, otherSprite) {
    game.showLongText("Other Guy: I've got you now. (stab)", DialogLayout.Bottom)
    game.showLongText("You: OW!", DialogLayout.Bottom)
    info.changeLifeBy(-1)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`You_Bloody`,
    200,
    true
    )
    MyDoor_Endless.setPosition(randint(20, 140), randint(20, 90))
    CCA_Games_Door.setPosition(randint(20, 140), randint(20, 90))
    Mydoor_Purple.setPosition(randint(20, 140), randint(20, 90))
    mySprite2.setPosition(0, 0)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    blockMenu.setControlsEnabled(false)
    blockMenu.closeMenu()
    if (option == "Extras" && controller.A.isPressed()) {
        blockMenu.showMenu([
        "A House",
        "Artwork",
        "My Thoughts On This Project"
        ], MenuStyle.List, MenuLocation.BottomHalf)
    } else if (option == "Play" && controller.A.isPressed()) {
        blockMenu.setControlsEnabled(true)
        blockMenu.showMenu([
        "Story Mode",
        "Endless Mode",
        "2P Versus"
        ], MenuStyle.List, MenuLocation.BottomHalf)
    } else if (option == "How To Play" && controller.A.isPressed()) {
        game.showLongText("How To Play: Your Objective is to head towards the the Yellow door without hitting Other Guy.", DialogLayout.Center)
        Menu()
    } else if (option == "About" && controller.A.isPressed()) {
        game.showLongText("This is a Remake of my first Arcade Makecode game With a bunch of extra features. I hope you enjoy my project. ", DialogLayout.Center)
        Menu()
    } else if (option == "Story Mode" && controller.A.isPressed()) {
        storyfunc()
    } else if (option == "Endless Mode" && controller.A.isPressed()) {
        Endless_mod()
    } else if (option == "2P Versus" && controller.A.isPressed()) {
        _2P_()
    } else if (option == "A House" && controller.A.isPressed()) {
        Extas_House_Test()
    } else if (option == "My Thoughts On This Project" && controller.A.isPressed()) {
        game.showLongText("", DialogLayout.Bottom)
    } else if (option == "Artwork" && controller.A.isPressed()) {
    	
    }
})
function aboutfunc () {
    game.showLongText("Help: Your Objective is to head to the door to win. About: This is a Remake of my first ever made game, RUN or After The Party, this is to combine all the version of of that game I made I hope You like it", DialogLayout.Full)
    ABOUT.destroy()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.showLongText("You: Aha The Key Is Upstairs.", DialogLayout.Bottom)
    game.showLongText("CCA Games: Sorry 2nd Floor is not done.", DialogLayout.Bottom)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("Other Guy: I've got you now. (stab)", DialogLayout.Bottom)
    game.splash("You Died")
    color.FadeToBlack.startScreenEffect()
    color.pauseUntilFadeDone()
    color.clearFadeEffect()
    Menu()
})
let _1P: Sprite = null
let ABOUT: Sprite = null
let PLAY: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let _2P: Sprite = null
let Mouse: Sprite = null
let dooor: Sprite = null
let mySprite5: Sprite = null
let winnerloser2: Sprite = null
let winnerloser1: Sprite = null
let Story_Mode_OK: Sprite = null
let Endless_mode: Sprite = null
let Mydoor_Purple: Sprite = null
let CCA_Games_Door: Sprite = null
let load: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let MyDoor_Endless: Sprite = null
let title_object_2: Sprite = null
let title_object: Sprite = null
scene.setBackgroundImage(assets.image`blacker`)
game.setDialogFrame(img`
    . . f f f f f f f f f f f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . 
    . . f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . 
    `)
game.setDialogCursor(assets.image`A_Button`)
game.splash("Welcome")
game.splash("You Are Using Version 1.9")
game.showLongText("Please Report any bugs or Suggestions to calebalexis459@gmail.com", DialogLayout.Bottom)
timer.after(500, function () {
    scene.setBackgroundImage(assets.image`splash screen`)
    music.baDing.play()
    timer.after(5000, function () {
        scene.setBackgroundImage(assets.image`titlescreen_after_the_party`)
        title_object = sprites.create(assets.image`oject_title`, SpriteKind.titlescreen_object)
        title_object_2 = sprites.create(assets.image`kunpo`, SpriteKind.titlescreen_object)
        for (let index = 0; index < 2; index++) {
            music.playMelody("A F E F D G E F ", 120)
        }
    })
})
