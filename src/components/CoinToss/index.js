/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

const heads_img_url = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tails_img_url = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: heads_img_url,
    headsCount: 0,
    tailsCount: 0,
  }

  onChangeButton = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let headsResult = headsCount
    let tailsResult = tailsCount
    let imgUrl = ''

    if (tossResult === 0) {
      headsResult += 1
      imgUrl = heads_img_url
    } else {
      imgUrl = tails_img_url
      tailsResult += 1
    }

    this.setState({
      tossImage: imgUrl,
      headsCount: headsResult,
      tailsCount: tailsResult,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="pera">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="img" />
          <button className="btn" type="button" onClick={this.onChangeButton}>
            Toss Coin
          </button>
          <div className="toss-description">
            <p className="pera">Total: {totalCount}</p>
            <p className="pera">Heads: {headsCount}</p>
            <p className="pera">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
