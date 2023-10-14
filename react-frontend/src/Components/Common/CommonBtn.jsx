import { Button } from 'antd';
import React from 'react';

export default function CommonBtn({ postIcon, icon, text, className, onClick, htmlType, disability = false, loading }) {
  return postIcon ? (
    <Button
      loading={loading}
      className={`${className} flex gap-x-4`}
      onClick={onClick}
      htmlType={htmlType}
      disabled={disability === true ? true : false}>
      {text}
      {postIcon}
    </Button>
  ) : (
    <Button
      icon={icon}
      loading={loading}
      className={`${className}`}
      onClick={onClick}
      htmlType={htmlType}
      disabled={disability === true ? true : false}>
      {text}
    </Button>
  );
}
