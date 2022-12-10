
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━ 𝙏𝙎𝘿-𝘽𝙊𝙏 ━━━

 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 
𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}kali 1 2
 ${no++} ➳ ${prefix}bagi 1 2
 ${no++} ➳ ${prefix}kurang 1 2
 ${no++} ➳ ${prefix}tambah 1 2
 ${no++} ➳ ${prefix}dellist key
 ${no++} ➳ ${prefix}addlist key@response
 ${no++} ➳ ${prefix}update key@response
 ${no++} ➳ ${prefix}done <reply orderan>
 ${no++} ➳ ${prefix}proses <reply orderan>
 ${no++} ➳ ${prefix}list <only group>
 ${no++} ➳ ${prefix}shop <only group>
 
𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}fitnah
 ${no++} ➳ ${prefix}delete
 ${no++} ➳ ${prefix}revoke
 ${no++} ➳ ${prefix}tagall
 ${no++} ➳ ${prefix}hidetag
 ${no++} ➳ ${prefix}setdesc
 ${no++} ➳ ${prefix}linkgrup
 ${no++} ➳ ${prefix}infogroup
 ${no++} ➳ ${prefix}setppgrup
 ${no++} ➳ ${prefix}setnamegrup
 ${no++} ➳ ${prefix}group open
 ${no++} ➳ ${prefix}group close
 ${no++} ➳ ${prefix}antilink on
 ${no++} ➳ ${prefix}antilink off
 ${no++} ➳ ${prefix}welcome on
 ${no++} ➳ ${prefix}welcome off
 ${no++} ➳ ${prefix}tiktokauto on
 ${no++} ➳ ${prefix}tiktokauto off
 ${no++} ➳ ${prefix}kick @tag
 ${no++} ➳ ${prefix}demote @tag
 ${no++} ➳ ${prefix}promote @tag

 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}menu
 ${no++} ➳ ${prefix}rules
 ${no++} ➳ ${prefix}owner
 ${no++} ➳ ${prefix}infobot
 ${no++} ➳ ${prefix}donate
 ${no++} ➳ ${prefix}jadibot
 ${no++} ➳ ${prefix}listjadibot
 ${no++} ➳ ${prefix}sewabot
 ${no++} ➳ ${prefix}groupbot
 ${no++} ➳ ${prefix}ownerinfo
 ${no++} ➳ ${prefix}infoowner

 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}verify
 ${no++} ➳ ${prefix}report
 ${no++} ➳ ${prefix}request
 ${no++} ➳ ${prefix}transfer
 ${no++} ➳ ${prefix}menfess
 ${no++} ➳ ${prefix}buatroom
 ${no++} ➳ ${prefix}secretchat
 ${no++} ➳ ${prefix}cekprem
 ${no++} ➳ ${prefix}daftarprem
 ${no++} ➳ ${prefix}changename

 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}error
 ${no++} ➳ ${prefix}clearerr
 ${no++} ➳ ${prefix}siaran
 ${no++} ➳ ${prefix}session
 ${no++} ➳ ${prefix}resetdb
 ${no++} ➳ ${prefix}runtime
 ${no++} ➳ ${prefix}setexif
 ${no++} ➳ ${prefix}setwm
 ${no++} ➳ ${prefix}setfooter
 ${no++} ➳ ${prefix}setppbot
 ${no++} ➳ ${prefix}addprem
 ${no++} ➳ ${prefix}delprem
 ${no++} ➳ ${prefix}bc
 ${no++} ➳ ${prefix}bctext
 ${no++} ➳ ${prefix}bcvideo
 ${no++} ➳ ${prefix}bcaudio
 ${no++} ➳ ${prefix}bcimage
 ${no++} ➳ ${prefix}broadcast
 
 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}sadcat
 ${no++} ➳ ${prefix}translate
 ${no++} ➳ ${prefix}stalkff
 ${no++} ➳ ${prefix}stalknpm
 ${no++} ➳ ${prefix}stalkgithub
 ${no++} ➳ ${prefix}balikhuruf
 ${no++} ➳ ${prefix}balikangka
 ${no++} ➳ ${prefix}besarkecil
 ${no++} ➳ ${prefix}bilangangka

 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
 ${no++} ➳ ${prefix}tiktok
 ${no++} ➳ ${prefix}ytmp3
 ${no++} ➳ ${prefix}ytmp4
 ${no++} ➳ ${prefix}pinterest
 ${no++} ➳ ${prefix}playmp3
 ${no++} ➳ ${prefix}playmp4
 ${no++} ➳ ${prefix}gitclone
 ${no++} ➳ ${prefix}mediafire
 ${no++} ➳ ${prefix}wikimedia
 ${no++} ➳ ${prefix}soundcloud
 ${no++} ➳ ${prefix}infogempa

 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}tts
 ${no++} ➳ ${prefix}ttp
 ${no++} ➳ ${prefix}ttp2
 ${no++} ➳ ${prefix}attp
 ${no++} ➳ ${prefix}attp2
 ${no++} ➳ ${prefix}tourl
 ${no++} ➳ ${prefix}upload
 ${no++} ➳ ${prefix}toimg
 ${no++} ➳ ${prefix}toimage
 ${no++} ➳ ${prefix}tomp3
 ${no++} ➳ ${prefix}toaudio
 ${no++} ➳ ${prefix}tomp4
 ${no++} ➳ ${prefix}tovideo
 ${no++} ➳ ${prefix}emojimix
 ${no++} ➳ ${prefix}emojmix
 ${no++} ➳ ${prefix}emojinua
 ${no++} ➳ ${prefix}mixemoji
 ${no++} ➳ ${prefix}stiker
 ${no++} ➳ ${prefix}sticker
 ${no++} ➳ ${prefix}sgif
 ${no++} ➳ ${prefix}stikergif
 ${no++} ➳ ${prefix}stickergif
 ${no++} ➳ ${prefix}swm
 ${no++} ➳ ${prefix}stikerwm
 ${no++} ➳ ${prefix}stickerwm
 ${no++} ➳ ${prefix}smeme
 ${no++} ➳ ${prefix}memestiker
 ${no++} ➳ ${prefix}stikermeme
 ${no++} ➳ ${prefix}stickermeme
 ${no++} ➳ ${prefix}takesticker
 ${no++} ➳ ${prefix}emojinua2
 ${no++} ➳ ${prefix}mixemoji2
 ${no++} ➳ ${prefix}emojmix2
 ${no++} ➳ ${prefix}emojimix2

 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}spamcall
 ${no++} ➳ ${prefix}translate
 ${no++} ➳ ${prefix}ssweb-pc
 ${no++} ➳ ${prefix}ssweb-hp
 ${no++} ➳ ${prefix}bitly_short
 ${no++} ➳ ${prefix}cuttly_short
 ${no++} ➳ ${prefix}tinyurl_short
 ${no++} ➳ ${prefix}base32
 ${no++} ➳ ${prefix}base64
 ${no++} ➳ ${prefix}debase32
 ${no++} ➳ ${prefix}debase64

 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}sendbug 628xxx
 ${no++} ➳ ${prefix}philips 628xxx
 ${no++} ➳ ${prefix}philips2 628xxx
 ${no++} ➳ ${prefix}philips3 628xxx
 ${no++} ➳ ${prefix}santet @tag
 ${no++} ➳ ${prefix}santet2 @tag
 ${no++} ➳ ${prefix}santet3 @tag
 ${no++} ➳ ${prefix}virtex 628xxx
 ${no++} ➳ ${prefix}virtex2 628xxx
 ${no++} ➳ ${prefix}virtex3 628xxx
 ${no++} ➳ ${prefix}bug1 628xxx
 ${no++} ➳ ${prefix}bug2 628xxx
 ${no++} ➳ ${prefix}bug3 628xxx
 ${no++} ➳ ${prefix}bug4 628xxx
 ${no++} ➳ ${prefix}bug5 628xxx
 
 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}buatroom 628xxx
 ${no++} ➳ ${prefix}room <only owner>
 ${no++} ➳ ${prefix}stopchat <only room>
 ${no++} ➳ ${prefix}menfess 628xx|bot|hai

 𝙎𝙊𝙎𝙈𝙀𝘿 𝙎𝙃𝙊𝙋 
 ${no++} ➳ ${prefix}pricelist <layanan>
 ${no++} ➳ ${prefix}order <cara order>
 ${no++} ➳ ${prefix}like jumlah|target
 ${no++} ➳ ${prefix}view jumlah|target
 ${no++} ➳ ${prefix}follower jumlah|username
 ${no++} ➳ ${prefix}cekstatus <idtrx>
 ${no++} ➳ ${prefix}komisi <owner only>
 ${no++} ➳ ${prefix}tarikkomisi <owner only>
 
 𝙑𝙊𝙆𝘼𝙇 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}hilih <text>
 ${no++} ➳ ${prefix}halah <text>
 ${no++} ➳ ${prefix}huluh <text>
 ${no++} ➳ ${prefix}heleh <text>
 ${no++} ➳ ${prefix}holoh <text>

 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}gempa
 ${no++} ➳ ${prefix}jadwaltv
 ${no++} ➳ ${prefix}gempanow
 ${no++} ➳ ${prefix}bioskopnow
 ${no++} ➳ ${prefix}latintoaksara
 ${no++} ➳ ${prefix}aksaratolatin

 𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 
 ${no++} ➳ ${prefix}dadu
 ${no++} ➳ ${prefix}anjing
 ${no++} ➳ ${prefix}patrick
 ${no++} ➳ ${prefix}bucinstick
 ${no++} ➳ ${prefix}gawrgura
 ${no++} ➳ ${prefix}amongus

 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}cerpen-sejarah
 ${no++} ➳ ${prefix}cerpen-sedih
 ${no++} ➳ ${prefix}cerpen-sastra
 ${no++} ➳ ${prefix}cerpen-romantis
 ${no++} ➳ ${prefix}cerpen-rohani
 ${no++} ➳ ${prefix}cerpen-rindu
 ${no++} ➳ ${prefix}cerpen-remaja
 ${no++} ➳ ${prefix}cerpen-ramadhan
 ${no++} ➳ ${prefix}cerpen-petualangan
 ${no++} ➳ ${prefix}cerpen-persahabatan
 ${no++} ➳ ${prefix}cerpen-perpisahan
 ${no++} ➳ ${prefix}cerpen-perjuangan
 ${no++} ➳ ${prefix}cerpen-penyesalan
 ${no++} ➳ ${prefix}cerpen-pengorbanan
 ${no++} ➳ ${prefix}cerpen-pengalaman
 ${no++} ➳ ${prefix}cerpen-pendidikan
 ${no++} ➳ ${prefix}cerpen-penantian
 ${no++} ➳ ${prefix}cerpen-patahhati
 ${no++} ➳ ${prefix}cerpen-olahraga
 ${no++} ➳ ${prefix}cerpen-nasionalisme
 ${no++} ➳ ${prefix}cerpen-nasihat
 ${no++} ➳ ${prefix}cerpen-motivasi
 ${no++} ➳ ${prefix}cerpen-misteri
 ${no++} ➳ ${prefix}cerpen-mengharukan
 ${no++} ➳ ${prefix}cerpen-malaysia
 ${no++} ➳ ${prefix}cerpen-liburan
 ${no++} ➳ ${prefix}cerpen-kristen
 ${no++} ➳ ${prefix}cerpen-korea
 ${no++} ➳ ${prefix}cerpen-kisahnyata
 ${no++} ➳ ${prefix}cerpen-keluarga
 ${no++} ➳ ${prefix}cerpen-kehidupan
 ${no++} ➳ ${prefix}cerpen-jepang
 ${no++} ➳ ${prefix}cerpen-inspiratif
 ${no++} ➳ ${prefix}cerpen-gokil
 ${no++} ➳ ${prefix}cerpen-galau
 ${no++} ➳ ${prefix}cerpen-cintasejati
 ${no++} ➳ ${prefix}cerpen-cintasegitiga
 ${no++} ➳ ${prefix}cerpen-cintasedih
 ${no++} ➳ ${prefix}cerpen-cintaromantis
 ${no++} ➳ ${prefix}cerpen-cintapertama
 ${no++} ➳ ${prefix}cerpen-cintaislami
 ${no++} ➳ ${prefix}cerpen-cinta
 ${no++} ➳ ${prefix}cerpen-budaya
 ${no++} ➳ ${prefix}cerpen-bahasasunda
 ${no++} ➳ ${prefix}cerpen-bahasajawa
 ${no++} ➳ ${prefix}cerpen-bahasainggris
 ${no++} ➳ ${prefix}cerpen-bahasadaerah
 ${no++} ➳ ${prefix}cerpen-anak

 𝙎𝙊𝙐𝙉𝘿 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}sound1
 ${no++} ➳ ${prefix}sound2
 ${no++} ➳ ${prefix}sound3
 ${no++} ➳ ${prefix}sound4
 ${no++} ➳ ${prefix}sound5
 ${no++} ➳ ${prefix}sound6
 ${no++} ➳ ${prefix}sound7
 ${no++} ➳ ${prefix}sound8
 ${no++} ➳ ${prefix}sound9
 ${no++} ➳ ${prefix}sound10
 ${no++} ➳ ${prefix}sound11
 ${no++} ➳ ${prefix}sound12
 ${no++} ➳ ${prefix}sound13
 ${no++} ➳ ${prefix}sound14
 ${no++} ➳ ${prefix}sound15
 ${no++} ➳ ${prefix}sound16
 ${no++} ➳ ${prefix}sound17
 ${no++} ➳ ${prefix}sound18
 ${no++} ➳ ${prefix}sound19
 ${no++} ➳ ${prefix}sound20
 ${no++} ➳ ${prefix}sound21
 ${no++} ➳ ${prefix}sound22
 ${no++} ➳ ${prefix}sound23
 ${no++} ➳ ${prefix}sound24
 ${no++} ➳ ${prefix}sound25
 ${no++} ➳ ${prefix}sound26
 ${no++} ➳ ${prefix}sound27
 ${no++} ➳ ${prefix}sound28
 ${no++} ➳ ${prefix}sound29
 ${no++} ➳ ${prefix}sound30
 ${no++} ➳ ${prefix}sound31
 ${no++} ➳ ${prefix}sound32
 ${no++} ➳ ${prefix}sound33
 ${no++} ➳ ${prefix}sound34
 ${no++} ➳ ${prefix}sound35
 ${no++} ➳ ${prefix}sound36
 ${no++} ➳ ${prefix}sound37
 ${no++} ➳ ${prefix}sound38
 ${no++} ➳ ${prefix}sound39
 ${no++} ➳ ${prefix}sound40
 ${no++} ➳ ${prefix}sound41
 ${no++} ➳ ${prefix}sound42
 ${no++} ➳ ${prefix}sound43
 ${no++} ➳ ${prefix}sound44
 ${no++} ➳ ${prefix}sound45
 ${no++} ➳ ${prefix}sound46
 ${no++} ➳ ${prefix}sound47
 ${no++} ➳ ${prefix}sound48
 ${no++} ➳ ${prefix}sound49
 ${no++} ➳ ${prefix}sound50
 ${no++} ➳ ${prefix}sound51
 ${no++} ➳ ${prefix}sound52
 ${no++} ➳ ${prefix}sound53
 ${no++} ➳ ${prefix}sound54
 ${no++} ➳ ${prefix}sound55
 ${no++} ➳ ${prefix}sound56
 ${no++} ➳ ${prefix}sound57
 ${no++} ➳ ${prefix}sound58
 ${no++} ➳ ${prefix}sound59
 ${no++} ➳ ${prefix}sound60
 ${no++} ➳ ${prefix}sound61
 ${no++} ➳ ${prefix}sound62
 ${no++} ➳ ${prefix}sound63
 ${no++} ➳ ${prefix}sound64
 ${no++} ➳ ${prefix}sound65
 ${no++} ➳ ${prefix}sound66
 ${no++} ➳ ${prefix}sound67
 ${no++} ➳ ${prefix}sound68
 ${no++} ➳ ${prefix}sound69
 ${no++} ➳ ${prefix}sound70
 ${no++} ➳ ${prefix}sound71
 ${no++} ➳ ${prefix}sound72
 ${no++} ➳ ${prefix}sound73
 ${no++} ➳ ${prefix}sound74
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment pulsa*
Number: 083180896284

*Payment Dana*
Number: 083180896284

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Tomi Heneldra

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 0831-8089-6284
 • *Instagram:* @tommyheneldra
 • *Youtube:* -
 • *Github:* -
 `
}