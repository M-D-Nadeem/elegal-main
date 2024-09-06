const FooterList = (props) => {
    return(
        <div className={`${props.className} flex flex-col `}>
            <div className="title text-xl font-extrabold px-2">{props.title}</div>
            <div className="items flex flex-col mt-2">
                {props.children}
            </div>
        </div>

    )
}

export default FooterList;