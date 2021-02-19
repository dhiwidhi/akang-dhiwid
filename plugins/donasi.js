let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [08819547416]
│ • Im3 [085807174320]
│ • Dana [08819547416]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281357302007
╰────

Ini *#caranya untuk Donasi* 
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa im3"
3.)Dan terus masukkan nomor kami 085807174320
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
