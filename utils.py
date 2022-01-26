import unicodedata

def normalize(s):
    result = ' '
    for c in s:
        c = unicodedata.normalize('NFD', c)[0].lower()
        if 96 < ord(c) < 123 or 48 <= ord(c) < 58:
            result += c
        elif result[-1] != ' ': result += ' '
    return result.strip().replace(' ', '-')

def prettify(s):
    return s.replace("'", '’').replace('...', '…').replace(' - ', ' – ')
