import React from 'react';

export const Response = ({
  entity,
  headers
}) => (
  <div class="container-fluid">

    <div class="panel panel-heading">headers</div>
    <ul class="panel panel-body">
      {Object.keys(headers).map((key, i) => <li key={i}><b>{key}</b>: {headers[key]}</li>)}
    </ul>

    <div class="panel panel-heading">entity</div>
    <div class="panel panel-body">
      <pre>{entity}</pre>
    </div>
  </div>
);
