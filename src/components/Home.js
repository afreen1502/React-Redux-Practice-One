import React, { useState } from 'react';

const Home = (props) => {
  console.log('props', props);
  const [details, setDetails] = useState({
    name: '',
    price: '',
  });
  const setName = (e) => {
    setDetails((pre) => {
      return { ...pre, name: e.target.value };
    });
  };
  const setPrice = (e) => {
    setDetails((pre) => {
      return { ...pre, price: e.target.value };
    });
  };
  const submitHandler = () => {
    console.log('details', details);
  };
  return (
    <div>
      <input type="text" value={details.name} onChange={(e) => setName(e)} />
      <input type="text" value={details.price} onChange={(e) => setPrice(e)} />
      <button onClick={() => props.addToCartHandler(details)}>submit</button>
      <button onClick={() => props.removeFromCartHandler()}>Remove</button>
    </div>
  );
};

export default Home;
