import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { GlobalColors } from 'styles/pages/theme.styled';
import Spinner from 'components/Spinner/Spinner.styled';
import SignInDialog from 'containers/SignInDialog';

import {
  HomePage,
  MorePage,
  PostPage,
  ProfilePage,
  SearchPage,
  PageNotFound,
} from 'pages/Pages';

/* -------------------------------------------------------------------------- */

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loginStatus, setLoginStatus] = React.useState(false);

  // test spinner
  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="App">
      <GlobalColors />
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/post" component={PostPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/more" component={MorePage} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Redirect to="/page-not-found" />
      </Switch>
    </div>
  )
}

export default App
