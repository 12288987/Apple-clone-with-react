import laptop from "../asset/images/home/mac-laptop.jpg"
import ipad from "../asset/images/icons/new-ipad-logo.png"

function SixthSection() {
  return (
    <section className="sixth container">
      <div className="row">
        <div className="col-md-6">
          <div className="maclaptop text-center mb-3 pt-3 mb-md-0">
            <p className="lastP">16-inch model</p>
            <h2>MacBook Pro</h2>
            <p className="onelastP">The best for the brightest.</p>
            <div className="all-button">
              <a href="#" className="lmore">Learn more</a>
              <a href="#" className="buy">Buy</a>
            </div>
            <div>
              <img className="macimg" src={laptop} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="newipad text-center mb-3 pt-3">
            <img src={ipad} alt="" />
            <p className="computer">Like a computer. Unlike any computer</p>
            <div className="all-button">
              <a href="#" className="lmore">Learn more</a>
              <a href="#" className="buy">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SixthSection;