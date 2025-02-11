import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const PersonCard = ({el}) => {

    const {firstName, lastName, age, hairColor} = el;
    const [currentAge, setCurrentAge] = useState(age);

    const increaseAge = () => {
        setCurrentAge(currentAge + 1);
    }
    
    return(
        <div>
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{lastName}, {firstName}</Card.Header>
        <Card.Body>
          <Card.Title>{currentAge}</Card.Title>
          <Card.Text>{hairColor}</Card.Text>
          <Button variant="primary" onClick={increaseAge}>Increase Age</Button>
        </Card.Body>
    </Card>
        </div>
    )
}

export default PersonCard;