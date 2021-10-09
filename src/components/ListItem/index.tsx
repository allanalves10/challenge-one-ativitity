import { Item } from '../../types/Item';
import { Container } from './styles';

type Props = {
    item: Item;
    onUpdate: (id: number, done: boolean) => void;
}

export const ListItem = ({item, onUpdate}: Props) => {
    return(
        <Container  done={item.done}>
            <input type="checkbox" checked={item.done} onChange={e => onUpdate(item.id, e.target.checked)} />
            <label>{item.name}</label>
        </Container>
    );
}