import React, { useState } from 'react';
import {useChecks} from '../Components/organisms/CustomHook/useChecks';

const CustomHookTest: React.FC = () => {
    const labels = ['check 1', 'check 2', 'check 3']

    const [isAllChecked, renderChecks] = useChecks(labels)
    
    return (
        <div>
        {renderChecks()}
        <p>
          <button disabled={!isAllChecked}>다음</button>
        </p>
      </div>
    );
};

export default CustomHookTest;