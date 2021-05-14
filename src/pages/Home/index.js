import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Introduce from '../../components/Introduce';
import WhatIKnow from '../../components/WhatIKnow';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Introduce />
      <WhatIKnow />
    </div>
  );
}

export default Home;
