import React, { Component } from 'react';

class DetailForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                name: '',
                description: ''
            }
        };
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.value.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" value={this.state.value.description}></textarea>
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}

export default DetailForm1;