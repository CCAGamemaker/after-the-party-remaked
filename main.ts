namespace SpriteKind {
    export const Fake_mouse_curosr = SpriteKind.create()
    export const object2 = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Text = SpriteKind.create()
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
    export const Child = SpriteKind.create()
    export const key = SpriteKind.create()
    export const Potral_Route = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (got_the_key == true) {
        game.splash("You Made It")
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.twoplayerdoor, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(MyDoor_Endless)) {
        info.changeScoreBy(1)
        game.splash("Great Job 1st Player. ")
        MyDoor_Endless.setPosition(randint(20, 140), randint(20, 90))
        mySprite2.setPosition(24, 27)
    }
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
    mySprite2.setStayInScreen(true)
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
function musicer () {
    story.setPagePauseLength(1000, 1000)
    story.printText("Credits", 80, 10)
    story.printText("CCA Games", 80, 30)
    story.printText("Game Maker - Caleb Alexis", 80, 50)
    story.printText("Game Tester - Amelio Panyko", 80, 70)
    story.printText("You For Playing The Game", 80, 90)
    story.printText("© CCA Games 2021-2022", 80, 110)
    game.reset()
}
function Extas_House_Test () {
    scene.setBackgroundImage(assets.image`BLACKER`)
    game.showLongText("You: (trying to talk under a taped mouth. ", DialogLayout.Bottom)
    game.showLongText("Other Guy: This is pay back for leaving so now I will kill you", DialogLayout.Bottom)
    game.showLongText("Objective: Head up stairs", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level2`)
    for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
        mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
        tiles.placeOnTile(mySprite, value)
        tiles.setTileAt(value, assets.tile`myTile8`)
        scene.cameraFollowSprite(mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`you_animate`,
        200,
        true
        )
        controller.moveSprite(mySprite)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(assets.image`Other Guy`, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, value2)
        tiles.setTileAt(value2, assets.tile`myTile3`)
        animation.runImageAnimation(
        mySprite2,
        assets.animation`other guy animate`,
        200,
        true
        )
        other_guy_ai_patch = true
    }
    Other_Guy_House_AI()
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    if (mySprite.overlapsWith(mySprite7)) {
        game.showLongText("You: I gotta go.", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.key)
        sprites.destroyAllSpritesOfKind(SpriteKind.Child)
        tiles.setCurrentTilemap(tilemap`level6`)
        for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
            mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
            mySprite7 = sprites.create(assets.image`key`, SpriteKind.key)
            mySprite7.follow(mySprite, 300)
            tiles.placeOnTile(mySprite, value)
            tiles.placeOnTile(mySprite7, value)
            tiles.setTileAt(value, assets.tile`myTile8`)
            scene.cameraFollowSprite(mySprite)
            animation.runImageAnimation(
            mySprite,
            assets.animation`you_animate`,
            200,
            true
            )
            controller.moveSprite(mySprite)
        }
        for (let value2 of tiles.getTilesByType(assets.tile`myTile28`)) {
            mySprite2 = sprites.create(assets.image`Other Guy`, SpriteKind.Enemy)
            tiles.placeOnTile(mySprite2, value2)
            tiles.setTileAt(value2, assets.tile`myTile8`)
            animation.runImageAnimation(
            mySprite2,
            assets.animation`other guy animate`,
            200,
            true
            )
            mySprite2.follow(mySprite, 75)
        }
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Child, function (sprite, otherSprite) {
    game.showLongText("Son: My Dad said I have to kill you so... bang bang.", DialogLayout.Bottom)
    game.splash("You Died")
    color.FadeToBlack.startScreenEffect()
    color.pauseUntilFadeDone()
    color.clearFadeEffect()
    Menu()
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    for (let value4 of tiles.getTilesByType(assets.tile`myTile37`)) {
        mySprite7 = sprites.create(assets.image`key`, SpriteKind.key)
        tiles.placeOnTile(mySprite7, value4)
        tiles.setTileAt(value4, assets.tile`myTile8`)
        mySprite7.follow(mySprite, 300)
        got_the_key = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.twoP_Button, function (sprite, otherSprite) {
    let _2P: Sprite = null
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
function Other_Guy_House_AI () {
    for (let value5 of tiles.getTilesByType(assets.tile`myTile38`)) {
        PR1 = sprites.create(img`
            f 
            `, SpriteKind.Potral_Route)
        tiles.placeOnTile(PR1, value5)
        tiles.setTileAt(value5, assets.tile`myTile8`)
        PR1.setFlag(SpriteFlag.Invisible, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile39`)) {
    	
    }
}
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
    mySprite.setPosition(80, 60)
})
info.onLifeZero(function () {
    music.wawawawaa.play()
    game.splash("You Died")
    game.splash("Your Score is:", info.score())
    Menu()
})
sprites.onOverlap(SpriteKind.result_actor, SpriteKind.result_actor, function (sprite, otherSprite) {
    timer.after(5000, function () {
        if (winnerloser1.overlapsWith(winnerloser2) && info.score() > info.player2.score()) {
            scene.setBackgroundImage(assets.image`1st_player_wins`)
            effects.confetti.startScreenEffect(2000)
            music.powerUp.play()
            timer.after(3000, function () {
                Menu()
            })
        }
        if (winnerloser1.overlapsWith(winnerloser2) && info.score() == info.player2.score()) {
            timer.after(3000, function () {
                scene.setBackgroundImage(assets.image`sshdadgakdgajlsdashkldasjdaj`)
                music.wawawawaa.play()
                timer.after(3000, function () {
                    Menu()
                })
            })
        }
        if (winnerloser1.overlapsWith(winnerloser2) && info.score() < info.player2.score()) {
            scene.setBackgroundImage(assets.image`Second_Player_win`)
            effects.confetti.startScreenEffect(2000)
            music.powerUp.play()
            timer.after(3000, function () {
                Menu()
            })
        }
    })
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
function Menu () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Background)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
    sprites.destroyAllSpritesOfKind(SpriteKind.Child)
    sprites.destroyAllSpritesOfKind(SpriteKind.key)
    load.destroy()
    tiles.setCurrentTilemap(tilemap`level3`)
    blockMenu.setControlsEnabled(true)
    scene.setBackgroundImage(assets.image`menu_menu_menu_menu_LioP_edition`)
    blockMenu.showMenu([
    "Play",
    "About",
    "How To Play",
    "Extras",
    "Credits"
    ], MenuStyle.List, MenuLocation.BottomHalf)
    blockMenu.setColors(1, 15)
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
        blockMenu.setControlsEnabled(true)
        blockMenu.showMenu([
        "A House",
        "Game Box",
        "Thoughts On This Project"
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
    } else if (option == "Thoughts On This Project" && controller.A.isPressed()) {
        timer.after(500, function () {
            game.showLongText("My Thoughts on this project, When I decide that I wanted to do this is because I had no clue on what game to next so I just did this game instead to keep on updating it. Another reason why I did this is because well I found out how to make a menu and decided that because my game has so many modes why not combined them all but me being stupid did not just use the code for the Remastered but instead I just remade it, it didn't take long because it wasn't that hard to use overlaps but I almost quit on this because makecode arcade deleted all of it yeah that's right ALL OF IT so the game was delayed but I honest enjoy this project as now I know how to do a lot more stuff from when I stated so I hope to do this in 6th grade.", DialogLayout.Full)
            Menu()
        })
    } else if (option == "Game Box" && controller.A.isPressed()) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeee1eeeee111ee11111ee111ee1111eeeeeee11111e1ee1e111eee111eeee1eee1111ee11111e1eee1eeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeee1e1eeee1eeeeee1eeee1eeee1eee1eeeeeeee1eee1ee1e1eeeee1ee1ee1e1ee1eee1eee1eeee1e1eeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeee1eee1eee11eeeee1eeee1eeee1eee1eeeeeeee1eee1ee1e1eeeee1ee1e1eee1e1eee1eee1eeeee1eeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeee1eeeee1ee1eeeeee1eeee11eee1111eeeeeeeee1eee1111e11eeee111ee1eee1e1111eeee1eeeee1eeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeee1111111ee1eeeeee1eeee1eeee1eee1eeeeeeee1eee1ee1e1eeeee1eeee11111e1eee1eee1eeeee1eeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeee1eeeee1ee1eeeeee1eeee1eeee1eee1eeeeeeee1eee1ee1e1eeeee1eeee1eee1e1eee1eee1eeeee1eeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeee1eeeee1ee1eeeeee1eeee111ee1eee1eeeeeeee1eee1ee1e111eee1eeee1eee1e1eee1eee1eeeee1eeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee555eee5555e5eeeee5eee5ee5eeeee5ee5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee5ee5ee5eeee5eeeee5eee5eee5eee5eee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee5ee5ee5eeee5eeeee5eee5eeee5e5eeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee5ee5ee55eee5eeeee5eee5eeeee5eeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee5ee5ee5eeee5eeeee5eee5eeee5e5eeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee5ee5ee5eeee5eeeee5eee5eee5eee5eee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee555eee5555e5555eee555eee5eeeee5ee5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4114eeeeeeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4114eeeeeeeedddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4114eeeeeeeeddfdddfddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4114eeeeeeeedddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeeedddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeddfddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeedddfffdddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeedddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee111eeeeeeeeeeeeeeeeebeeeeeeeeeee88888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeebeeeeeeee88888888888ddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeebeeeeeeee88888888888ddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeebeeeeeeee88888888888ddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeebeeeeeeeeddd88888eeeeeeee99999eeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeebeeeeeeeeddd88888eeeeeee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeebeeeeeeeeddd88888eeeeee999999999eeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeebeeeeeeeeddd88888eeeeee999999999eeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee77777eeeeeeeeeeeeeeeebeeeeeeeeddd88888eeeeee222222999eeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeddd88888eeeeeee2222229eeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeddd44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeddd44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeddd44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeddd44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee7ddd7eeeeeeeeeeeeeeeebeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeeeee77777eeeeeeeeeeeeeeeebeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111fff1fff11f111111fffff11f11f111f1fff1fffff1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111f111f111f1f11111f11111f1f1ff1ff1f111f11111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111ffff11f111f111f1f11111f11111f1f1f1f1f1f111f11111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111f1111f1f111f111fff11111f11111f1f1f111f1ff11f11111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111f1ff1f1f111f111f1f11111f11111fff1f111f1f111fffff1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111f1f11f1f111f111f1f11111f11111f1f1f111f1f1111111f111111111111111111111111111fffffffffff11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111f1ff1f1f111f111f1f11111f11111f1f1f111f1f1111111f111111111111111111111111111f111111111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111f1111f1f111f111f1f11111f11ff1f1f1f111f1f1111111f111111111111111111111111111f1111fff11f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111ffff11f111f111f1f11111f111f1f1f1f111f1f1111111f111111111111111111111111111f1ffffff11f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111fff1fff1f1f11111fffff1f1f1f111f1fff1fffff111111111111111111111111111f1ffff1111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f111ff1111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f111ff1111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f111ff1111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f1111ff111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f1111ff111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f1111ff111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f1111ff111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111f11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffff11ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            `)
        timer.after(10000, function () {
            Menu()
        })
    } else if (option == "Credits" && controller.A.isPressed()) {
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        musicer()
    }
})
function aboutfunc () {
    let ABOUT: Sprite = null
    game.showLongText("Help: Your Objective is to head to the door to win. About: This is a Remake of my first ever made game, RUN or After The Party, this is to combine all the version of of that game I made I hope You like it", DialogLayout.Full)
    ABOUT.destroy()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.showLongText("You: Aha The Key Is Upstairs.", DialogLayout.Bottom)
    game.showLongText("Other Guy: Hey Son Someone is upstairs use your gun to kill him.", DialogLayout.Bottom)
    game.showLongText("You: This Guy Has a son!", DialogLayout.Bottom)
    game.showLongText("Son: I can Hear him.", DialogLayout.Bottom)
    game.showLongText("Objective: Get The Key Upstairs", DialogLayout.Bottom)
    mySprite.destroy()
    mySprite2.destroy()
    tiles.setCurrentTilemap(tilemap`level4`)
    for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
        mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
        tiles.placeOnTile(mySprite, value)
        tiles.setTileAt(value, assets.tile`myTile8`)
        scene.cameraFollowSprite(mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`you_animate`,
        200,
        true
        )
        controller.moveSprite(mySprite)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile33`)) {
        mySprite6 = sprites.create(assets.image`dangerous_child`, SpriteKind.Child)
        tiles.placeOnTile(mySprite6, value3)
        tiles.setTileAt(value3, assets.tile`myTile8`)
        animation.runImageAnimation(
        mySprite6,
        [img`
            . . . . . . d d d . . . . . . . 
            . . . . . d f d f d . . . . . . 
            . . . . . d d d d d . . . . . . 
            . . . . . f d d d d . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . 9 9 9 d d d 9 9 9 . . . . 
            . . . 9 9 9 9 d 9 9 9 9 . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d f f f . 
            . . . d d 9 9 9 9 9 d d f . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c . c c . . . . . . 
            . . . . . c c . c c . . . . . . 
            `,img`
            . . . . . . d d d . . . . . . . 
            . . . . . d f d f d . . . . . . 
            . . . . . d d d d d . . . . . . 
            . . . . . f d d d d . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . 9 9 9 d d d 9 9 9 . . . . 
            . . . 9 9 9 9 d 9 9 9 9 . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d f f f . 
            . . . d d 9 9 9 9 9 d d f . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c . c c . . . . . . 
            . . . . . c c . . . . . . . . . 
            `,img`
            . . . . . . d d d . . . . . . . 
            . . . . . d f d f d . . . . . . 
            . . . . . d d d d d . . . . . . 
            . . . . . f d d d d . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . 9 9 9 d d d 9 9 9 . . . . 
            . . . 9 9 9 9 d 9 9 9 9 . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d f f f . 
            . . . d d 9 9 9 9 9 d d f . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c . c c . . . . . . 
            . . . . . c c . c c . . . . . . 
            `,img`
            . . . . . . d d d . . . . . . . 
            . . . . . d f d f d . . . . . . 
            . . . . . d d d d d . . . . . . 
            . . . . . f d d d d . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . 9 9 9 d d d 9 9 9 . . . . 
            . . . 9 9 9 9 d 9 9 9 9 . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d . . . . 
            . . . d d 9 9 9 9 9 d d f f f . 
            . . . d d 9 9 9 9 9 d d f . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c . c c . . . . . . 
            . . . . . . . . c c . . . . . . 
            `],
        200,
        true
        )
        mySprite6.follow(mySprite, 80)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("Other Guy: I've got you now. (stab)", DialogLayout.Bottom)
    game.splash("You Died")
    color.FadeToBlack.startScreenEffect()
    color.pauseUntilFadeDone()
    color.clearFadeEffect()
    Menu()
})
let mySprite6: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let PR1: Sprite = null
let Mouse: Sprite = null
let dooor: Sprite = null
let mySprite5: Sprite = null
let winnerloser2: Sprite = null
let winnerloser1: Sprite = null
let Story_Mode_OK: Sprite = null
let Endless_mode: Sprite = null
let mySprite7: Sprite = null
let Mydoor_Purple: Sprite = null
let CCA_Games_Door: Sprite = null
let load: Sprite = null
let other_guy_ai_patch = false
let mySprite2: Sprite = null
let MyDoor_Endless: Sprite = null
let mySprite: Sprite = null
let got_the_key = false
let title_object_2: Sprite = null
let title_object: Sprite = null
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
game.onUpdateInterval(500, function () {
    if (other_guy_ai_patch == true) {
        if (spriteutils.distanceBetween(mySprite, mySprite2) <= 60) {
            mySprite2.follow(mySprite, 10)
        } else if (spriteutils.distanceBetween(mySprite, mySprite2) > 60) {
            mySprite2.follow(mySprite, 0)
        }
    }
})
