import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import "./DashBoard.css";
import { TextField } from '@mui/material';

function DashBoard() {

    const [users, setUsers] = useState([{ id: "44", email: "abc@123.com", company: "quantilytics", type: "Company", logo: "Logo", view: "Eye", delete: "del" },
    { id: "45", email: "123@123.com", company: "quantilytics", type: "Company", logo: "Logo", view: "Eye", delete: "del" },
    { id: "44", email: "def@123.com", company: "quantilytics", type: "Company", logo: "Logo", view: "Eye", delete: "del" }])

    return (
        <div className="main">
            <div>
                <div>
                    <h1 style={{marginTop:"0px"}}>Super Admin</h1>
                </div>
                <hr style={{color:'#969ba0' , width:"100%"}} />
                <br />
                <br />
                <div>
                    <p style={{color:'#969ba0'}}>Search:</p>
                    <TextField
                        // sx={{height:"20px"}}
                        type='search'
                    />
                </div>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "#969ba0", fontWeight: "bold" }}>Id</TableCell>
                                <TableCell align="left" sx={{ color: "#969ba0", fontWeight: "bold" }}>Email Id</TableCell>
                                <TableCell align="left" sx={{ color: "#969ba0", fontWeight: "bold" }}>Company Name</TableCell>
                                <TableCell align="left" sx={{ color: "#969ba0", fontWeight: "bold" }}>Type</TableCell>
                                <TableCell align="left" sx={{ color: "#969ba0", fontWeight: "bold" }}>Logo</TableCell>
                                <TableCell align="left" sx={{ color: "#969ba0", fontWeight: "bold" }}>View</TableCell>
                                <TableCell align="left" sx={{ color: "#969ba0", fontWeight: "bold" }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((eachUser, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ color: "#969ba0" }}>
                                        {eachUser.id}
                                    </TableCell>
                                    <TableCell align="left" sx={{ color: "#969ba0" }}>{eachUser.email}</TableCell>
                                    <TableCell align="left" sx={{ color: "#969ba0" }}>{eachUser.company}</TableCell>
                                    <TableCell align="left" sx={{ color: "#969ba0" }}>{eachUser.type}</TableCell>
                                    <TableCell align="left" sx={{ color: "#969ba0" }}><Avatar src='https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1572711304319-K2K7Y2PKAW0QVJLQGVW7/Atlanta-Professional-Headshots-1.jpg' /></TableCell>
                                    <TableCell align="left" sx={{ color: "#969ba0" }}><RemoveRedEyeIcon color='primary' /></TableCell>
                                    <TableCell align="left" sx={{ color: "#969ba0" }}><DeleteIcon style={{ color: "red" }} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
export default DashBoard;