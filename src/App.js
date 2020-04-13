import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SendMail from './auth/signIn/pages/SendMail';
import SignUp from './auth/signUp/pages/SignUp'
import SignIn from './auth/signIn/pages/SignIn';
import ForgotPassword from './auth/signIn/pages/ForgotPwd';
// import Footer from './shared/UIElements/Footer'
// import NewMatiere from './shared/components/NewMatiere';
// import ClasseCoordo from './coordonateur/components/ClasseCoordo';
// import ClasseDefinir from './coordonateur/components/ClasseDefinir';
// import CoordoTimeTable from './coordonateur/pages/CoordoTimeTable';
// import ClasseSettings from './secretaire/components/new module/ClasseSettings';
// import Settings from './secretaire/pages/Settings';
import ManagePersonnel from './secretaire/components/manage personnel/ManagePersonnel'
// import TimeTableLine from './coordonateur/components/TimeTableLine';
// import TimeTableFormat from './coordonateur/components/TimeTableFormat';

class App extends React.Component {
    render() {
        return ( <
            Router >
            <
            Switch >
            <
            Route exact path = '/' > < ManagePersonnel / > < /Route> <
            Route exact path = '/restpwd' > < ForgotPassword / > < /Route> <
            Route exact path = '/sendMail' > < SendMail / > < /Route> <
            Route exact path = '/signup' > < SignUp / > < /Route> <
            Route exact path = '/signin' > < SignIn / > < /Route> <
            Redirect to = '/' / >
            hello <
            /Switch> < /
            Router >
        );
    }
}

export default App;