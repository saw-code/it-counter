import React from 'react';
import {UniversalButton} from "./UniversalButton";

export const SetValue = () => {
  return (
    <div>
      <div>
        <div>
          max value:
          <input type="text"/>
        </div>
        <div>
          start value:
          <input type="text"/>
        </div>
      </div>
      <div>
        <button>set</button>
        {/*<UniversalButton titleName={} callBack={} disabled={}/>*/}
      </div>
    </div>
  );
};
