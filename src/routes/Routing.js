import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Teacher from '../components/teachers/Teacher';
import Entries from '../components/entries/Entries';
import NewTeacher from '../components/newTeacher/NewTeacher';
import SeeTeacher from '../components/teachers/SeeTeacher';

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/profesores" component={Teacher}/>
            <Route exact path="/asistencias" component={Entries}/>
            <Route exact path="/nuevo-profesor" component={NewTeacher}/>
            <Route exact path="/profesor/asistencias/:id" component={SeeTeacher}/>
        </Switch>
    )
}

export default Routing;