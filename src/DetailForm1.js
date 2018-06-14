import React, { Component } from 'react';

class DetailForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.data.name,
            description: this.props.data.description
        };
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleOnChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleOnChange.bind(this)}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </div>
            </form>
        );
    }
}

export default DetailForm1;