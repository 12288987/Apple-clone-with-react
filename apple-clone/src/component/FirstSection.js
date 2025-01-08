import macbook from "../asset/images/home/macbook-pro.jpg"

function FirstSection() {
  return (
    <section className="text-center mb-3 pt-5 first">
      <p className="inch">16-inch model</p>
      <h1>MacBook Pro</h1>
      <p className="theBest">The best for the brightest.</p>
      <div className="all-button fbutton">
        <a href="#" className="lmore">Learn more</a>
        <a href="#" className="buy">Buy</a>
      </div>
      <div>
        <img className="macImage" src={macbook} alt="" />
      </div>
    </section>
  )
}

export default FirstSection;