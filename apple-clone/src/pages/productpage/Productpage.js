import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notfoundpage from "../../component/Notfoundpage";

function Productpage() {
  const [product, setProduct] = useState([]);
  const { lastUrl } = useParams();
  // console.log(lastUrl);

  useEffect(() => {
    //for deployment the fetch url changed from "http://localhost:3030/productInfo3" to "/iphoneData.json"
    fetch("/iphoneData.json")
      .then((res) => res.json())
      .then((data) => {
        const productlist = data.products;
        const singleproduct = productlist.filter(
          (product) => product.product_url === lastUrl
        );
        setProduct(singleproduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [lastUrl]);
  console.log(product);
  // in app.jsx iphone/anyurl we set it to not return 404page so, we have to fix this using if condition(if product.length=0 that means there is no data in database and 0=false)
  if (product.length) {
    return (
      <div>
        <div className="container pt-5 mb-5">
          {product?.map((product) => {
            return (
              <div
                key={product.product_id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className="col-sm-12 col-md-6 my-4 my-md-auto">
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">
                    {product.product_description}
                  </div>
                  <div className="price">{product.product_price}</div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="product-image">
                    <img src={product.product_link} alt="product" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <Notfoundpage />;
  }
}

export default Productpage;
