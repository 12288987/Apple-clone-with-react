import watch from "../asset/images/icons/watch-series5-logo.png"
import card from "../asset/images/icons/apple-card-logo.png"

function FourthSection() {
  return (
    <section className="fourth container">
      <div className="row">
        <div className="col-md-6">
          <div className="watch text-center mb-3 pt-4">
            <img src={watch} alt="" />
            <div className="text mt-2">
              <p>
                With the new Always-On Retina display. You’ve never seen a watch
                like this.
              </p>
            </div>
            <div className="all-button">
              <a href="#" className="lmore">Learn more</a>
              <a href="#" className="buy">Buy</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="phone text-center mb-3 pt-4">
            <img src={card} alt="" />
            <div className="text mt-2">
              <p>Get 3% Daily Cash on purchases from Apple using Apple Card.</p>
            </div>
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

export default FourthSection;