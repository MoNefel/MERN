import PersonCard from "./PersonCard";

const PresonList = ({ persons }) => {
    return (
        <div>
            {/* Map through the persons array and render a PersonCard for each person */}
            {persons.map((el, i) => <PersonCard key={i} el={el} />)}
        </div>
    )
}

export default PresonList;