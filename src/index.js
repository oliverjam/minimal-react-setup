import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';
import Button from './components/button/button.js'
import PortfolioCard from './components/card';
import Image from './components/image'

ReactDOM.render(
  <div>
    <div class="inputs-container">
      <Input /> <Button /> <Input />
    </div>
    <PortfolioCard /> <Image /> <PortfolioCard />
  </div>
  , document.getElementById('🤡'));
