import * as React from 'react';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import EXSecondView from './SecondView/EXSecondView'

class Navigation extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Redirect from ="/" to= "/"></Redirect>
                    <Switch>
                        <Route exact path="/" component={App}>
                        </Route>
                        <Route exact path="/EXSecondView" component={EXSecondView}>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Navigation;