let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Halo saya adalah bot wa ada yang bisa saya bantu?
Untuk melihat menu² dibot ini sihlakan ketik #menu
Untuk keperluan sihlakan chat owner bot wa.me/6281211651261

Sosmed Owner Bot :
YouTube : メリサ
Github : LenaVcd
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

