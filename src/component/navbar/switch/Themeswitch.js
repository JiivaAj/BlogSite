
import'./Themeswitch.css';
import useThemeContext from "../../../hookss/useThemeContext";
const Themeswitch = () => {

    const {theme,dispatch} = useThemeContext()

    const switchTheme = ()=>{
        
        if(theme === 'light'){
            dispatch({type:'DARK'})
        }
        else{
            dispatch({type:'LIGHT'})
        }
        console.log(theme)
    }
  return (
    <div className="container ">
    <div className="form-check form-switch toggle">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault" 
        onClick={switchTheme}
      />
    </div>
    </div>
  );
};

export default Themeswitch;
