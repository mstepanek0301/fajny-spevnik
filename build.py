from parse import src_to_html
from pathlib import Path
from random import randrange
from utils import normalize, prettify

template_song, template_home = '', ''
with open('web/templates/song.html') as file:
    template_song = file.read()
with open('web/templates/home.html') as file:
    template_home = file.read()

songs = []
assets = [
    '/fajny-spevnik/',
    'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200..900;1,200..900',
    'https://fonts.googleapis.com/css2?family=Work+Sans:wght@200..900&text=%E2%86%90',
    'https://fonts.gstatic.com/s/worksans/v17/QGYqz_wNahGAdqQ43Rh_eZDkv_1i4_D2E4A.woff2',
    'https://fonts.gstatic.com/s/worksans/v17/QGYqz_wNahGAdqQ43Rh_eZDrv_1i4_D2.woff2',
    'https://fonts.gstatic.com/s/worksans/v17/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2',
    'https://fonts.gstatic.com/s/worksans/v17/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2',
    'https://fonts.gstatic.com/l/font?kit=QGYsz_wNahGAdqQ43RhPfqrul_h64hpwuw&skey=a19f1b3d756da88c&v=v17'
]

for path in Path('.').glob('**/source.txt'):
    assets.append(f'/fajny-spevnik/{path.parent}/')
    with open(path, encoding = 'utf-8') as src, open(
        f'{path.parent}/index.html', 'w', encoding = 'utf-8'
    ) as out:
        src_text = src.read()
        i = src_text.index('\n')
        head, body = src_text[:i], src_text[i + 1:]
        title, artist = [prettify(item.strip()) for item in head.split('~')]

        html, plaintext = src_to_html(body)
        out.write(template_song.replace(
            '%TITLE%', title
        ).replace(
            '%ARTIST%', artist
        ).replace(
            '%CONTENT%', html
        ))

        songs.append(('&'.join(
            [normalize(field) for field in (title, artist, plaintext)]
        ), title, artist))

song_list = [
    f'<a href="songs/{normalize(artist)}/{normalize(title)}/" class="block song-li" data-plaintext="{plaintext}"><h1>{title}</h1><div class="subheading">{artist}</div></a>'
    for plaintext, title, artist in sorted(songs)
]

with open('index.html', 'w', encoding = 'utf-8') as file:
    file.write(template_home.replace('%CONTENT%', ''.join(song_list)))

for path in Path('.').glob('web/*.*'):
    assets.append(f'/fajny-spevnik/{path}')

with open('web/templates/service-worker.js') as src, open(
    'service-worker.js', 'w'
) as out:
    out.write(src.read().replace(
        '%VERSION%', str(randrange(1000000))
    ).replace(
        '/*ASSETS*/', ','.join([f'"{asset}"' for asset in assets])
    ))
