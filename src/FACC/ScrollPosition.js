import React from 'react';

class ScrollPosition extends React.Component {

    constructor(props) {
        super(props);
        this.state = { position: null };
    }
    componentDidMount() {
        window.addEventListener('scroll', (event) => this.handleScroll(event))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', (event) => this.handleScroll(event))
    }

    handleScroll(event) {
        const scrollTop = document.documentElement ? document.documentElement.scrollTop :
            document.body.scrollTop;

        console.log(event.srcElement.body.scrollTop);
        this.setState({ position: scrollTop });
    };

    render()  {
        return (
            <div
                className="scroll-value"
            >
                {this.props.children(this.state.position)}
            </div>
        )
    }
}

export default ScrollPosition;