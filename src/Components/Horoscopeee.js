// import { responsiveFontSizes } from '@material-ui/core';
// import { TheatersRounded } from '@material-ui/icons';
import React, { useState } from 'react';
import '../App.css';
import { SelectSign } from './service/SelectService';
import { SelectTimeframe } from './service/SelectTimeframe';
import { Horoscope } from './service/Horoscope';
// import { getSigns } from './service/api';



function Horoscopeee() {
  const [signs, setSigns] = useState([]);
  const [selectedSign, setSelectedSigns] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);

  const restart = () => {
    setSelectedSigns(null);
    setSelectedTimeframe(null);
  }

  return (
    <div className="App" style={{color:'white',backgroundImage:"url(/nature.jpg)", height:600}}>
      <h1>Horoscope</h1>
      {!selectedSign && (<SelectSign onSignsSelected={setSelectedSigns} />)}

      {selectedSign && (<SelectTimeframe onTimeframeSelected={setSelectedTimeframe} />)}
      {selectedSign}
      {selectedSign && selectedTimeframe && (<Horoscope sign={selectedSign} timeframe={selectedTimeframe} />)}
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default Horoscopeee;