import React, { useState } from "react";
import HeaderTitle from "../../components/UI/HeaderTitle/HeaderTitle";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import AccountTable from "./AccountTable";
import AccountSearch from "./AccountSearch";

const Accounts = () => {
    const data = [
        {
            name: "Hieu test 1",
            phone: "0123456789",
            email: "hieutest1@gmail.com",
        },
        {
            name: "Hieu test 2",
            phone: "0123456788",
            email: "hieutest2@gmail.com",
        },
        {
            name: "Hieu test 3",
            phone: "0123456787",
            email: "hieutest3@gmail.com",
        },
        {
            name: "Hieu test 4",
            phone: "0123456786",
            email: "hieutest4@gmail.com",
        },
    ]

    const [filterData, setFilterData] = useState(data)

    const handleSearch = (searchInput) => {
        if (searchInput === "") {
            setFilterData(data)
            return
        }
        setFilterData(data.filter(row => row.phone.includes(searchInput) || row.email.includes(searchInput)))
    }

    return (
        <>
            <HeaderTitle>Quản lý tài khoản</HeaderTitle>
            <AccountSearch onSearch={handleSearch} />
            <TableContainer component={Paper} style={{marginTop: "50px"}}>
                <AccountTable data={filterData} />
            </TableContainer>
        </>
    )
}

export default Accounts