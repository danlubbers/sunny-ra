import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home'

import Paintings2006 from './Components/Paintings/PaintingsYear/Paintings2006/Paintings2006'
import Paintings2008 from './Components/Paintings/PaintingsYear/Paintings2008/Paintings2008'
import Paintings2010 from './Components/Paintings/PaintingsYear/Paintings2010/Paintings2010'
import Paintings2012 from './Components/Paintings/PaintingsYear/Paintings2012/Paintings2012'
import Paintings2014 from './Components/Paintings/PaintingsYear/Paintings2014/Paintings2014'
import Paintings2015 from './Components/Paintings/PaintingsYear/Paintings2015/Paintings2015'

import WorksOnPaper from './Components/WorksOnPaper/WorksOnPaper'
import Gallery from './Components/Gallery/Gallery'
import Commissioned from './Components/Commissioned/Commissioned'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/paintings2006" component={Paintings2006} />
        <Route path="/paintings2008" component={Paintings2008} />
        <Route path="/paintings2010" component={Paintings2010} />
        <Route path="/paintings2012" component={Paintings2012} />
        <Route path="/paintings2014" component={Paintings2014} />
        <Route path="/paintings2015" component={Paintings2015} />
        <Route path="/works" component={WorksOnPaper} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/commissioned" component={Commissioned} />
    </Switch>
)