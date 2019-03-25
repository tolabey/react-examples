import chai from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from "../Menu";
import React from "react";

// Configure Enzyme for the appropriate React adapter
Enzyme.configure({ adapter: new Adapter() });

var assert = chai.assert;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            const wrapper = Enzyme.shallow(<Menu />);
            console.log('TOLA', wrapper.debug());
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});