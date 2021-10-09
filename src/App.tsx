import { useState } from 'react';
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';
import { Container, Area, Header } from "./styles";
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  }

  const handleUpdateTask = (id: number, done: boolean) => {
    let currentList = [...list];
    const indexList = currentList.map(e => e.id).indexOf(id);

    if (indexList !== -1) {
      currentList[indexList].done = done;
    }
    
    setList(currentList);
  }

  return(
    <Container>
      <Area>
        <Header>
          Lista de Tarefas
        </Header>

        <AddArea onSave={handleAddTask} />

        {list.length > 0 && list.map((item) => (
          <ListItem key={item.id} item={item} onUpdate={handleUpdateTask} />
        ))}

        {
          list.length === 0 && <h1>Sem Atividades Adicionadas </h1>
        }
      </Area>
    </Container>
  );
}

export default App;