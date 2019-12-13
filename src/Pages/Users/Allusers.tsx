import React, { Component } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container,Grid, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
const userList = [
                    {
                        name    : "Shibi",
                        age     : "32",
                        email   : "shibimsnair@gmail.com",
                        place   : "Edava",
                        company : "Technopark",
                        designation : "employee"
                    },
                    {
                        name    : "Sarath",
                        age     : "38",
                        email   : "sarath@gmail.com",
                        place   : "Trivandrum",
                        company : "Technopark",
                        designation : "employee"
                    }
                ]


               
            
class Allusers extends Component<any, any>{
    
    render(){
        return(
            <Container maxWidth="sm">
            <Grid container spacing={1}>
              <Grid container alignItems="flex-start" direction="row" justify="flex-start" item xs={6} spacing={2}> 
            <Paper >
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="center">Place</TableCell>
                            <TableCell align="center">Company</TableCell>
                            <TableCell align="center">Designation</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.place}</TableCell>
                                <TableCell align="right">{row.company}</TableCell>
                                <TableCell align="right">{row.designation}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        onClick={() => this.editData(row)}
                                        variant="contained"
                                        color="primary"
                                    >Edit
                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            </Grid>
            </Grid>
           </Container>
        )
    }
editData(row:any){
console.log('data submit',row);

}
}

export default Allusers