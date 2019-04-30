import React , {Component} from 'react';
import Header from './Header';

// i have not included the addsubscriber.css but it is by default taking the default css from app.css by using webpack
// so we can create a folder with commomn css file for buttons

class AddSubscriber extends Component{

    constructor()
    {
        super();
        this.state = {
            id : 0,
            name:'',
            phone:''
        }
        
    }
    inputChangedHandler = (event) => {
        const state =  this.state
        state[event.target.name]=event.target.value
        this.setState(state)
        console.log(this.state.name);
        

    }

    render(){
       const {name,phone}=this.state     // destructuring
        return (
            <div>
                <Header test1 = "Add subscriber"/>
                <div className = "component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className = "sunscriber-form">
                     <label htmlFor="name" className="label-control">Name:</label><br></br>
                     <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/><br></br>
                     <label htmlFor="phone" className="label-control">Phone:</label><br></br>
                     <input id="name" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}/><br></br>
                     <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added : </span><br></br>
                        <span className="subscriber-info">Name : {name} </span><br></br>
                        <span className="subscriber-info">Phone : {phone}</span><br></br>
                    </div><br></br>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>

            </div>
        )
    }


}

export default AddSubscriber