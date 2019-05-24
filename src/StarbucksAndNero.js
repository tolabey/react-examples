import React from "react";

export default class StarbucksAndNero  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firmaUI: null,
            firm: null,
        }
    }

    setRenderCoffeer(firm) {
        this.setState({firm})
        let firmUI;
        if(firm === "nero") {
            firmUI = (
                <div className={"nero"}>
                    <img
                        src=""
                        alt=""
                    />
                </div>
            );
        }
        else if(firm === "starbuck") {
            firmUI = (
                <div className={"starbuck"}>
                    <img
                        src=""
                        alt=""
                    />
                </div>
            )
        }
        this.setState({firmaUI: firmUI});
    }

    userInfoUI() {
        return this.state.firm !== null && (
            <div className={"save"}>
                <div className={"name"}>
                    <div>{"name"}</div>
                    <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                </div>
                <div className={"surname"}>
                    <div>{"surname"}</div>
                    <input type="text" onChange={(e) => this.setState({surname: e.target.value})}/>
                </div>
                {this.state.firm === "starbuck" &&  <button>{"confirm mernis"}</button>}
                <button className={"kaydet"} onClick={() => this.saveUser()}>{"kaydet"}</button>
            </div>
        )
    }

    saveUser() {
        console.log("userSaved")
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.setRenderCoffeer("nero")} }>{"Nero"}</button>
                <button onClick={() => {this.setRenderCoffeer("starbuck")}}>{"starbuck"}</button>
                {this.state.firmaUI}
                {this.userInfoUI()}
            </div>
        )
    }
}
