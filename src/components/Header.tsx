import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  border-bottom: 2px solid rgb(0, 0, 0);
`;
const Logo = styled.img``;

const Header: React.FC = () => {
  return (
    <Layout>
      <Logo src="https://www.tre.se/images/logo.jpg" alt="Logo" />
    </Layout>
  );
};

export default Header;
