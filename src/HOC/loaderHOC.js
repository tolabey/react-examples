import React, { Component } from 'react';
import './loaderHOC.scss';

const loaderHOC = (WrappedComponent) => {
    return class LoaderHoc extends Component {
        render() {
            return this.props.contacts.length === 0 ? <div className="lds-dual-ring"></div> : <WrappedComponent {...this.props}/>
        }
    }
};

export default loaderHOC;