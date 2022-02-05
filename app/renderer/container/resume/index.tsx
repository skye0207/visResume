import React from 'react';
import './index.less';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';

function Resume() {
  // read and output this file
  getAppPath().then((rootPath: string) => {
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });
  return <div>this is resume page</div>;
}

export default Resume;
