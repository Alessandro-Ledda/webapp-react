// import dei componenti dalla libreria di react per montaggio context
import { createContext, useContext, useState } from "react";

// creazione istanza per il content(procedura standard)
const GlobalContext = createContext();

// funzione che genera il provaider esponendo i valori per vrappare app.jsx
function GlobalProvider({ children }) {

    // settagio var di stato per controllo loader
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                // valori da esportare dal context
                isLoading,
                setIsLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

// definiamo un hook per consumare il context
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

// esportiamo il nostro provider ed il nostro hook
export { GlobalProvider, useGlobal }