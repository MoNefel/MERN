import PerssonCard from "./PersonCard";

const ListPerson = (props) => {
    //or we can accept the props as ({card}) and then use card.map
    return(
        
        <>
        {props.card.map((el,i,t)=> <PerssonCard key={el.id} el={el}/>)}
        {/* {card.map((el,i,t)=> <PerssonCard key={i} el={el}/>)} */}
        </>
    )
}

export default ListPerson;