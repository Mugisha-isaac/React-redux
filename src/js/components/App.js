import React from 'react';
import List from './List';
import Form from '../Form';

const App = () =>{
    return<>
    <div>
        <h4>articles</h4>
        <List/>
    </div>
    <div>
        <h5>Add new article</h5>
        <Form/>
    </div>
    </>
}

export default App;