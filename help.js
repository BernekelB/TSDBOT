
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
βββ πππΏ-π½ππ βββ

 π¨π¦ππ₯ ππ‘ππ’
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 ππ’π§ ππ‘ππ’
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 
πππππ ππππ 
 ${no++} β³ ${prefix}kali 1 2
 ${no++} β³ ${prefix}bagi 1 2
 ${no++} β³ ${prefix}kurang 1 2
 ${no++} β³ ${prefix}tambah 1 2
 ${no++} β³ ${prefix}dellist key
 ${no++} β³ ${prefix}addlist key@response
 ${no++} β³ ${prefix}update key@response
 ${no++} β³ ${prefix}done <reply orderan>
 ${no++} β³ ${prefix}proses <reply orderan>
 ${no++} β³ ${prefix}list <only group>
 ${no++} β³ ${prefix}shop <only group>
 
πππππ ππππ 
 ${no++} β³ ${prefix}fitnah
 ${no++} β³ ${prefix}delete
 ${no++} β³ ${prefix}revoke
 ${no++} β³ ${prefix}tagall
 ${no++} β³ ${prefix}hidetag
 ${no++} β³ ${prefix}setdesc
 ${no++} β³ ${prefix}linkgrup
 ${no++} β³ ${prefix}infogroup
 ${no++} β³ ${prefix}setppgrup
 ${no++} β³ ${prefix}setnamegrup
 ${no++} β³ ${prefix}group open
 ${no++} β³ ${prefix}group close
 ${no++} β³ ${prefix}antilink on
 ${no++} β³ ${prefix}antilink off
 ${no++} β³ ${prefix}welcome on
 ${no++} β³ ${prefix}welcome off
 ${no++} β³ ${prefix}tiktokauto on
 ${no++} β³ ${prefix}tiktokauto off
 ${no++} β³ ${prefix}kick @tag
 ${no++} β³ ${prefix}demote @tag
 ${no++} β³ ${prefix}promote @tag

 ππΌππ ππππ 
 ${no++} β³ ${prefix}menu
 ${no++} β³ ${prefix}rules
 ${no++} β³ ${prefix}owner
 ${no++} β³ ${prefix}infobot
 ${no++} β³ ${prefix}donate
 ${no++} β³ ${prefix}jadibot
 ${no++} β³ ${prefix}listjadibot
 ${no++} β³ ${prefix}sewabot
 ${no++} β³ ${prefix}groupbot
 ${no++} β³ ${prefix}ownerinfo
 ${no++} β³ ${prefix}infoowner

 ππππ ππππ 
 ${no++} β³ ${prefix}verify
 ${no++} β³ ${prefix}report
 ${no++} β³ ${prefix}request
 ${no++} β³ ${prefix}transfer
 ${no++} β³ ${prefix}menfess
 ${no++} β³ ${prefix}buatroom
 ${no++} β³ ${prefix}secretchat
 ${no++} β³ ${prefix}cekprem
 ${no++} β³ ${prefix}daftarprem
 ${no++} β³ ${prefix}changename

 πππππ ππππ 
 ${no++} β³ ${prefix}error
 ${no++} β³ ${prefix}clearerr
 ${no++} β³ ${prefix}siaran
 ${no++} β³ ${prefix}session
 ${no++} β³ ${prefix}resetdb
 ${no++} β³ ${prefix}runtime
 ${no++} β³ ${prefix}setexif
 ${no++} β³ ${prefix}setwm
 ${no++} β³ ${prefix}setfooter
 ${no++} β³ ${prefix}setppbot
 ${no++} β³ ${prefix}addprem
 ${no++} β³ ${prefix}delprem
 ${no++} β³ ${prefix}bc
 ${no++} β³ ${prefix}bctext
 ${no++} β³ ${prefix}bcvideo
 ${no++} β³ ${prefix}bcaudio
 ${no++} β³ ${prefix}bcimage
 ${no++} β³ ${prefix}broadcast
 
 πΌππππΏππΎπ ππππ 
 ${no++} β³ ${prefix}sadcat
 ${no++} β³ ${prefix}translate
 ${no++} β³ ${prefix}stalkff
 ${no++} β³ ${prefix}stalknpm
 ${no++} β³ ${prefix}stalkgithub
 ${no++} β³ ${prefix}balikhuruf
 ${no++} β³ ${prefix}balikangka
 ${no++} β³ ${prefix}besarkecil
 ${no++} β³ ${prefix}bilangangka

 πΏππππππΌπΏ ππππ
 ${no++} β³ ${prefix}tiktok
 ${no++} β³ ${prefix}ytmp3
 ${no++} β³ ${prefix}ytmp4
 ${no++} β³ ${prefix}pinterest
 ${no++} β³ ${prefix}playmp3
 ${no++} β³ ${prefix}playmp4
 ${no++} β³ ${prefix}gitclone
 ${no++} β³ ${prefix}mediafire
 ${no++} β³ ${prefix}wikimedia
 ${no++} β³ ${prefix}soundcloud
 ${no++} β³ ${prefix}infogempa

 πΎππππππ ππππ 
 ${no++} β³ ${prefix}tts
 ${no++} β³ ${prefix}ttp
 ${no++} β³ ${prefix}ttp2
 ${no++} β³ ${prefix}attp
 ${no++} β³ ${prefix}attp2
 ${no++} β³ ${prefix}tourl
 ${no++} β³ ${prefix}upload
 ${no++} β³ ${prefix}toimg
 ${no++} β³ ${prefix}toimage
 ${no++} β³ ${prefix}tomp3
 ${no++} β³ ${prefix}toaudio
 ${no++} β³ ${prefix}tomp4
 ${no++} β³ ${prefix}tovideo
 ${no++} β³ ${prefix}emojimix
 ${no++} β³ ${prefix}emojmix
 ${no++} β³ ${prefix}emojinua
 ${no++} β³ ${prefix}mixemoji
 ${no++} β³ ${prefix}stiker
 ${no++} β³ ${prefix}sticker
 ${no++} β³ ${prefix}sgif
 ${no++} β³ ${prefix}stikergif
 ${no++} β³ ${prefix}stickergif
 ${no++} β³ ${prefix}swm
 ${no++} β³ ${prefix}stikerwm
 ${no++} β³ ${prefix}stickerwm
 ${no++} β³ ${prefix}smeme
 ${no++} β³ ${prefix}memestiker
 ${no++} β³ ${prefix}stikermeme
 ${no++} β³ ${prefix}stickermeme
 ${no++} β³ ${prefix}takesticker
 ${no++} β³ ${prefix}emojinua2
 ${no++} β³ ${prefix}mixemoji2
 ${no++} β³ ${prefix}emojmix2
 ${no++} β³ ${prefix}emojimix2

 πππππ ππππ 
 ${no++} β³ ${prefix}spamcall
 ${no++} β³ ${prefix}translate
 ${no++} β³ ${prefix}ssweb-pc
 ${no++} β³ ${prefix}ssweb-hp
 ${no++} β³ ${prefix}bitly_short
 ${no++} β³ ${prefix}cuttly_short
 ${no++} β³ ${prefix}tinyurl_short
 ${no++} β³ ${prefix}base32
 ${no++} β³ ${prefix}base64
 ${no++} β³ ${prefix}debase32
 ${no++} β³ ${prefix}debase64

 π½πππππ ππππ 
 ${no++} β³ ${prefix}sendbug 628xxx
 ${no++} β³ ${prefix}philips 628xxx
 ${no++} β³ ${prefix}philips2 628xxx
 ${no++} β³ ${prefix}philips3 628xxx
 ${no++} β³ ${prefix}santet @tag
 ${no++} β³ ${prefix}santet2 @tag
 ${no++} β³ ${prefix}santet3 @tag
 ${no++} β³ ${prefix}virtex 628xxx
 ${no++} β³ ${prefix}virtex2 628xxx
 ${no++} β³ ${prefix}virtex3 628xxx
 ${no++} β³ ${prefix}bug1 628xxx
 ${no++} β³ ${prefix}bug2 628xxx
 ${no++} β³ ${prefix}bug3 628xxx
 ${no++} β³ ${prefix}bug4 628xxx
 ${no++} β³ ${prefix}bug5 628xxx
 
 πΌππππππππ ππππ 
 ${no++} β³ ${prefix}buatroom 628xxx
 ${no++} β³ ${prefix}room <only owner>
 ${no++} β³ ${prefix}stopchat <only room>
 ${no++} β³ ${prefix}menfess 628xx|bot|hai

 ππππππΏ ππππ 
 ${no++} β³ ${prefix}pricelist <layanan>
 ${no++} β³ ${prefix}order <cara order>
 ${no++} β³ ${prefix}like jumlah|target
 ${no++} β³ ${prefix}view jumlah|target
 ${no++} β³ ${prefix}follower jumlah|username
 ${no++} β³ ${prefix}cekstatus <idtrx>
 ${no++} β³ ${prefix}komisi <owner only>
 ${no++} β³ ${prefix}tarikkomisi <owner only>
 
 ππππΌπ ππππ 
 ${no++} β³ ${prefix}hilih <text>
 ${no++} β³ ${prefix}halah <text>
 ${no++} β³ ${prefix}huluh <text>
 ${no++} β³ ${prefix}heleh <text>
 ${no++} β³ ${prefix}holoh <text>

 πππππππΌππππ ππππ 
 ${no++} β³ ${prefix}gempa
 ${no++} β³ ${prefix}jadwaltv
 ${no++} β³ ${prefix}gempanow
 ${no++} β³ ${prefix}bioskopnow
 ${no++} β³ ${prefix}latintoaksara
 ${no++} β³ ${prefix}aksaratolatin

 ππΌππΏππ ππππΎπππ 
 ${no++} β³ ${prefix}dadu
 ${no++} β³ ${prefix}anjing
 ${no++} β³ ${prefix}patrick
 ${no++} β³ ${prefix}bucinstick
 ${no++} β³ ${prefix}gawrgura
 ${no++} β³ ${prefix}amongus

 πΎπππππ ππππ 
 ${no++} β³ ${prefix}cerpen-sejarah
 ${no++} β³ ${prefix}cerpen-sedih
 ${no++} β³ ${prefix}cerpen-sastra
 ${no++} β³ ${prefix}cerpen-romantis
 ${no++} β³ ${prefix}cerpen-rohani
 ${no++} β³ ${prefix}cerpen-rindu
 ${no++} β³ ${prefix}cerpen-remaja
 ${no++} β³ ${prefix}cerpen-ramadhan
 ${no++} β³ ${prefix}cerpen-petualangan
 ${no++} β³ ${prefix}cerpen-persahabatan
 ${no++} β³ ${prefix}cerpen-perpisahan
 ${no++} β³ ${prefix}cerpen-perjuangan
 ${no++} β³ ${prefix}cerpen-penyesalan
 ${no++} β³ ${prefix}cerpen-pengorbanan
 ${no++} β³ ${prefix}cerpen-pengalaman
 ${no++} β³ ${prefix}cerpen-pendidikan
 ${no++} β³ ${prefix}cerpen-penantian
 ${no++} β³ ${prefix}cerpen-patahhati
 ${no++} β³ ${prefix}cerpen-olahraga
 ${no++} β³ ${prefix}cerpen-nasionalisme
 ${no++} β³ ${prefix}cerpen-nasihat
 ${no++} β³ ${prefix}cerpen-motivasi
 ${no++} β³ ${prefix}cerpen-misteri
 ${no++} β³ ${prefix}cerpen-mengharukan
 ${no++} β³ ${prefix}cerpen-malaysia
 ${no++} β³ ${prefix}cerpen-liburan
 ${no++} β³ ${prefix}cerpen-kristen
 ${no++} β³ ${prefix}cerpen-korea
 ${no++} β³ ${prefix}cerpen-kisahnyata
 ${no++} β³ ${prefix}cerpen-keluarga
 ${no++} β³ ${prefix}cerpen-kehidupan
 ${no++} β³ ${prefix}cerpen-jepang
 ${no++} β³ ${prefix}cerpen-inspiratif
 ${no++} β³ ${prefix}cerpen-gokil
 ${no++} β³ ${prefix}cerpen-galau
 ${no++} β³ ${prefix}cerpen-cintasejati
 ${no++} β³ ${prefix}cerpen-cintasegitiga
 ${no++} β³ ${prefix}cerpen-cintasedih
 ${no++} β³ ${prefix}cerpen-cintaromantis
 ${no++} β³ ${prefix}cerpen-cintapertama
 ${no++} β³ ${prefix}cerpen-cintaislami
 ${no++} β³ ${prefix}cerpen-cinta
 ${no++} β³ ${prefix}cerpen-budaya
 ${no++} β³ ${prefix}cerpen-bahasasunda
 ${no++} β³ ${prefix}cerpen-bahasajawa
 ${no++} β³ ${prefix}cerpen-bahasainggris
 ${no++} β³ ${prefix}cerpen-bahasadaerah
 ${no++} β³ ${prefix}cerpen-anak

 πππππΏ ππππ 
 ${no++} β³ ${prefix}sound1
 ${no++} β³ ${prefix}sound2
 ${no++} β³ ${prefix}sound3
 ${no++} β³ ${prefix}sound4
 ${no++} β³ ${prefix}sound5
 ${no++} β³ ${prefix}sound6
 ${no++} β³ ${prefix}sound7
 ${no++} β³ ${prefix}sound8
 ${no++} β³ ${prefix}sound9
 ${no++} β³ ${prefix}sound10
 ${no++} β³ ${prefix}sound11
 ${no++} β³ ${prefix}sound12
 ${no++} β³ ${prefix}sound13
 ${no++} β³ ${prefix}sound14
 ${no++} β³ ${prefix}sound15
 ${no++} β³ ${prefix}sound16
 ${no++} β³ ${prefix}sound17
 ${no++} β³ ${prefix}sound18
 ${no++} β³ ${prefix}sound19
 ${no++} β³ ${prefix}sound20
 ${no++} β³ ${prefix}sound21
 ${no++} β³ ${prefix}sound22
 ${no++} β³ ${prefix}sound23
 ${no++} β³ ${prefix}sound24
 ${no++} β³ ${prefix}sound25
 ${no++} β³ ${prefix}sound26
 ${no++} β³ ${prefix}sound27
 ${no++} β³ ${prefix}sound28
 ${no++} β³ ${prefix}sound29
 ${no++} β³ ${prefix}sound30
 ${no++} β³ ${prefix}sound31
 ${no++} β³ ${prefix}sound32
 ${no++} β³ ${prefix}sound33
 ${no++} β³ ${prefix}sound34
 ${no++} β³ ${prefix}sound35
 ${no++} β³ ${prefix}sound36
 ${no++} β³ ${prefix}sound37
 ${no++} β³ ${prefix}sound38
 ${no++} β³ ${prefix}sound39
 ${no++} β³ ${prefix}sound40
 ${no++} β³ ${prefix}sound41
 ${no++} β³ ${prefix}sound42
 ${no++} β³ ${prefix}sound43
 ${no++} β³ ${prefix}sound44
 ${no++} β³ ${prefix}sound45
 ${no++} β³ ${prefix}sound46
 ${no++} β³ ${prefix}sound47
 ${no++} β³ ${prefix}sound48
 ${no++} β³ ${prefix}sound49
 ${no++} β³ ${prefix}sound50
 ${no++} β³ ${prefix}sound51
 ${no++} β³ ${prefix}sound52
 ${no++} β³ ${prefix}sound53
 ${no++} β³ ${prefix}sound54
 ${no++} β³ ${prefix}sound55
 ${no++} β³ ${prefix}sound56
 ${no++} β³ ${prefix}sound57
 ${no++} β³ ${prefix}sound58
 ${no++} β³ ${prefix}sound59
 ${no++} β³ ${prefix}sound60
 ${no++} β³ ${prefix}sound61
 ${no++} β³ ${prefix}sound62
 ${no++} β³ ${prefix}sound63
 ${no++} β³ ${prefix}sound64
 ${no++} β³ ${prefix}sound65
 ${no++} β³ ${prefix}sound66
 ${no++} β³ ${prefix}sound67
 ${no++} β³ ${prefix}sound68
 ${no++} β³ ${prefix}sound69
 ${no++} β³ ${prefix}sound70
 ${no++} β³ ${prefix}sound71
 ${no++} β³ ${prefix}sound72
 ${no++} β³ ${prefix}sound73
 ${no++} β³ ${prefix}sound74
 `
}

exports.rulesBot = () =>{
return`*ββγ RULES-BOT γββ*

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
return`ββγ *MENU DONATE* γββ

Hi *${cekName}* ${ucapanWaktu} ππ»

*Payment pulsa*
Number: 083180896284

*Payment Dana*
Number: 083180896284

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

ββγ *THX FOR YOU* γββ`
}

exports.infoOwner = () =>{
return`ββγ *INFO OWNER* γββ

 *Data Profil*
 β’ *Nama:* Tomi Heneldra

_iam developer bot whatsapp._

 *Sosial Media*
 β’ *Whatsapp:* 0831-8089-6284
 β’ *Instagram:* @tommyheneldra
 β’ *Youtube:* -
 β’ *Github:* -
 `
}