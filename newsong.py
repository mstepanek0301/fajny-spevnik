from utils import normalize
import os

songtitle = input('Song title: ')
artist = input('Artist: ')

path = f'{normalize(artist)}/{normalize(songtitle)}'

os.makedirs(f'songs/{path}')
with open(f'songs/{path}/source.txt', 'w') as file:
    print(songtitle, '~', artist, file = file, end = '\n\n')
    print('Lyrics go here...', file = file)
