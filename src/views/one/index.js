import React from 'react';
import withStyles  from 'isomorphic-style-loader/lib/withStyles'
import style from './index.css'

import cx from 'classnames';
class  One extends React.Component  {
  render(){
    return (
      <div className={cx(style.one)}><span className={style.two}>fdfd</span></div>
    )
  }
}

export default One
