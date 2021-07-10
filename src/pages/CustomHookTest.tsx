import React, { useState } from 'react';
import { useToggle } from '../Components/organisms/CustomHook/useToggle';

const CustomHookTest: React.FC = () => {

  const [isChanged, setIsChanged] = useToggle();

  return (
    <div>
      <button
        onClick={setIsChanged}
      >
        {isChanged ? "basic" : "new"}
      </button>
    </div>
  );
};

export default CustomHookTest;