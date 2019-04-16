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
                                onClick={() => { _browserStatusHelper(t[0]) }}>{t[0]}</em>));
      }

      for (let i = 0; i < parts.length; i++) {
        parts[i] = <span key={i}>{parts[i]}</span>;
      }

      return parts;
    };

    return (
      <div>
        {statusHelper(this.props.chunk)}
      </div>
    );
  }
}

export default LogReformatter;