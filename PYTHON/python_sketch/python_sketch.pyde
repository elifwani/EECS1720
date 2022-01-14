def setup():
    size(640, 480)
    background(0)

def draw():
    square(mouseX/2, mouseY/2, mouseY/2)
    fill(255)

    if  mousePressed:
        fill(random(255),random(255),random(255))
