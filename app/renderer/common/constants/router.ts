const ROUTER = {
  root: '/',
  resume: '/resume',
};
export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
};

// entry module, TS type must be TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/skye0207/visResume',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: 'https://github.com/skye0207/visResume',
    key: 'code',
    text: '源码',
  },
];
