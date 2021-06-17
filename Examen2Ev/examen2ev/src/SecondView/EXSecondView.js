import * as React from 'react';
import './EXSecondView.css'
import { Link } from 'react-router-dom';

class EXSecondView extends React.Component{

    render() {
        return(
            <div className={'second-view-container'}>
                <h1>Welcome to the second view!</h1>
                <h2>Well done!</h2>
                <div className="navigation">
                <Link to={"/"} className="h1">Ir a la Pantalla Principal</Link>
                </div>
            </div>
        )
    }

}

export default EXSecondView;
