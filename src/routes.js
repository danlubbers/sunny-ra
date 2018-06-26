import React from 'react';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/paintings" component={Paintings} />
        <Route path="/works" component={WorksOnPaper} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/commissioned" component={Commissioned} />
        <Route path="/about" component={About} />
    </Switch>
)