import { AlertProvider } from "./AlertContext";
import { AuthContextProvider } from "./AuthContext/inde";
import { UserContextProvider } from "./UserContext";

interface ContextProps{
    children: React.ReactNode;
}

export default function Context({children}:ContextProps){
    return(
        <AlertProvider>
            <AuthContextProvider>
                <UserContextProvider>
                    {children}
                </UserContextProvider>
            </AuthContextProvider>
        </AlertProvider>
        
    )
}