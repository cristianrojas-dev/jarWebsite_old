import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'jquery'
import 'font-awesome/css/font-awesome.css'

firebase.initializeApp({
  apiKey: "AIzaSyB8NYeKrEzzwz9WFLe2GcCEGW0xaUsrUIQ",
  authDomain: "jorgealessandri-website.firebaseapp.com",
  databaseURL: "https://jorgealessandri-website.firebaseio.com",
  projectId: "jorgealessandri-website",
  storageBucket: "jorgealessandri-website.appspot.com",
  messagingSenderId: "1077224106298"
})

import AppRoutes from './routes'

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,

  document.getElementById('root')
)
