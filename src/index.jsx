import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Name from './components/Name';
import Job from './components/Job';
import Age from './components/Age';
import City from './components/City';


const App = () => (
 
<>
  <div className="contact">
    <div className="name">
      <Name />
    </div>

    <div>
      <Job />

      <div className="info">
        <Age age='25' /> <City city="Plzeň" />
        
      </div>

      
     </div>
  
  </div>
</>
);

render(<App />, document.querySelector('#app'));
