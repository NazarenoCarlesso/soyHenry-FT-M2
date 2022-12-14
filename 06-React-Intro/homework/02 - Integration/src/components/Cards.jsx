import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(character => {
         const { name, species, genre, image, onClose } = character
         return (<Card name={name} species={species} genre={genre} image={image} onClose={onClose}></Card>)
      })}
   </div>;
}
