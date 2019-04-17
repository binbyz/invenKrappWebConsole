import React, { Component } from 'react';

import {
  APP_HELPER_STATUS_CODE_URL
} from '../Constants';

class LogReformatter extends Component {
  render() {
    const _browserStatusHelper = (statusCode) => {
      let t = /\d+/.exec(statusCode);
      
      if (t instanceof Array && typeof window === 'object') {
        window.open(APP_HELPER_STATUS_CODE_URL.replace('%query%', t[0]));
      }
    };

    const statusHelper = (chunk) => {
      let r = /"STATUS:(?:(?!200)\d+)"/gi;
      let t = r.exec(chunk);
      let parts = [chunk];

      if (t instanceof Array) {
        parts = chunk.split(/"STATUS:(?:(?!200))\d+"/gi);
        parts.splice(1, 0, (<em className="emphasis error helper" 
                                title="클릭시 상태코드 정보페이지로 이동합니다"
                                onClick={() => { _browserStatusHelper(t[0]) }}>{t[0]}</em>));
      }

      for (let i = 0; i < parts.length; i++) {
        parts[i] = <span key={i}>{parts[i]}</span>;
      }

      return parts;
    };

    // reference: https://developer.mozilla.org/ko/docs/Web/HTTP/Methods
    // @todo React.Element를 내부적으로 렌더링 할 수 있는 방법!?
    // eslint-disable-next-line
    const httpMethodHelper = (chunk) => {
      if (chunk instanceof Array) {
        // chunk = chunk.map(reactElement => reactElement.props.children);
        chunk = (chunk) => <React.Fragment>{chunk}</React.Fragment>;
        console.info('React.element to String?', chunk);
      }

      let r = /(GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH)/gi;
      let t = r.exec(chunk);
      let parts = [chunk];

      if (t instanceof Array) {
        parts = chunk.split(t[0]);
        console.log('is captured status method?', parts);
        parts.splice(1, 0, (<em className="emphasis stronger">{t[0]}</em>));
      }

      for (let i = 0; i < parts.length; i++) {
        parts[i] = <span key={i}>{parts[i]}</span>;
      }

      return parts;
    };

    return (
      <React.Fragment>
        {(statusHelper(this.props.chunk))}
      </React.Fragment>
    );
  }
}

export default LogReformatter;