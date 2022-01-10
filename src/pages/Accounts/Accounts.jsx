import React from "react";
import HeaderTitle from "../../components/UI/HeaderTitle/HeaderTitle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Accounts = () => {
    const data = [
        {
            name: "Hieu test 1",
            phone: "0123456789",
            email: "hieutest@gmail.com",
        },
        {
            name: "Hieu test 2",
            phone: "0123456788",
            email: "hieutest@gmail.com",
        },
        {
            name: "Hieu test 3",
            phone: "0123456787",
            email: "hieutest@gmail.com",
        },
        {
            name: "Hieu test 4",
            phone: "0123456786",
            email: "hieutest@gmail.com",
        },
    ]


    return (
        <>
            <HeaderTitle>Quản lý tài khoản</HeaderTitle>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Stt</TableCell>
                            <TableCell>Tên tài khoản</TableCell>
                            <TableCell>Sđt</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={row.phone}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    {index + 1}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Accounts