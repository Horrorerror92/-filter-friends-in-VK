// including base styles
import './styles/layout/base.css';
import './styles/index.css';
import './styles/layout/fonts.css';

//including blocks styles
import './styles/blocks/logo.css';
import './styles/blocks/friends-container.css';
import './styles/blocks/friendsfilter.css';
import './styles/blocks/header.css';
import './styles/blocks/search.css';
import './styles/blocks/friends.css';
import './styles/blocks/footer.css';
import './styles/blocks/list.css';
import './styles/blocks/choicelist-and-myfriends.css';


//including templates


//including js
import { dnd } from './js/dnd';
import { ApiVk } from './js/ApiVk'; 
import { addButton } from './js/addButton';
import { removeButton }  from './js/removeButton';
import { SaveInlocalStorage } from './js/SaveInlocalStorage';
import { searchFilter } from './js/searchFilter';

//void js
dnd();
ApiVk();
addButton();
removeButton();
SaveInlocalStorage();
searchFilter();
