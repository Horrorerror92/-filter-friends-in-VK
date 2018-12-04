// including styles
import './styles/index.css';

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
