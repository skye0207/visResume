import React from 'react';
import { shell } from 'electron';
import './index.less';
import { useHistory } from 'react-router';
import Logo from '../../../../assets/logo.png';

function Root() {
  const history = useHistory();

  const onRouterToLink = (text: string) => {
    if (text === '简历') {
      history.push('/resume');
    } else {
      shell.openExternal('https://github.com/skye/visResume');
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">Vis Resume</div>
        <div styleName="tips">A Resume making platform, which makes your resume outstanding!</div>
        <div styleName="action">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div key={index} styleName="item" onClick={() => onRouterToLink(text)}>
                {text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By skye.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
