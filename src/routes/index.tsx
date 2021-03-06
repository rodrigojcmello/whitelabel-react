import React, { FC, ReactElement } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../styles/assets/roboto/roboto.css';
import '../styles/assets/segoe-ui/segoe-ui.css';
// import Summary from './Summary';
// import '../styles/global/main.scss';
import ButtonRoute from './Button';
import TextInputRoute from './TextInput';
import MainRoute from './Main';
// import PostList from './Fetch/PostList';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainRoute} />
        <Route>
          <Route path="/button" exact component={ButtonRoute} />
          <Route path="/text-input" exact component={TextInputRoute} />
        </Route>
        {/* <Route> */}
        {/*  <Route path="/fetch-post" exact component={PostList} /> */}
        {/*  /!* <Route path="/fetch-post/:id" exact component={BreedImages} /> *!/ */}
        {/* </Route> */}
        <Route path="*" component={(): ReactElement => <div>404 --</div>} />
      </Switch>

      {/* <Route path="/fetch-breed"> */}
      {/*  <Route path="/fetch-breed/"> */}
      {/*    <BreedList /> */}
      {/*  </Route> */}
      {/*  <Route path="/fetch-breed/teste"> */}
      {/*    <BreedImages /> */}
      {/*  </Route> */}
      {/* </Route> */}
      {/* <Route */}
      {/*  path="/fetch-breed" */}
      {/*  render={({ match: { url } }): ReactElement => ( */}
      {/*    <> */}
      {/*      <Route path={`${url}/`} component={BreedList} exact /> */}
      {/*      <Route path={`${url}/images`} component={BreedImages} /> */}
      {/*    </> */}
      {/*  )} */}
      {/* /> */}
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
