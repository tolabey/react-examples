import React from "react"
import "./table.scss";

export default class Table extends React.Component {

    renderHeader() {
        const { table } = this.props;

        return (
            <div className="one-row header">
                {
                    table.map(each => {
                        return <div className={each.accessor} style={ {width: each.width + '%'} }>{each.header}</div>
                    })
                }
            </div>
        );
    }

    renderRow() {
        const { table, data } = this.props;

        return data.map(per => {
            return (
                <div className="one-row">
                    {
                        table.map(each => {
                            return (
                                <div className={each.accessor} style={ {width: each.width + '%'} }>
                                    {each.cell ? each.cell(per.get(each.accessor)) : per.get(each.accessor)}
                                </div>
                            )
                        })
                    }
                </div>
            );
        });
    }

    render() {
        return (
            <div id="table">
                {this.renderHeader()}
                {this.renderRow()}
            </div>
        );
    }
}