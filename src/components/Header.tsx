import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 84px;
  border-bottom: 2px solid rgb(0, 0, 0);
`;

const Header: React.FC = () => {
  return <Layout />;
};

export default Header;
