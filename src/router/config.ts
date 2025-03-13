const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/trollTest",
    component: "TrollTest",
    exact: true
  },
  {
    path: "/trolltest/do",
    exact: true,
    component:"TrollTest",
  },
];

export default routes;
