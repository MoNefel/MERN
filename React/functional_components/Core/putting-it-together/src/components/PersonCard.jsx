import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const PersonCard = ({el}) => {
    
    // Destructure the properties from the person object
    const {firstName, lastName, age, hairColor} = el;
    // State to keep track of the current age
    const [currentAge, setCurrentAge] = useState(age);

    // Function to increase the age by 1
    const increaseAge = () => {
        setCurrentAge(currentAge + 1);
    }
    
    return(
        <div>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>{lastName}, {firstName}</Card.Header>
                <Card.Body>
                    {/* Display the current age */}
                    <Card.Title>{currentAge}</Card.Title>
                    {/* Display the hair color */}
                    <Card.Text>{hairColor}</Card.Text>
                    {/* Button to increase the age */}
                    <Button variant="primary" onClick={increaseAge}>Increase Age</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PersonCard;