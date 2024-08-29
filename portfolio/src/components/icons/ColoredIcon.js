function ColoredIcon({name, width}) {

    const req = require(`./iconComponents/${name}.js`);
    const IconComponent = req.default

    return (
        <IconComponent width={width}/>
    )
}

export default ColoredIcon