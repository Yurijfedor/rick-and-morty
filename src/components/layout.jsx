import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "./Layout.styled";

const Layout = () => {
  return (
    <Suspense>
      <Container>
        <Outlet fallback={<div>...Loading</div>} />
      </Container>
    </Suspense>
  );
};

export default Layout;
