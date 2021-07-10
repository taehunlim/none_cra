import React, { useState } from 'react';
import { usePreventLeave } from '../Components/organisms/CustomHook/usePreventLeave';

const CustomHookTest: React.FC = () => {

  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default CustomHookTest;