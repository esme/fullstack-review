import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Most Popular Repos </h4>
    There are {props.repos.length} repos from the database.
    <div>
      {props.repos.map(el => <Repo repo={el}/>)}
    </div>
  </div>
)

export default RepoList;