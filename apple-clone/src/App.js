import { useEffect } from "react";
import MobileSlider from "./component/MobileSlider";
import YoutubeFunctionality from "./component/YoutubeFunctionality";
import { Route, Routes } from "react-router-dom";
import Notfoundpage from "./component/Notfoundpage";
import Main from "./component/main/Main";
import Cart from "./pages/cart/Cart";
import Productpage from "./pages/productpage/Productpage";
import Iphone from "./pages/iphone/Iphone";
import Mac from "./pages/mac/Mac";
import SharedElement from "./component/SharedElement";

function App() {
  useEffect(() => {
    document.title = "Apple replica";
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedElement />}>
          <Route index element={<Main />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:lastUrl" element={<Productpage />} />
          <Route path="mac" element={<Mac />} />
          {/* <Route path="search" element={<Search />} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
      {/* <MobileSlider /> */}
    </>
  );
}

export default App;
