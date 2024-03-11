const fs = require('fs')

global.namabot = "Bot Store"
global.namaowner = "Zeeoneofc"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['628577776666','628577775555']
global.pairingNumber = ""
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» /owner
» /addsewa
» /delsewa
» /ceksewa
» /listsewa
» /pay
» /setpay
» /list
» /addlist
» /updatelist
» /renamelist
» /dellist
» /jeda
» /tambah
» /kurang
» /kali
» /bagi
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}