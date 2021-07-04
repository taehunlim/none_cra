import loadable from '@loadable/component';

export const Home = loadable(() => import( /* webpackChunkName: "Home" */ './Home'));
export const CustomHookTest = loadable(() => import( /* webpackChunkName: "CustomHookTest" */ './CustomHookTest'));
