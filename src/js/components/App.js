import React from 'react';
import List from './List';
import Form from '../Form';
import Posts from './Posts';

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
    <div>
        <h5>APi posts</h5>
        <Posts/>
    </div>
    </>
}

export default App;