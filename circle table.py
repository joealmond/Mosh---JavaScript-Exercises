# no need for Inkscape
from math import *
from random import *
import turtle
import time 


draw=turtle.Turtle()
turtle.setup (width=1260, height=660, startx=1280, starty=700)

draw.hideturtle()
draw.pencolor('black')
draw.fillcolor('black')
draw.speed(10)
draw.penup()

bX = 100
bY = 100
bLength = 20
bWidth = 20

def rect(bLength,bWidth,bX,bY,tX,tY,angle):
    draw.goto(bX+tX+bWidth/2,bY+tY+bLength/2)

    draw.penup()
    draw.right(90-angle)
    draw.forward(bWidth/2)
    draw.right(90)
    draw.forward(bLength/2)
    draw.right(90)

    draw.pendown()
    for i in range(2):
        draw.forward(bWidth)
        draw.right(90)
        draw.forward(bLength)
        draw.right(90)

    draw.penup()
    draw.forward(bWidth/2)
    draw.right(90)
    draw.forward(bLength/2)
    draw.right(90)

    draw.right(angle)


diameter = 180
seat= 12

# circle((0, 0), diameter/2)
draw.goto(bX+10,bY-diameter/2+10)
draw.pendown()
draw.circle(diameter/2)
draw.penup()

ang = 360/seat
a = 360/seat
for rad in range(seat):
	x = (diameter/2+20)*cos(ang*pi/180)
	y = (diameter/2+20)*sin(ang*pi/180)
	rect(bLength,bWidth,bX,bY,x,y,ang)
	ang += a




turtle.exitonclick()
# turtle.done()
# time.sleep(3)
# turtle.bye()



# diameter = 180
# seat= 12

# circle((0, 0), diameter/2)
# ang = 360/seat
# a = 360/seat
# for rad in range(seat):
# 	x = (diameter/2+10)*cos(ang*pi/180)
# 	y = (diameter/2+10)*sin(ang*pi/180)
# 	rect((20, 20), (0, 0), fill='#668000', transform='translate(%g, %g) rotate(%g, 0, 0)' % (x, y, ang))
# 	ang += a
