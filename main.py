@namespace
class SpriteKind:
    Fake_mouse_curosr = SpriteKind.create()
    object2 = SpriteKind.create()
    Button = SpriteKind.create()
def menu():
    global PLAY, Mouse
    scene.set_background_image(assets.image("""
        menu
    """))
    PLAY = sprites.create(assets.image("""
        play
    """), SpriteKind.Button)
    Mouse = sprites.create(assets.image("""
        mouse_coruors
    """), SpriteKind.player)
    controller.move_sprite(Mouse, 175, 175)

def on_on_overlap(sprite, otherSprite):
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.Button, on_on_overlap)

Mouse: Sprite = None
PLAY: Sprite = None
scene.set_background_image(assets.image("""
    splash screen
"""))

def on_after():
    scene.set_background_image(assets.image("""
        black
    """))
    game.splash("test")
    scene.set_background_image(assets.image("""
        Fake_Loading
    """))
    
    def on_after2():
        menu()
    timer.after(10000, on_after2)
    
timer.after(5000, on_after)
