import React from "react";
import { Link } from "react-router-dom";

class ReactRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    redirectToSomeWhere() {
        return () => {
            console.log("redirectToSomeWhere");
            this.props.history.push("contacts");
        }
    }

    render() {
        return (
            <div>
                <div onClick={this.redirectToSomeWhere()}>{"3333"}</div>
                <Link to="/scroll-position">
                    <div>{"scroll-position"}</div>
                    <textarea name="textdemo" id="id_unique" cols="30" rows="10">ss</textarea>
                </Link>
            </div>
        )
    }
}

export default ReactRouter;