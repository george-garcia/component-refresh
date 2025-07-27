import Button from "./components/Button";
import Accordion from "./components/Accordion";

function App() {

  const items = [
    {
      id: '1',
      label: 'Can I use React on a project?',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, dolores mollitia ab sit nulla veniam nesciunt non illo harum fugit delectus consequuntur molestiae deleniti officia iusto adipisci voluptate quo modi.'

    },
    {
      id: '2',
      label: 'Can I use Javascript on a project?',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, dolores mollitia ab sit nulla veniam nesciunt non illo harum fugit delectus consequuntur molestiae deleniti officia iusto adipisci voluptate quo modi.'

    },
    {
      id: '3',
      label: 'Can I use CSS on a project?',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, dolores mollitia ab sit nulla veniam nesciunt non illo harum fugit delectus consequuntur molestiae deleniti officia iusto adipisci voluptate quo modi.'

    },
  ]
  return <Accordion items={items} />
}

export default App;
