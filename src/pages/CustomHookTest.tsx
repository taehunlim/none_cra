import React, { useState } from 'react';
import { useDarkMode } from '../Components/CustomHook/useDarkMode';
import Toggle from '../Components/DarkModeToggle';
import Layout from '../Components/Layout';
import Content from './Content';

const CustomHookTest: React.FC = () => {

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Layout>

        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <Content />
    </Layout>
  );
};

export default CustomHookTest;