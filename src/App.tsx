import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  return (
    <Card>
      <CardBody title="Titulo de card" text="Este es el texto de card" />
      <List />
    </Card>
  );
}

export default App;
