import tv from "../asset/images/icons/apple-tv-logo.png"
import servant from "../asset/images/icons/servant-logo.png"
import airpods from "../asset/images/home/air-pods.jpg"

function FifthSection() {
  return (
    <section className="fifth container">
      <div className="row">
        <div className="col-md-6">
          <div className="child text-center mb-3 pt-4">
            <div>
              <img src={tv} alt="" />
            </div>
            <div className="servant">
              <img src={servant} alt="" />
            </div>
            <div>
              <a href="#">Watch the trailer</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="Airpods text-center mb-3 pt-4">
            <h2>Airpods Pro</h2>
            <p className="magic">Magic like You’ve never heard.</p>
            <div className="all-button">
              <a href="#" className="lmore">Learn more</a>
              <a href="#" className="buy blackBG">Buy</a>
            </div>
            <div className="airMargin">
              <img src={airpods} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FifthSection;