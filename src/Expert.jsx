import React from 'react';
import Evenements from './Evenements';

function Expert({ expert }) {
  return (
    <li>
      <strong>{expert.nom_complet}</strong>
      <Evenements evenements={expert.événements} />
    </li>
  );
}

export default Expert;