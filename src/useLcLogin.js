
import React from 'react'
import { accountsSdk } from '@livechat/accounts-sdk'
import firebase from 'firebase/app'
import 'firebase/auth'

export const useLcLogin = (dpsClientId, firebaseAppAuthFnUrl, deps = []) => {

  React.useLayoutEffect(() => {
    accountsSdk.init({
      client_id: dpsClientId,
      onIdentityFetched: async (error, data) => {
        const accessToken = data.access_token

        const fireToken = await fetch(
          firebaseAppAuthFnUrl,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lc_token: accessToken }),
          }
        )
          .then(resp => resp.json())
          .then(resp => resp.firebase_token)

        await firebase.auth().signInWithCustomToken(fireToken)
      },
    })
  }, [...deps, dpsClientId, firebaseAppAuthFnUrl])
}
