// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onclickright = () => {
    this.setState(prevState => ({id: prevState.id + 1}))
  }

  onclickleft = () => {
    const {id} = this.state
    if (id !== 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  settozero = () => {
    this.setState({id: 0})
  }

  settofull = i => {
    this.setState({id: i})
  }

  render() {
    const {reviewsList} = this.props
    let {id} = this.state
    if (id >= reviewsList.length) {
      console.log('hello')
      this.settozero()
      id = 0
    } else if (id < 0) {
      this.settofull(reviewsList.length - 1)
      id = reviewsList.length - 1
    }

    const {username, imgUrl, companyName, description} = reviewsList[id]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />

        <div className="buttons">
          <button
            data-testId="leftArrow"
            onClick={this.onclickleft}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <p className="heading">{username}</p>

          <button
            data-testId="rightArrow"
            onClick={this.onclickright}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>

        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
