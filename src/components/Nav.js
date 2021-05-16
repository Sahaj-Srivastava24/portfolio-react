import { useContext } from 'react';
import { LoaderContext } from './PreloaderContext'
import { useHistory, useLocation } from 'react-router-dom'
import '../scss/nav.css';

const Nav = () => {
    const history = useHistory();
    const loc = useLocation();
    const [ triggerOutro, setTriggerOutro ] = useContext(LoaderContext);
    
    function handleNav(str){
        if(str !== loc.pathname){
            setTriggerOutro(true);
            setTimeout(()=> {
                history.push(str);
            },2000)
        }
    }

    return ( 
        <nav>
            <div className="row"  onClick={()=>{handleNav('/')}}>
                <div className="wrap">
                    <div className="left">Sahaj Srivastava</div>
                    <div className="right">mad1ad</div>  
                </div>
            </div>

            <div className="right_res">
                <a href="#">
                    <span onClick={()=>{handleNav('/resume')}}>Resume</span>
                </a>
            </div>
        </nav>
     );
}
 
export default Nav;