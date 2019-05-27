import React from "react";
import {connect} from "react-redux";
import I from "immutable";
import actionCreator from "./reduxStore/action";
import Table from "./Table";

class TableWrapper extends React.Component {

    componentDidMount() {
        fetch('https://api.randomuser.me/?nat=us,gb&results=20')
            .then(res => res.json())
            .then(res => {
                this.props.setContactList(res.results);
            });
    }

    render() {
        console.log("contacts", this.props.contacts);
        const table = [
            {
                header: "IMG",
                accessor: "picture",
                width: 30,
                cell: picture => {
                    return (
                        <div className={"thumbnail"}>
                            <img src={`${picture.get("thumbnail")}`} alt="thumbnail"/>
                        </div>
                    )
                }
            } ,
            {
                header: "Name",
                accessor: "name",
                width: 20,
                cell: name => {
                    return (
                        <div className={"name"}>
                            {name.get("first")}
                        </div>
                    )
                }
            } ,
            {
                header: "surName",
                accessor: "name",
                width: 20,
                cell: name => {
                    return (
                        <div className={"name"}>
                            {name.get("last")}
                        </div>
                    )
                }
            } ,
            {
                header: "Name",
                accessor: "email",
                width: 30,
                cell: email => {
                    return (
                        <div className={"name"}>
                            {email}
                        </div>
                    )
                }
            } ,
        ];
        return (
            <div className="table-wrapper">

                <Table
                    table={table}
                    data={this.props.contacts}
                >

                </Table>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        contacts: store.get("contacts", I.Map())
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setContactList: (contacts) => dispatch(actionCreator("SET_CONTACT_LIST", contacts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper);