import React from 'react';
import { Switch, Route } from 'react-router';
import Basket from './Components/Common/Basket';
import Light from './Components/Common/Light';
import Home from './Components/Pages/Home';

const App: React.FC = () => (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/categories/:id' component={Home} />
        <Route path='/lights/:id' component={Light} />
        <Route path='/basket' component={Basket} />
    </Switch>
);

export default App;
