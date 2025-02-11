import PersonCard from "./PersonCard";

const PresonList = ({persons}) => {
    return(
        <div>
            {persons.map((el, i) => <PersonCard key={i} el={el}/>)}
        </div>
    )
}


export default PresonList;