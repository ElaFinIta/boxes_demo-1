import React, { Component } from 'react';

// use a class component for INPUT, we want STATES
class Form extends Component {
    state = {
        spell: "",  // by default empty, because input empty
        house: "",
        animal: "",
        year: "",
    };


    magicHandler = (event) => {
        this.setState({
            // the brakjet notation: will make a new key if the state does not exist... some side effects...
            [event.target.name]: event.target.value,  // event is onChange, all those are target, so it checks tha name
        })
    }


    render() {
        return (
            <div>
                <p>Spell</p>
                <input type="text" name="spell" onChange={this.magicHandler}/>
                <p>House</p>
                <input type="text" name="house" onChange={this.magicHandler}/>
                <p>Animal</p>
                <input type="text" name="animal" onChange={this.magicHandler}/>
                <p>Year</p>
                <input type="text" name="year" onChange={this.magicHandler}/>
                <p>Spell: {this.state.spell}</p>
                <p>House: {this.state.house}</p>
                <p>Animal: {this.state.animal}</p>
                <p>Year: {this.state.year}</p>
            </div>

        );
    }
};
  
export default Form;