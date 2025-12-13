export const isAdminLoggedIn = () => {
  return localStorage.getItem("adminToken") !== null;
};

export const logoutAdmin = () => {
  localStorage.removeItem("adminToken");
};
