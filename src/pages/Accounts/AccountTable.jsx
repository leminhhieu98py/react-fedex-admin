import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';


const AccountTable = props => {
    const data = props.data
    return (
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
                {data.length > 0 ? data.map((row, index) => (
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
                )) : <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell colSpan={4} style={{textAlign: "center"}}>
                        Không tìm thấy dữ liệu
                    </TableCell>
                </TableRow>}
            </TableBody>
        </Table>
    )
}

export default AccountTable