import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { DataProvider } from "./data";
import { ModalProvider } from "./modal";

interface IPropsContext {
    children: ReactNode
}

const Providers = ( { children }:IPropsContext ) => (
    <DataProvider>
        <ModalProvider>
            <AuthProvider>  
                {children}
            </AuthProvider>   
        </ModalProvider>
    </DataProvider>
)

export default Providers