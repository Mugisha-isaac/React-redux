import  { Component } from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';

export  class Posts extends Component {
    componentDidMount(){
        getData();
    }
    render() {
        return <ul>
            {this.props.articles.map(el => (
                <li key={el.id}>{el.title}</li>
            ))}
        </ul>
    }
}

function select(state){
    return {articles:state.remoteArticles.slice(0,10)};
}

export default connect(select,{getData})(Posts)
