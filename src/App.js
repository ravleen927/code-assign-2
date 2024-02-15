import React, { useState } from 'react';
import { Button } from './stories/Button';
import { Label } from './stories/Label';
import { Text } from './stories/Text';
import { Dropdown } from './stories/Dropdown';
import { RadioButton } from './stories/RadioButton';
import { Card } from './stories/Card'; // Import the Card component
import { Img } from './stories/Img'; // Import the Img component
import './App.css'; // Import your CSS file for styling

function App() {
  // Define options for the RadioButton
  const radioOptions = [
    { id: 'option1', label: 'India' },
    { id: 'option2', label: 'America' },
    { id: 'option3', label: 'Canada' }
  ];

  // Define options for the Dropdown
  const dropdownOptions = [
    { value: '', label: 'Select an option' },
    { value: 'option1', label: 'Mercedes-Benz E-Class' },
    { value: 'option2', label: 'BMW' },
    { value: 'option3', label: 'Tesla Model S' }
  ];

  // State to track selected radio option
  const [selectedRadioOption, setSelectedRadioOption] = useState('');

  // State to track selected dropdown option
  const [selectedDropdownOption, setSelectedDropdownOption] = useState('');

  // Handle selection from the RadioButton
  const handleRadioSelect = (selectedOption) => {
    setSelectedRadioOption(selectedOption);
  };

  // Handle selection from the Dropdown
  const handleDropdownSelect = (selectedOption) => {
    setSelectedDropdownOption(selectedOption);
  };

  return (
    <div className="App">
      <Button label="Click me" onClick={() => alert('Button clicked')} />
      <Label text="This is a label" />
      <Text content="This is some text" />
      <RadioButton options={radioOptions} onSelect={handleRadioSelect} />
      <Dropdown options={dropdownOptions} onSelect={handleDropdownSelect} />
      <Img src="C:/Users/DELL/Pictures/dog.jpg" alt="Dog Image" /> {/* Add the Img component */}
      <Card title="Welcome" content="Thank you for visiting our website!" />
      <Card title="Latest News" content="Check out our latest updates and announcements." />
      <Card title="Featured Product" content="Discover our top-selling product of the month." />
    </div>
  );
}

export default App;
