from math import *
from random import *
rect = 0 
circle = 0
# no need the above


diameter = 180
seat= 12

circle((0, 0), diameter/2)
ang = 360/seat
a = 360/seat
for rad in range(seat):
	x = (diameter/2+10)*cos(ang*pi/180)
	y = (diameter/2+10)*sin(ang*pi/180)
	rect((20, 20), (0, 0), fill='#668000', transform='translate(%g, %g) rotate(%g, 0, 0)' % (x, y, ang))
	ang += a
