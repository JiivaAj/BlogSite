import './AppsubmitButton.css'
import useThemeContext from "../../../hookss/useThemeContext";


const AppsubmitButton = ({onClick,title}) => {

  const {theme} = useThemeContext()

  return (
    <button type='submit' onClick={onClick} className={`btn ${theme}btn`}>{title}</button>
  )
}

export default AppsubmitButton