const FooterListItem = (props) => {
    return(
        <div className="flex text-lg">
            <div className="px-2 hover:cursor-pointer hover:border-b-2">{props.children}</div>
        </div>

    )
}

export default FooterListItem;