const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const request = require('request')
const app = express()

admin.initializeApp()

app.use(cors({ origin: true }))

app.post('/auth', (req, res) => {
  const lcToken = req.body.lc_token
  request(
    {
      url: 'https://accounts.livechatinc.com/info',
      headers: { Authorization: `Bearer ${lcToken}` },
    },
    (err, resp, body) => {
      if (err) {
        res.status(500).send(err.toString())
      }
      const user = JSON.parse(body)
      admin
        .auth()
        .createCustomToken(user.entity_id, {
          license: user.license_id
        })
        .then(fireToken => {
          res.json({ firebase_token: fireToken })
        })
        .catch(err => {
          res.status(500).send(err.toString())
        })
    }
  )
})

exports.api = functions.https.onRequest(app)
