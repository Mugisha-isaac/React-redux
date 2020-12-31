import React from 'react';
import {connect} from 'react-redux';
const mapStateToProps = state =>{
    return {articles:state.articles};
}

const connectedList = ({ articles }) =>(
    <ul>
        {articles.map(ele=>{
            return <li key={ele.id}>{ele.title}</li>
        })}
    </ul>
)

const List = connect(mapStateToProps)(connectedList)
export default List;