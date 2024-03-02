
import './App.css';
import menus from './components/Data';
import TreeView from './components/TreeView';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
