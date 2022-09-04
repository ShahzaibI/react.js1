import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      {/* <Todo text='Learn React'></Todo>
      <Todo text='Master React'></Todo>
      <Todo text='Explore the full React course'></Todo> */}
      {/* Same as above */}
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Explore the full React course' />
    </div>
  );
}

export default App;