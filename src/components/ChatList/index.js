import faker from 'faker';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';

const listChat = Array.from({ length: 10 }).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.firstName(),
}));

export function ChatList() {
  return (
    <List>
      {
        listChat.map((item) => (<ListItem key={item.id}>
          <ListItemAvatar >
            <Avatar alt={item.name} src={item.avatar} />
          </ListItemAvatar>
          <ListItemText primary={item.name}/>
        </ListItem>))
      }
    </List>
  )
}