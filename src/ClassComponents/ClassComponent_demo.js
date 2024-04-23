import React, {Component} from 'react';

class Notification extends Component{
    // state= //State Variable
    // {
    //     show:true //class field delcaration
    // }
    /*OR*/
    constructor(props)
    {
        super(props)
        this.state={
            show:true
        }
        this.toggleDisplay= this.toggleDisplay.bind(this);
    
    }
    




    toggleDisplay=()=>{ //Instance Method Declaration
        this.setState(
            {
                show:!this.state.show
            }
        )
    };

    render()
    //Defines JSX Code that generates react elements when Component Renders
    {
        return(
            <div>
                <button onClick={this.toggleDisplay}>Click me to toggle</button>
                <div>{this.state.show?(<div>{this.props.text}</div>):"No Notifications"}</div>
            </div>
        )
    }
}

export default Notification;