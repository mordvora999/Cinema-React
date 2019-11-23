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




            <div className="ui segment" id="search">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Search Movie</label>
                        <div className="ui transparent left icon input">
                            <input type="text" maxLength="30"  placeholder="Search..." value={this.state.term} onChange={this.onInputChange} />
                             <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;