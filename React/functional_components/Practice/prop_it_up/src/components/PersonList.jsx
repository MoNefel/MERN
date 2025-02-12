import PerssonCard from "./PersonCard"; // Importing the PerssonCard component

// Defining the ListPerson functional component and accepting props
const ListPerson = (props) => {
    // Alternatively, we can destructure the props as ({card}) and then use card.map
    return(
        <>
        {/* Mapping over the card array and rendering a PerssonCard for each element */}
        {props.card.map((el, i) => <PerssonCard key={el.id} el={el}/>)}
        {/* Another way to map over the card array using index as the key */}
        {/* {card.map((el, i) => <PerssonCard key={i} el={el}/>)} */}
        </>
    )
}

// Exporting the ListPerson component as the default export
export default ListPerson;