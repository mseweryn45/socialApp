import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getUsers, getComments } from './actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import { TopBar } from './components/TopBar/TopBar'
import { LeftMenu } from './components/LeftMenu/LeftMenu'
import { Container } from './styledHelpers/Components';
import { HomePage } from "./Pages/HomePage"
import { TestPage } from "./Pages/TestPage"
import { ProfilePage } from "./Pages/ProfilePage"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Entities } from './Pages/Entities';
import { Workspace } from './Pages/Workspace';
type GetUsers = ReturnType<typeof getUsers>;
type GetComments = ReturnType<typeof getComments>;


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers())
    dispatch<GetComments>(getComments())
  }, []);
  return (
    <Router>
      <>
        <TopBar />
        <Container>
          <LeftMenu />
          <Switch>
            <Route path="/404">
              <TestPage />
            </Route>
            <Route path="/Entities">
              <Entities />
            </Route>
            <Route path="/Workspace">
              <Workspace />
            </Route>
            <Route path="/Entities">
              <Entities />
            </Route>
            <Route path="/Profile">
              <ProfilePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </>
    </Router>
  );

}

export default App;
