var mailgun = require('mailgun.js');
const key = process.env.MAILGUN_API_KEY || null

module.exports = async (email, hash) => {
  if (key) {
    var mg = mailgun.client({
      username: 'api',
      key,
      public_key: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-yourkeyhere'
    })
    try {
      const msg = await mg.messages.create('sandbox7cd688a74e764bcbb9cd3fe00a7e6d27.mailgun.org', {
        from: "Administrador <postmaster@sandbox7cd688a74e764bcbb9cd3fe00a7e6d27.mailgun.org>",
        to: [email],
        subject: "Hello",
        text: `https://periodico.revistappc.com/reset/${hash}`,
        html: `<h1>https://periodico.revistappc.com/reset/${hash}</h1>`
      })
      if (msg) {
        return true
      }
    } catch(err) { throw err }
  } else {
    return false
  }
}