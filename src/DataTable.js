import React, { Component, Fragment } from 'react';
import './DataTable.css';
import DetailForm1 from './DetailForm1';

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowEdit: -1
        };
    }

    handleRowEdit(id) {
        this.setState({
            rowEdit: id
        });
    }

    render() {
        return (
            <div className="DataTable">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data.map(row => {
                            let isEdit = false;
                            if (row.id === this.state.rowEdit) {
                                isEdit = true;
                            }
                            return <TableRow key={row.id} row={row} edit={isEdit} onEditClick={this.handleRowEdit.bind(this)} />
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    handleEditClick(id, e) {
        this.props.onEditClick(id);
    }

    handleDeleteClick(e) {
        console.log("Delete");
    }

    render() {
        const row = <tr>
            <td>{this.props.row.name}</td>
            <td>{this.props.row.description}</td>
            <td>
                <button className="btn btn-sm btn-secondary" onClick={this.handleEditClick.bind(this, this.props.row.id)}>Edit</button>
            </td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={this.handleDeleteClick.bind(this)}>Delete</button>
            </td>
        </tr>;
        if (this.props.edit) {
            return <Fragment>
                {row}
                <tr>
                    <td colSpan={4}><DetailForm1 data={this.props.row} /></td>
                </tr>
            </Fragment>
        }
        return row;
    }
}

export default DataTable;