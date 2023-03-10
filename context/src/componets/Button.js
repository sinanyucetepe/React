import {useTheme} from '../context/ThemeContext'

function Button() {
    const {theme, setTheme} = useTheme();

    return  <div > Active Theme : {theme }
    <br /> 
        <button onClick={() =>  setTheme(theme === "light" ? "dark" : "light")} >Change Theme</button> <br />
    </div>;
}

export default Button
