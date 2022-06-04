import DealSlider from '../deals-slider/deal.slider'

import './deal.styles.scss'

import ADS_IMAGE from '../../assets/ads.png'

const MainDeal = () =>{
  return <>
    <div className="deals-sliders">
      <DealSlider />
      <div className="ads">
        <img className="ads_image" src={ADS_IMAGE} />
      </div>
    </div>
  </>
}

export default MainDeal
