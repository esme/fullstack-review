import React from 'react';

const Repo = (props) => (
  <div>
    <a style={{textDecoration: 'none', color: '#444', fontWeight: 'bold'}} href={props.repo.html_url}>{props.repo.name}</a>
    <span style={{color: '#bbb'}}>@{props.repo.login}</span>
    {/* <p>{props.repo.stargazers_count}</p>
    <p>{props.repo.forks_count}</p> */}
  </div>
)

export default Repo;