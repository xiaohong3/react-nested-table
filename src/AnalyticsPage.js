import React, { Component } from 'react';
import DataTable from './DataTable';

class AnalyticsPage extends Component {
    constructor(props) {
        super(props);
        const mockData = [
            {
                id: 2,
                name: 'Entry 1',
                description: 'This is some testing data 2'
            },
            {
                id: 3,
                name: 'Entry 2',
                description: 'This is some testing data 3'
            }
        ];
        this.state = {
            data: mockData
        };
    }

    render() {
        let dataTableWrapper;

        if (this.state.data.length > 0) {
            dataTableWrapper = <DataTable data={this.state.data} />;
        } else {
            dataTableWrapper = <div>No data available.</div>
        }

        return (
            <div className="AnalyticsPage">
                {dataTableWrapper}
            </div>
        );
    }
}

export default AnalyticsPage;