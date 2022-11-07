import {Component} from 'react'

import './index.css'

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

class Filtersection extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1 className="section-2-head">New this week</h1>
          <div>
            <AiOutlineLeft />
            <AiOutlineRight />
          </div>
        </div>
        <div className="section-card-1">
          <div className="sub-1">
            <div>
              <p className="s-par-1">Collection</p>
              <h1 className="s-hed-1">
                Most Popular <br /> around the world
              </h1>
            </div>
            <div>
              <button type="button" className="butt">
                Show all
              </button>
            </div>
          </div>
          <div className="sub-2">
            <div>
              <p className="s-par-1">Collection</p>
              <h1 className="s-hed-1">
                Great for team <br /> building
              </h1>
            </div>
            <div>
              <button type="button" className="butt">
                Show all
              </button>
            </div>
          </div>
          <div className="sub-3">
            <div>
              <p className="s-par-1">Collection</p>
              <h1 className="s-hed-1">Fun for the family</h1>
            </div>
            <div>
              <button type="button" className="butt">
                Show all
              </button>
            </div>
          </div>
        </div>
        <div className="se-card-2">
          <button type="button" className="button">
            Dates
          </button>
          <button type="button" className="button">
            Group size
          </button>
          <button type="button" className="button">
            More filters
          </button>
          <button type="button" className="button">
            Great for groups
          </button>
          <button type="button" className="button">
            Family-friendly
          </button>
          <button type="button" className="button">
            Animals
          </button>
          <button type="button" className="button">
            Arts&writing
          </button>
          <button type="button" className="button">
            Baking
          </button>
          <button type="button" className="button">
            Cooking
          </button>
          <button type="button" className="button">
            Dance
          </button>
          <button type="button" className="button">
            Drinks
          </button>
          <button type="button" className="button">
            Entertainment
          </button>

          <button type="button" className="button">
            Dates
          </button>
          <button type="button" className="button">
            Group size
          </button>
          <AiOutlineRight />
        </div>
      </div>
    )
  }
}

export default Filtersection
