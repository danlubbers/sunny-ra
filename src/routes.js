import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home'
import Paintings from './Components/Paintings/Paintings'
import WorksOnPaper from './Components/WorksOnPaper/WorksOnPaper'
import Gallery from './Components/Gallery/Gallery'
import Commissioned from './Components/Commissioned/Commissioned'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/paintings" component={Paintings} />
        <Route path="/works" component={WorksOnPaper} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/commissioned" component={Commissioned} />
    </Switch>
)