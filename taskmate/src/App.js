import TaskList from './components/TaskList';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
