"use strict"

import "./Notification.css"
import { Component } from 'react'

export default class Notification extends Component {
  render() {
    return (
      <div>
        <header className="header">
            <div className="logo">SH</div>
            <div className="notif-container">
                <div className="notif-box">1</div>
                <div className="news">Telegram</div>
            </div>
        </header>
      </div>
    )
  }
}
