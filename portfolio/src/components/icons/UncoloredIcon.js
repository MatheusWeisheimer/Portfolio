import { DARKMODE_FILL, LIGHTMODE_FILL } from "../../utils/constants"

function UncoloredIcon({name, darkMode, width}) {
    const req = require(`./iconComponents/${name}.js`);
    const IconComponent = req.default

    const color = darkMode ? DARKMODE_FILL : LIGHTMODE_FILL

    return (
        <IconComponent color={color} width={width}/>
    )
}

export default UncoloredIcon