function ColoredIcon({name, width}) {

    const req = require(`./iconComponents/${name}.js`);
    const IconComponent = req.default

    if (!req.default) {
        return null
    }

    return (
        <IconComponent width={width}/>
    )
}

export default ColoredIcon