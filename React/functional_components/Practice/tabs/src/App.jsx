import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabItems = [
    { label: 'Tab 1', content: 'Tab 1 Content is showing here.' },
    { label: 'Tab 2', content: 'Tab 2 Content is showing here.' },
    { label: 'Tab 3', content: 'Tab 3 Content is showing here.' },
  ];

  return (
    <>
      <Tabs items={tabItems} />
    </>
  );
}

export default App;
