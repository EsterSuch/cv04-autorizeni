import React from 'react';
import './style.css';
import Drive from './components/Drive';
import NotDrive from './components/NotDrive';

//když v tern. oper. zadám text 'Může řídit' : 'Nemůže řídit', tak mi to funguje. Ale tyhle naimportované komponenty ne. Hází to chybu, že ....src\components\Age\components\Drive neexituje. Přiotm ho nikde nezadávám, jen importuju Drive/NotDrive, kt. jsou umístěny ve stejné složce (nejsou vnořené) jako je Age apod.

const Age = (props) => {
  return (
    <div className="age">
      <p>{props.age} let,</p>
      <p>{props.age >=18 ? <Drive /> : <NotDrive /> }</p>
      
    </div>
  )
};

export default Age;