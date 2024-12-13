import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AppSelect({ userList, selectedUser, handleSelectedUser }) {


    const handleChange = (event) => {
        handleSelectedUser(event.target.value);
    };

    return (
        <Box sx={{ marginTop: 5 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedUser}
                    label="Select User"
                    onChange={handleChange}
                >
                    {
                        userList.map((user) => <MenuItem value={user.email}>{user.email}</MenuItem>)
                    }

                </Select>
            </FormControl>
        </Box>
    );
}