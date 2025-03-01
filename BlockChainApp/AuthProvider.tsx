import React, { Children, createContext,useState,useContext } from "react"

interface AuthContextType  {
    username : string | null,
    setUsername : (username : string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
        const [username , setUsername] = useState<string | null>(null);
        return <AuthContext.Provider value={{username , setUsername}}>
        {children}

        </AuthContext.Provider>

}

export const UserAuth = () => {
   const context = useContext(AuthContext);

   if(!context){
    throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
}