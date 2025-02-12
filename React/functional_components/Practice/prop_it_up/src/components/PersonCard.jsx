import Card from 'react-bootstrap/Card'; // Importing the Card component from react-bootstrap

// Defining the PersonCard functional component and destructuring the 'el' prop
const PerssonCard = ({el}) => {

  const {firstName, lastName, age, hairColor} = el; // Destructuring the 'el' prop
  
    return (
    // Using the Card component with a border and width style
    <Card border="success" style={{ width: '18rem' }}>
        {/* Displaying the person's last name and first name in the Card header */}
        <Card.Header style={{fontSize:'20px', fontWeight:'bold'}}>{lastName}, {firstName}</Card.Header>
        <Card.Body>
          {/* Displaying the person's age in the Card title */}
          <Card.Title>{age}</Card.Title>
          {/* Displaying the person's hair color in the Card text */}
          <Card.Text>{hairColor}</Card.Text>
        </Card.Body>
    </Card>
    );
}

// Exporting the PersonCard component as the default export
export default PerssonCard;