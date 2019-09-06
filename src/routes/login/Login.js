/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import Api from './../../core/Api';
// import s1 from 'antd/es/input/style/index.css'
import s1 from 'antd/dist/antd.min.css';
import {Input} from 'antd';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  click = () => {
    let params = {
      username: 18567382386,
      password: 'kcsj6832'
    }
    let url = Api.assembleUrl(Api.host.main, Api.path.login);
    Api.requestPost(url, params, (data) => {

    })
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>
            Log in with your username or company email address.
          </p>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              Username or email address:
              <Input
                className={s.input}
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              Password:
              <Input

              />
            </label>
          </div>
          <div className={s.formGroup}>
            <button className={s.button} onClick={()=> this.click()}>
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
