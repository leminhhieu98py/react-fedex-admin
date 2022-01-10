import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

const AccountSearch = props => {
    const [emailOrPhone, setEmailOrPhone] = useState("");

    const handleSearch = () => {
        props.onSearch(emailOrPhone.trim())
    };

    return (
        <React.Fragment>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField
                        onKeyUp={(event) => {
                            if (event.keyCode === 13) {
                                handleSearch()
                            }
                        }}
                        onChange={(event) => {
                            setEmailOrPhone(event.target.value.trim());
                        }}
                        fullWidth={true}
                        value={emailOrPhone}
                        type='text'
                        label='Sđt/ Email'
                        variant='standard'
                    />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    xl={3}
                    direction='row'
                    alignItems='flex-end'
                >
                    <Button
                        onClick={handleSearch}
                        style={{ borderRadius: "10px" }}
                        id='searchBtn'
                        variant='outlined'
                        startIcon={<SearchIcon />}
                    >
                        Tìm kiếm
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AccountSearch