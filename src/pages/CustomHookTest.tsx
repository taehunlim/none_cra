import React, { useState } from 'react';
import { useDarkMode } from '../Components/CustomHook/useDarkMode';
import Toggle from './Toggle';
import Content from './Content';

import '../darkMode.scss'

const CustomHookTest: React.FC = () => {

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  );
};

export default CustomHookTest;