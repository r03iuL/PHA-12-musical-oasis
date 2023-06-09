import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Outlet>
               <p>hello world</p> 
            </Outlet>
            
        </div>
    );
};

export default Root;