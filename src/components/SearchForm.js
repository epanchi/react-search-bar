import React, { Component } from 'react'

export class SearchForm extends Component {
    state = {
        inputMovie:''
    }
    _handleChange=(e)=>{
        this.setState({ inputMovie:e.target.value})
    }
    
    // Accediendo al STATE utilizando objeto this, creamos una arroy function
    _handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.inputMovie)
    }
    render(){
        return (
            <form  onSubmit={this._handleSubmit} >
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input" 
                        type="text" 
                        onChange={this._handleChange}
                        placeholder="Find a repository"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}