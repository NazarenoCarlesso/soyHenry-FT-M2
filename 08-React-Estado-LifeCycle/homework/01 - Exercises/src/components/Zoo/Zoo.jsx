import React from 'react';
import Animals from '../Animals/Animals';
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      species: [],
      allAnimals: []
   })
   const handleInputChange = (event) => {
      setZoo({
         ...zoo,
         zooName: event.target.value,
      })
   }
   React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
         .then((res) => res.json())
         .then((data) =>
            setZoo({
               ...zoo,
               animals: data.animals,
               species: data.species,
               allAnimals: data.animals,
            })
         )
         .catch((error) => console.log(error));
         // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   const handleSpecies = (event) => {
      const specie = event.target.value
      const animals = zoo.animals.filter(a => a.specie === specie)
      setZoo({
         ...zoo,
         animals: animals
      })
   }
   const handleAllSpecies = () => {
      setZoo({
         ...zoo,
         animals: zoo.allAnimals
      })
   }
   return (
      <div>
         <label>Zoo Name:</label>
         <input value={zoo.zooName} onChange={handleInputChange}></input>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
         <Animals animals={zoo.animals}/>
      </div>
   );
}
