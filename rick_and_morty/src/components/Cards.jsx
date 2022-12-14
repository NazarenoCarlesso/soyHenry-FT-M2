import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(character => (<Card props={character}></Card>))}
   </div>;
}
