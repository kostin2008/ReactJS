import React from 'react';
import {Route} from 'react-router-dom'
import PrivateRoute from '../PrivateRoute';

export default function PublicRoute({auth, ...rest}) {
  return !auth ? <Route {...rest}/> : PrivateRoute({auth, ...rest});
}

