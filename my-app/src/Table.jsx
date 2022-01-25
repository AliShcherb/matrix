import React from 'react';

class Table extends React.Component {
    props;
    render () {
        const {data} = this.props;

        return (
            <table style={{textAlign: "center"}}>
                <tbody>
                    {data.map((rows, i) => (
                        <tr key={i}>
                        {rows.map((row, j) => (
                            <td key={j}>{row}</td>
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Table;