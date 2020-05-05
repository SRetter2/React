import React from 'react';
import MySecondComponent from './MySecondComponent';

class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>A Story</h1>
                <MySecondComponent />
            </div>
        );
    }
}

export default MyFirstComponent;