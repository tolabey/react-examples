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
                        src="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/35/3f/89/353f890b-053b-f555-de55-65f95f2cfb44/AppIcon-1x_U007emarketing-85-220-4.png/246x0w.jpg"
                        alt=""
                    />
                </div>
            );
        }
        else if(firm === "starbuck") {
            firmUI = (
                <div className={"starbuck"}>
                    <img
                        src={"data:image/png;base64,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"}
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