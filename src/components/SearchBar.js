import React from 'react';

class SearchBar  extends React.Component {

    state = { term: ''}

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        if(this.state.term !== ' '){
            console.log("onSubmitForm()")
            this.props.send(this.state.term);
        }
    }

    render() { 
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Moving Search.....</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;