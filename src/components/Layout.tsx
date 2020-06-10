import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0;
`;

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
