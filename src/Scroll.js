import React from 'react';
import './scroll.scss';
import ScrollPosition from './FACC/ScrollPosition';


class Scroll extends React.Component {

    render() {
        console.log("scroll")
        return (
            <div className="spacer">
                <ScrollPosition>
                    {
                        position => <h1 style={{transform: `rotateY(${position}deg)`}}>
                            {position}
                        </h1>
                    }
                </ScrollPosition>
            </div>
        )
    }
}

export default Scroll;