from utils import prettify

scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H']
full_scale = {
    'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 9, 'A': 9, 'A#': 10, 'B': 10, 'H': 11
}

def src_to_html(src):
    src += '\n\n'
    open_block, open_line, open_ital = False, False, False
    mem_blocks = {}
    open_at, block_name, block_content = False, None, ''
    open_tab, tab_content = False, []
    open_chord, chord_content = False, ''
    result = ''
    plaintext = ''
    backslash = False
    for i, char in enumerate(src):
        if open_tab:
            if char == '\n':
                if src[i + 1] == '\n':
                    open_tab = False
                    block_content += tab_to_html(tab_content)
                else: tab_content.append('')
            else: tab_content[-1] += char

        elif char == '\\':
            backslash = True

        elif char == '\n':
            if open_line:
                block_content += '</div>'
                plaintext += ' '
                open_line = False
            elif open_at:
                open_at = False
            elif open_block:
                block_content = prettify(block_content)
                block_content += '</div>'
                open_block = False
                if block_name:
                    if not block_name in mem_blocks:
                        mem_blocks[block_name] = block_content
                    block_content = mem_blocks[block_name]
                result += block_content
                block_name, block_content = None, ''

        elif open_chord:
                if char == ']':
                    open_chord = False
                    for root, i in sorted(
                        full_scale.items(), key = lambda i: len(i[0]),
                        reverse = True
                    ):
                        chord_content = chord_content.replace(root, f'<span class="chord-root-{i}">{scale[i]}</span>')
                    block_content += f'<span class="chord">{chord_content}</span>'
                else: chord_content += char

        elif open_at:
            block_name += char

        else:
            if not open_block:
                open_block = True
                block_content = '<div class="block">'
                if char == '@':
                    open_at = True
                    block_name = ''
                    continue
                elif src[i + 1] == '|':
                    open_tab = True
                    tab_content = [char]
                    continue

            if not open_line:
                open_line = True
                block_content += '<div class="line">'

            if backslash:
                block_content += char
                backslash = False

            elif char == '[':
                open_chord = True
                chord_content = ''

            elif char == '_':
                if open_ital:
                    block_content += '</i>'
                    open_ital = False
                else:
                    block_content += '<i>'
                    open_ital = True

            elif char == '"':
                if src[i - 1].isspace(): block_content += '„'
                else: block_content += '“'

            elif char == "'": block_content += '’'

            elif char == '-':
                if src[i - 1].isspace() and src[i + 1].isspace():
                    block_content += '–'
                else: block_content += '-'

            else:
                block_content += char
                plaintext += char
    return result, plaintext

def tab_to_html(src):
    tab = [line.replace('|', '-|-') + '-' for line in src]
    blanks = '- '
    width, height = min([len(line) for line in tab]), len(tab)
    lines = [''] * height
    result = ''
    open_column = True
    for column in range(width):
        blank_column = True
        for row in range(height):
            char = tab[height - row - 1][column]
            if char not in blanks:
                blank_column = False
                open_column = True
            if char == '-': lines[row] += ' '
            elif char == '|':
                lines[row] = '|'
                blank_column = True
            else: lines[row] += char
        if blank_column and open_column:
            result += '<div class="tab-note">'
            for line in lines:
                if line == '|': result += '<div class="tab-bar"></div>'
                else: result += f'<div><span>{line.strip()}</span></div>'
            result += '</div>'
            lines = [''] * height
            open_column = False
    return f'<div class="tab">{result}</div>'
