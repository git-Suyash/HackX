import SimpleCard from "./SimpleCard";

function CardGrid() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-10 ">
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
        </div>
    )
}

export default CardGrid