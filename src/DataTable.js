import React, { Component } from 'react';
import './DataTable.css';

class DataTable extends Component {
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
                            return <TableRow key={row.id} row={row} />
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.description}</td>
                <td>
                    <button className="btn btn-sm btn-secondary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default DataTable;