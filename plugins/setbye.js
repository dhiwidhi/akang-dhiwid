let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'turut berduka cita🥺semoga amalnya di terima disisinya ya🥺🤗'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

