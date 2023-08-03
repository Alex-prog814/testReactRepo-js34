import Data from './components/Data';
import Like from './components/Like';
import RenderPicture from './components/RenderPicture';
import Input from './components/Input';
import ProductsList from './components/ProductsList';
import AuthomaticLike from './components/AuthomaticLike';

function App() {
  const products = ['Apple', 'Orange', 'Pineapple', 'Lemon', 'Grape'];

  return (
    <>
      {/* <Data names={names} getInfo={getInfo} /> */}
      {/* <Like /> */}
      {/* <RenderPicture /> */}
      {/* <Input /> */}
      {/* <ProductsList products={products} /> */}
      <AuthomaticLike />
    </>
  )
};

export default App;
