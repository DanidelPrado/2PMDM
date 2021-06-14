import * as React from 'react'
import './ChangeTitle.css'

class ChangeTitle extends React.Component {
    state = {
        title: this.props.titulo
    }

    updateTitleState(finalTitle) {
        this.setState({ title: finalTitle })
    }

    render(){
        return(
            <h1>{this.state.title}</h1>
        );
    }
}
console.log("Change for exercise 3, done")
export default ChangeTitle;