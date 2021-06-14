import './App.css';
import * as React from 'react';
import { EXButton, JustDoIt } from './ExButton/EXButton';
import ChangeTitle from './Ej3/ChangeTitle'
import { Link } from 'react-router-dom';
class App extends React.Component {

  resultTitle="Here button. I called you!";
  callMe = () => {
    this.message.updateTitleState(this.resultTitle)
  }
  render(){
  return (
    <div className="main-screen">
      <ChangeTitle titulo={"Already in!"} ref={(resultTitle)=> this.message = resultTitle}>Welcome to the IT world!</ChangeTitle>
      <EXButton method={this.callMe} title="Listo para hacer clic"></EXButton>
      <div className="navigation">
        <Link to={"/EXSecondView"} className="h1">Ir al SecondView</Link>
      </div>
    </div>
  );
  }
}
JustDoIt();
export default App;
