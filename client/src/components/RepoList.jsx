import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Most Popular Repos </h4>
    <p>There are {props.repos.length} repos from the database.</p>
    <div>
      {props.repos.map((el, i) => <Repo key={i} repo={el} index={i}/>)}
    </div>
  </div>
)

export default RepoList;