import React, { Component } from 'react';
import DataTable from './DataTable';

class AnalyticsPage extends Component {
    render() {
        const data = [
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
        let dataTableWrapper;

        if (data.length > 0) {
            dataTableWrapper = <DataTable data={data} />;
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