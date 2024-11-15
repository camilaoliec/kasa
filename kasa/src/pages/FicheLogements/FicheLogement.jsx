import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


function FicheLogement() {
    const [data, setData] = useState([]);
    console.log("data", data)

  const fetchData = async () => {
    try {
      const response = await fetch("/logements.json");
      if (!response.ok) throw new Error("Erreur lors du chargement des données");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Erreur lors de la recherche des données :", error)
    }
   };

  useEffect(() => {
    fetchData() 
  }, []);

    const { id } = useParams()
    const appartement = data.find((apt) => apt.id === id);
    console.log("appartement", appartement)
    console.log("id", id)
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
        </div>
    )
}

export default FicheLogement
