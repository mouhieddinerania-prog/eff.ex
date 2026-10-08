import React from 'react';

function Evenements({ evenements }) {
  const totalGlobal = evenements.reduce(
    (acc, ev) => acc + ev.cout_journalier * ev.durée,
    0
  );

  return (
    <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Thème</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Description</th>
          <th>Coût journalier</th>
          <th>Durée (jours)</th>
          <th>Coût Total Evénement</th>
        </tr>
      </thead>
      <tbody>
        {evenements.map((ev, index) => {
          const coutTotalEvenement = ev.cout_journalier * ev.durée;
          return (
            <tr key={index}>
              <td>{ev.thème}</td>
              <td>{ev.date_debut}</td>
              <td>{ev.date_fin}</td>
              <td>{ev.description}</td>
              <td>{ev.cout_journalier} DH</td>
              <td>{ev.durée}</td>
              <td>{coutTotalEvenement} DH</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="7">
            Total des couts des événements assurés est : {totalGlobal} DH
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Evenements;