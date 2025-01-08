import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Iphone.css'

function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    //for deployment the fetch url changed from "http://localhost:3030/productInfo3" to "/iphoneData.json"
    fetch("/iphoneData.json").then((res)=> res.json()).then((data)=>{
      setProducts(data.products);
    }).catch(()=>console.log("Error: unabel to fetch!!"));
  }, []);

  let flip = true;

  return (
    <>
      <section className='internal-page-wrapper'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-12 mt-5 pt-5'>
              <h1 className='font-weight-bold'>Iphones</h1>
              <div className='brief-description mb-5'>
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product)=> {
            let order1 = 1;
            let order2 = 2;
            if(flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip;
            } else {
              flip = !flip;
            }

            let productDiv = (
                <div key = {product.product_id} className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-4 my-md-auto order-md-${order1}`}>
                      <div className='product-title'>{product.product_name}</div>
                      <div className='product-brief'>{product.product_description}</div>
                      <div className='price'>{product.product_price}</div>
                      <div className='links-wrapper'>
                        <ul>
                          <li>
                            <Link to={`/iphone/${product.product_url}`} className='lmore linkstyle'>
                              Learn more
                            </Link>
                          </li>
                        </ul>
                      </div>
                  </div>
                  <div className={`col-sm-12 col-md-6 order-md-${order2}`}>
                    <div className='product-image'>
                      <img src={product.product_link} alt="product" />
                    </div>
                  </div>
                </div>
            );
            return productDiv;
          })}
        </div>
      </section>  
    </>
  )
}

export default Iphone;