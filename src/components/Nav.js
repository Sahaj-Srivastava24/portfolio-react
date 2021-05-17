import { useContext,useCallback } from 'react';
import { LoaderContext } from './PreloaderContext'
import { CursorContext } from './CursorContextProvider'
import { useHistory, useLocation } from 'react-router-dom'
import '../scss/nav.css';

const Nav = () => {
    const history = useHistory();
    const loc = useLocation();
    const [ , setCursor ] = useContext(CursorContext);
    const [ , setTriggerOutro ] = useContext(LoaderContext);
    
    function handleNav(str){
        if(str !== loc.pathname){
            setTriggerOutro(true);
            setTimeout(()=> {
                history.push(str);
            },2000)
        }
    }

    const handleCursorScale = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    });

    return ( 
        <nav>
            <div className="row"  
            onClick={()=>{handleNav('/')}}
            onMouseEnter = {handleCursorScale}
            onMouseLeave = {handleCursorScale}>
                <div className="wrap">
                    <div className="left">Sahaj Srivastava</div>
                    <div className="right">mad1ad</div>  
                </div>
            </div>

            <div className="right_res"
            onMouseEnter = {handleCursorScale}
            onMouseLeave = {handleCursorScale}>
                <a href="#">
                    <span onClick={()=>{handleNav('/resume')}}>Resume</span>
                </a>
            </div>
        </nav>
     );
}
 
export default Nav;