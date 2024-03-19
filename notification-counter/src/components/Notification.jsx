"use strict"

import "./Notification.css"
import { Component } from 'react'

export default class Notification extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Notifications: [
              {telegram: 0},
              {instagram: 0},
              {whatsapp: 0},
            ]
          }


    }


  render() {
    return (
      <div>
        <header className="header">
            <div className="logo">SH</div>
            {this.state.Notifications.length > 0 && 
                        <div className="notif-container">
                        <div className="notif-box">{this.state.Notifications.length}</div>
                        <div className="news">Telegram</div>
                    </div>
            }
        </header>
      </div>
    )
  }
}

