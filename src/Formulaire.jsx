import React, { useState } from 'react';

function Formulaire() {
  const [theme, setTheme] = useState('Développement web');
  const [dateDebut, setDateDebut] = useState('2024-04-01');
  const [dateFin, setDateFin] = useState('2024-04-04');
  const [cout, setCout] = useState(500);
  const [expert, setExpert] = useState('DUPONT Jean');

  const [resultat, setResultat] = useState(null);

  const handleConfirm = (e) => {
    e.preventDefault();

    const start = new Date(dateDebut);
    const end = new Date(dateFin);
    const diffTime = Math.abs(end - start);
    const dureeJours = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const coutTotal = dureeJours * Number(cout);

    setResultat({
      expert,
      theme,
      cout,
      dureeJours,
      coutTotal
    });
  };

  return (
    <div style={{ border: '1px solid #000', padding: '10px', width: '500px' }}>
      <h3>Formulaire de l'événement</h3>
      <form onSubmit={handleConfirm}>
        <div style={{ marginBottom: '5px' }}>
          <label>Thème : </label>
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Date de début : </label>
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Date de fin : </label>
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Coût : </label>
          <input
            type="number"
            value={cout}
            onChange={(e) => setCout(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Expert : </label>
          <input
            type="text"
            value={expert}
            onChange={(e) => setExpert(e.target.value)}
          />
        </div>
        <button type="submit">Confirmer</button>
      </form>

      {resultat && (
        <div style={{ marginTop: '10px' }}>
          l'expert:{resultat.expert} assurera le thème: {resultat.theme}.avec un coût journalier: {resultat.cout} DH.pour une durée de : {resultat.dureeJours} jours,soit un coût total de:{resultat.coutTotal}DH
        </div>
      )}
    </div>
  );
}

export default Formulaire;