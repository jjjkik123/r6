import React from 'react';
import { Row, Col } from 'antd';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import NavMenu from './NavMenu.jsx';

import "./index.less";

const HomeUi = () => {
  return (
    <div className="home-wrap">
      <Row>
        <Col span={4}>
          <NavMenu></NavMenu>
        </Col>
        <Col span={20}>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Col>
      </Row>
    </div>
  );
}

export default HomeUi;