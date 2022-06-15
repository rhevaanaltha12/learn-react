export const fetchUser = () => {
  const posibleUserState = [
    { isLoggedIn: false },
    { isLoggedIn: true },
    { isLoggedIn: true, username: "Firas" },
  ];

  return posibleUserState[Math.floor(Math.random() * posibleUserState.length)];
};
