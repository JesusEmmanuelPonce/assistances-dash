import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Teacher from '../components/teachers/Teacher';
import Entries from '../components/entries/Entries';

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/profesores" component={Teacher}/>
            <Route exact path="/asistencias" component={Entries}/>
        </Switch>
    )
}

export default Routing;