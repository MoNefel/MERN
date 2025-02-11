import Card from 'react-bootstrap/Card';

const PerssonCard = ({el}) => {
    return (
    <Card border="success" style={{ width: '18rem' }}>
        <Card.Header style={{fontSize:'20px', fontWeight:'bold'}}>{el.lastName}, {el.firstName}</Card.Header>
        <Card.Body>
          <Card.Title>{el.age}</Card.Title>
          <Card.Text>{el.hairColor}</Card.Text>
        </Card.Body>
    </Card>
    );
}

export default PerssonCard;