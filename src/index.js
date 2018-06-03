import React, { Component, Fragment } from 'react';
import ReactDOM from "react-dom";
import LoginForm from './components/LoginForm';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { SubmissionError } from 'redux-form';

const reducers = {form: formReducer};
const reducer = combineReducers(reducers);
let store = createStore(reducer); 

class App extends Component {
    submit = inputs => {
        console.log(inputs);
        if (['ionut'].includes (inputs.username)) {
            throw new SubmissionError ({
              username: 'Username already taken',
            });
          } else {
            window.alert (JSON.stringify (inputs));
          }

    };
    
    get initialValues() {
        return {
            username: 'Ionut',
            password: ''
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Geeky Form</h1>
                <LoginForm 
                    onSubmit={this.submit} 
                    initialValues={this.initialValues}
                />
            </Fragment>
        );
    }
}

export default App;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);