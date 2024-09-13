import React, { useState } from "react";
import { useEffect } from "react";
import { getAllChacarter } from "../servicios/rymService";
import { Modal, Box, Typography } from "@mui/material";


const CharacterModal = ({ character, open, onClose }) => {
    if (!character) return null;

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography variant="h6" component="h2">
                    {character.name}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Status: {character.status}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Species: {character.species}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Gender: {character.gender}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Origin: {character.origin.name}
                </Typography>
                <img src={character.image} alt={character.name} style={{ with: '100%' }}></img>
            </Box>
        </Modal >
    );
};

export const RickAndMortyList = () => {
    const [rymdata, setRyMData] = useState([]);
    const apiURL = 'https://rickandmortyapi.com/api/character';
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let response = await getAllChacarter(apiURL);
            console.log(response);
            setRyMData(response.results);
        }
        fetchData();
    }, [])

    const handleOpenModal = (character) => {
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    }

    return (
        <div>
            <h1>Rick and Morty List</h1>
            <ul>
                {rymdata.map((rym) => (
                    <li key={rym.id}>
                        <h2>{rym.name}</h2>
                        <p>Status:{rym.status}</p>
                        <img
                            src={rym.image}
                            alt={rym.name}
                            onClick={() => handleOpenModal(rym)}
                            style={{ cursor: 'pointer' }}
                        />
                    </li>
                ))}
            </ul>
            <CharacterModal
                character={selectedCharacter}
                open={!!selectedCharacter}
                onClose={handleCloseModal}
            />
        </div>
    )
}




