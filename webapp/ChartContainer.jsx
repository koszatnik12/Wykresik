import React, { Component } from 'react';

import Chart from './Chart.jsx';

class ChartContainer extends Component {
    generateRandomeValues(quantity, max = 100) {
        return ([...new Array(quantity)]
        .map((i, index) => ({
            name: index,
            y: Math.round(Math.random() * max),
            z: Math.round(Math.random() * 2 * max),
        })
    ));
    }

    areaData() {
        return this.generateRandomeValues(30);
    }

    render() {
        const data = this.areaData();
        return (<Chart data={data} />);
    }
}
export default ChartContainer;
