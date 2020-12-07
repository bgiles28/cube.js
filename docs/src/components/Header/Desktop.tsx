import React from 'react';
import { Layout, Row, Col, Button, Icon } from 'antd';

import logo from '../../pages/images/Logo.png';

import styles from '../../../static/styles/index.module.scss';

type Props = {
  className?: string;
};

const Header: React.FC<Props> = (props) => (
  <Layout.Header className={props.className}>
    <div className={styles.searchDimmer}></div>
    <Row>
      <Col
        xxl={4}
        xl={5}
        lg={7}
        md={4}
        xs={24}
      >
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="Logo" style={{ height: 36 }} />
          </a>
          &nbsp;
          <a href="/docs" className={styles.logo}>
            <span className={styles.logoDocs}>docs</span>
          </a>
        </div>
      </Col>
      <Col
        xxl={16}
        xl={14}
        lg={10}
        md={16}
        xs={0}
      >
        {props.children}
      </Col>
      <Col
        xxl={4}
        xl={5}
        lg={7}
        md={4}
        xs={0}
        style={{ height: 'inherit', textAlign: 'right' }}
      >
        <div className={styles.headerButtonWrapper}>
          {/*<Button href="https://github.com/statsbotco/cube.js#community" className={styles.headerButton}>*/}
          {/*  Community*/}
          {/*</Button>*/}
          <Button
            href="https://cubejs-community.herokuapp.com/"
            target="_blank"
            className={styles.headerButton}
          >
            <Icon style={{ fontSize: '22px' }} type="slack" />
            Slack
          </Button>
          <Button
            href="https://github.com/cube-js/cube.js"
            target="_blank"
            className={styles.headerButton}
          >
            <Icon style={{ fontSize: '22px' }} type="github" />
            Github
          </Button>
        </div>
      </Col>
    </Row>
  </Layout.Header>
);

export default Header;