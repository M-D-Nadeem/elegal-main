const CardContainer = (props) => {
    return(
        <div className="w-72 lg:w-full flex flex-col max-w-screen-2xl">
            <div className="title text-2xl font-bold">{props.title}</div>
            <div className="subtitle text-lg font-light mb-4">{props.subtitle}</div>
            <div className="flex flex-wrap gap-8">
                {props.children}
            </div>
        </div>
    )
}

export default CardContainer;