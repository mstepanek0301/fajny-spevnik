from utils import normalize
import os

songtitle = input('Song title: ')
artist = input('Artist: ')

filename = normalize(artist) + '--' + normalize(songtitle)

os.mkdir(f'songs/{filename}')
with open(f'songs/{filename}/source.txt', 'w') as file:
    print(songtitle, '~', artist, file = file, end = '\n\n')
    print('Lyrics go here...', file = file)
