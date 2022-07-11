# Fajný spevník

Spevník so sústredkovými pesničkami. Otvoriť si ho môžete na [bit.ly/fajny-spevnik](https://bit.ly/fajny-spevnik).

## Features

**Funguje aj offline** - keď raz stránku otvoríte, automaticky sa všetky pesničky uložia.

**Na mobil si ho môžete nainštalovať ako aplikáciu** - keď otvoríte stránku, malo by sa tam zobraziť že *add to home screen*.

**Transpozícia** - v pesničkách sú vpravo dole šípky, ktorými môžete prepínať stupnicu, aby tie akordy pekne vychádzali.

## Pridávanie pesničiek

Ak chcete do spevníka pridať nejakú pesničku, ale neviete akordy, môžete spraviť issue (a niekto sa na to možno niekedy pozrie). Ak akordy viete, môžete ju pridať aj sami:

1. Stiahnite si tento repozitár na svoj počítač a spustite súbor `newsong.py`. Vypýta si to od vás názov pesničky a kapely.
2. V priečinku `songs` pribudne súbor `[autor]/[názov]/source.txt`. Tam chcete napísať obsah pesničky. To, ako sa to má písať, je popísané v sekcii *Písanie pesničiek*.
3. Keď to máte, spustite súbor `build.py`. Ten automaticky updatene všetky potrebné súbory, takže vo vašej verzii spevníka by sa už mala nová pesnička ukazovať.
4. Ak sa chcete presvedčiť, či ste spravili všetko dobre, môžete si spevník spustiť u seba.
	1. Otvorte si terminál v priečinku **nad** priečinkom so spevníkom (teda napr. ak mám spevník uložený v `Documents/Code/fajny-spevnik`, tak chcem `Documents/Code`).
	2. Spustite príkaz `python3 -m http.server 8000`. V celej tejto časti môžete `8000` nahradiť ľubovoľným iným číslom, ktoré sa vám páči.
	3. V prehliadači si **v inkognite** otvorte stránku `localhost:8000/fajny-spevnik`. Tam by už mal byť váš updatenutý spevník. (Je dôležité používať inkognito, lebo spevník si automaticky ukladá veci, aby potom fungoval aj offline, takže inak by sa vám namiesto novej verzie mohla ukázať tá stará uložená.)
5. Ak je všetko v poriadku, môžete spraviť pull request.

## Písanie pesničiek

Tuto je popísané, ako má vyzerať pre každú pesničku súbor `source.txt`.

Na prvom riadku má byť `[názov pesničky] ~ [meno kapely]`, napríklad `Moje telo ~ Miro Jaroš`. Ak ste pesničku pridali cez `newsong.py`, toto by tam malo byť už automaticky.

Zvyšok súboru bude text pesničky. Dva nové riadky oddeľujú strofy. Strofy nechcete mať príliš dlhé, aby sa dobre zmestili na obrazovku (teda ak je v pesničke nejaký dlhý blok, radšej ho rozdeľte na menšie).

### Akordy

Napíšte ich tesne pred slabiku, kde sa akord začína hrať, a obaľte do hranatých zátvoriek, napríklad takto:
```
Kto sa v tých [B]slovách vyznať [F]má
Prečo je [C]komplikova[Dm]ná
```
Používajte stupnicu CDEFGA**H**C (a A# = B), aby fungovala transpozícia.

### Refrén

Ak má pesnička nejaké opakujúce sa časti, ako napríklad refrén (ale aj hocičo iné), nemusíte ich písať/kopírovať vždy znova. Stačí, ak prvýkrát do riadku pred nejaký blok napíšete `@[názov bloku]`, napríklad `@refren`. Potom, keď chcete tento blok zopakovať, napíšete už len `@[názov bloku]` na samostatný riadok, a doplní sa vám tam celý blok.

Ak si nie ste istí, ako to chce fungovať, pozrite sa do zdrojového kódu nejakej pesničky a spravte to podľa toho, refrény sú skoro všade :)

### Taby

Môžete používať aj taby. Píšu sa tak, ako napríklad aj na Ultimate Guitar.

### Iné veci

**Italic:** Keď niečo obalíte do podčiarkovníkov, bude to v italicu, `napríklad _takto_.`

**Automaticky krajšie znaky:** Obyčajné úvodzovky `""` sa automaticky nahradia `„“` a apostrofy `'` sa nahradia `’`. Pomlčky medzi medzerami ` - ` sa nahradia dlhými ` – ` a tri bodky `...` znakom troch bodiek `…`.

**Escape znaky:** Keď potrebujete napísať do textu nejaký znak, ktorý chce robiť v kóde niečo iné (napr. `@`, `_`, a podobne), môžete pred neho dať backslash, teda napríklad `\_` vám napíše `_` a `\\` napíše `\`.

**HTML:** Do textu môžete normálne písať aj HTML, akurát musíte escapovať všetky znaky, ktoré by sa vám pokazili (teda hlavne úvodzovky). Takže napríklad môžete spraviť `<span style=\"font-weight: 700\">niečo boldom</span>`.
