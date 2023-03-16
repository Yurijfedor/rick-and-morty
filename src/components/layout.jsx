import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCharacters } from "../redux/operations";
import { Container } from "./Layout.styled";
import { AuthNav } from "./AuthNav";
import { LogOut } from "./LogOut";
import { UseAuth } from "../hooks/useAuth";

const Layout = () => {
  const dispatch = useDispatch();
  const { isAuth } = UseAuth();

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  return (
    <Suspense>
      <Container>
        {isAuth ? <LogOut /> : <AuthNav />}
        <Outlet fallback={<div>...Loading</div>} />
      </Container>
    </Suspense>
  );
};

export default Layout;
