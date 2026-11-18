import React,{ createContext, useContext,useState,useEffect} from "react";

export interface PokemonCard {
    id: number;
    name: string
    type: string;
    image: string;
    isFavorite?: boolean;

}
export interface Trainer {
    id: number;
    FullName: string;
    document: { type: string; dni: string};
    dateRegister: string;
}


interface PokemonContextType {
    entrenadores: Trainer[];
    entrenadorActivo: Trainer | null;
    mochilaActual: PokemonCard[];
    guardarPokemonEnMochila: (pokemon: PokemonCard) => void;
    registrarEntrenador: (usuario: Trainer) => void;
    seleccionarEntrenador: (usuario: Trainer) => void;
    seleccionarFavorito: (pokemonId: number) => void;
    eliminarPokemonDeMochila: (pokemonId: number) => void;

}
const PokemonContext = createContext<PokemonContextType | undefined>(undefined);
export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [entrenadores, setEntrenadores] = useState<Trainer[]>([]);
    const [entrenadorActivo, setEntrenadorActivo] = useState<Trainer | null>(null);
    const [mochilaActual, setMochilaActual] = useState<PokemonCard[]>([]);
    //Cargar de la base de datos los guardados
    //Funciones seleccionar y resgistrar
}