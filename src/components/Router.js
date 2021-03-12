import React, { useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Profile from 'routes/Profile';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from './Navigation';


export default function AppRouter({ isLogin, userObj }) {
    console.log(userObj);

    return (
        <Router>
            {isLogin && <Navigation />}
            <Switch>
                {isLogin ? <>
                    <Route exact path="/">
                        <Home userObj={userObj} />
                    </Route>
                    <Route path="/profile" >
                        <Profile userObj={userObj} />
                    </Route>
                    <Redirect from="*" to="/" />
                </>
                    :
                    <>
                        <Route path="/">
                            <Auth />
                        </Route>
                        {/*
                        "/" 루트 경로를 제외한
                        인증받지 않은 나머지 이용자들은 모두 "/"로 돌려보냄
                        */}
                        <Redirect from="*" to="/" />
                    </>

                }
            </Switch>
        </Router>
    );
}