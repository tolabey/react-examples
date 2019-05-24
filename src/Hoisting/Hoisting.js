import React from "react";

export default class Hoisting extends React.Component {

    hoistingWithVar() {
        console.log("----------------START var------------");
        console.log("trying to log X variable before declaration", x);
        var x = 3;
        console.log("expected: undefined");
        console.log("trying to log X variable after declaration", x)
        console.log("expected: 3 ");
        console.log("----------------END var------------");
    }

    hoistingWithLet(value) {
        var myVariable = 'Value 1';
        if (value) {
            /**
             * temporal dead zone for myVariable
             */
            // Throws ReferenceError: myVariable is not defined
            console.log(myVariable);
            let myVariable = 'Value 2';
            // end of temporary dead zone for myVariable
            console.log(myVariable); // => 'Value 2'
            return true;
        }
        return false;
    }

    hoistingWithConst() {
        console.log("----------------START let------------");
        console.log("trying to log X variable before declaration", x);
        const x = 3;
        console.log("expected:  Error");
        console.log("trying to log X variable after declaration", x)
        console.log("expected: 3");
        console.log("----------------END var------------");

    }

    render() {
        this.hoistingWithVar();
        this.hoistingWithLet(1);
        this.hoistingWithConst();
        return (
            <div>
                <h1>{"Hoisting Example with console logs"}</h1>
            </div>
        )
    }
}