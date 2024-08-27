function ContactIcon({path, width, darkMode}) {
    const color = darkMode === true ? "#A7A7A7" : "#666666"

    return(
        <svg width={width} height={width} viewBox={`0 0 ${width} ${width}`} xmlns="http://www.w3.org/2000/svg">
            <path d={path} fill={color}/>
        </svg>
    )
}

export default ContactIcon