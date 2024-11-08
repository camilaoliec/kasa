import { useState, useEffect } from "react";
import Card from "./Card";

export default function Gallery() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response =await fetch("/data/logement.json");
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


  return (
    <div className="card-box">
      {data.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          picture={logement.cover}
        />
      ))}
    </div>
  )
}

