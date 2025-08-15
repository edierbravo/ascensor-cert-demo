import { UserRoutes } from "../routes/UserRoutes";

// const {isAuth} = JSON.parse(sessionStorage.getItem('login'));

export const Main = ({isMenuOpen}) => {
  return (

    <main className={`main ${isMenuOpen ? "menu-toggle" : ""}`}>
      <UserRoutes />
    </main>
  );
};
