
// this is file style Login
import '../style/Login.css' ; 
// this is file javaScrapt Login  this not install in project 
import '../mianLogin';
export default function Login(){
    return(
        <div id="body">
            <div id="other">
                <div className="frome2">
                    <div id="frome">
                        <h1 id='h1'>Login</h1>
                        <input type="text" id="userName" placeholder="Username"/>
                        <input type="password" id="password" placeholder="Password"/>
                        <input type="checkbox" id="checkbox"/>
                        <label>Remember My</label>
                        <a id='button' href='#'>Login</a>
                        <h6 id="strong">strong</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}


