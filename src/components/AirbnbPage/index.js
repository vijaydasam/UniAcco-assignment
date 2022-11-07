import {Component} from 'react'

import Header from '../Header'

import Filtersection from '../Filters'

class AirbnbPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <div style={{padding: '0 50px'}}>
          <Filtersection />
        </div>
      </div>
    )
  }
}

export default AirbnbPage
