# -*- coding: utf-8 -*-
from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import math
out=Path('public/brand');out.mkdir(exist_ok=True)
def color(L,C,h):
 a=C*math.cos(math.radians(h));b=C*math.sin(math.radians(h))
 l=(L+.3963377774*a+.2158037573*b)**3;m=(L-.1055613458*a-.0638541728*b)**3;s=(L-.0894841775*a-1.291485548*b)**3
 channels=[4.0767416621*l-3.3077115913*m+.2309699292*s,-1.2684380046*l+2.6097574011*m-.3413193965*s,-.0041960863*l-.7034186147*m+1.707614701*s]
 return tuple(round(255*max(0,min(1,12.92*v if v<=.0031308 else 1.055*max(0,v)**(1/2.4)-.055))) for v in channels)
bg=color(.17,.012,165);panel=color(.21,.015,165);mint=color(.84,.09,155);text=color(.96,.009,100);muted=color(.73,.015,155);line=color(.33,.018,165)
serif='node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2'
sans='node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2'
im=Image.new('RGB',(1200,630),bg);d=ImageDraw.Draw(im)
for x in range(600,1200,23):
 for y in range(30,630,23): d.ellipse((x,y,x+1,y+1),fill=line)
d.rounded_rectangle((54,48,84,78),radius=4,outline=mint,width=2);d.line((64,48,64,78),fill=mint,width=1);d.line((74,48,74,78),fill=mint,width=1);d.line((54,58,84,58),fill=mint,width=1);d.line((54,68,84,68),fill=mint,width=1)
d.text((96,46),'gridcraft',font=ImageFont.truetype(sans,28),fill=text)
d.text((54,160),'Clarity,',font=ImageFont.truetype(serif,99),fill=text)
d.text((54,260),'cell by cell.',font=ImageFont.truetype(serif,99),fill=text)
d.text((58,394),'The open-source spreadsheet from ArtCraft.',font=ImageFont.truetype(sans,19),fill=muted)
d.rounded_rectangle((57,467,301,517),radius=6,fill=mint)
d.text((78,480),'Try GridCraft online',font=ImageFont.truetype(sans,17),fill=bg)
d.line((274,493,283,484),fill=bg,width=2);d.line((276,484,283,484,283,491),fill=bg,width=2)
d.text((57,566),'gridcraft.me  /  Independent guide',font=ImageFont.truetype(sans,13),fill=muted)
shot=Image.open('public/imgs/gridcraft/hero.webp').convert('RGB');shot=shot.resize((775,484),Image.Resampling.LANCZOS)
im.paste(shot,(625,122));d=ImageDraw.Draw(im);d.rounded_rectangle((624,121,1400,607),radius=8,outline=line,width=2)
im.save(out/'gridcraft-social.png',optimize=True)
# Transparent vector lockups; the site itself renders the name from envConfigs.
for name,fg,accent in [('gridcraft-wordmark', '#f3f2eb','#9bdcb1'),('gridcraft-wordmark-mono','#f3f2eb','#f3f2eb'),('gridcraft-wordmark-ink','#16241d','#315440')]:
 svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 64"><g fill="none" stroke="{accent}" stroke-width="2.5"><rect x="12" y="14" width="36" height="36" rx="4"/><path d="M12 26h36M12 38h36M24 14v36M36 14v36"/></g><rect x="25" y="27" width="10" height="10" fill="{accent}"/><text x="63" y="44" fill="{fg}" font-family="DM Sans,Arial,sans-serif" font-weight="600" font-size="37" letter-spacing="-1.4">gridcraft</text></svg>'''
 (out/(name+'.svg')).write_text(svg)
for name,v in [('Graphite',bg),('Panel',panel),('Jade',mint),('Pearl',text),('Muted',muted),('Line',line)]:print(name, '#%02x%02x%02x'%v)
def lum(c):
 c=[v/255 for v in c];c=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in c];return .2126*c[0]+.7152*c[1]+.0722*c[2]
for n,a,b in [('text/background',text,bg),('muted/background',muted,bg),('CTA text/jade',bg,mint)]:print(n,round((max(lum(a),lum(b))+.05)/(min(lum(a),lum(b))+.05),2))
