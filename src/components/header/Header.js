import React from 'react'
import { Navbar } from './Navbar'
import Util from '../../../src/util/Util'

export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftHeader">
        <center>
          <div>
            <img src={require('../../static/logo192.png')} className="logo" />
          </div>
          <div>
            <h1 style={Object.assign(Util.HeaderFont, { marginTop: 0 })}>The School Of Mathmatis</h1>
          </div>
        </center>
      </div>
      <div className="rightHeader">
        <Navbar />
      </div>
    </div>
  )
}
