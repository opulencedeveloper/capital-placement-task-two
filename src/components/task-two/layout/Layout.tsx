import { ChildrenProps } from "../../../../shared/types";
import Navigation from "./Navigation";


const Layout: React.FC<{ children: ChildrenProps }> = ({ children }) => {
    return (
        <div className="flex">
            <Navigation />
            {children}
        </div>
    );
};

export default Layout;