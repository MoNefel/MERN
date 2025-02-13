import './App.css';
import Tabs from './components/Tabs';

function App() {
  // Array of tab items with labels and content
  const tabItems = [
    { label: 'Tab 1', content: 'Tab 1 Content is showing here.' },
    { label: 'Tab 2', content: 'Tab 2 Content is showing here.' },
    { label: 'Tab 3', content: 'Tab 3 Content is showing here.' },
  ];

  return (
    <>
      {/* Tabs component to display the tab items */}
      <Tabs items={tabItems} />
    </>
  );
}

export default App;
