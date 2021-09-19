import {Grid, CardContent , Box,Typography,Card,makeStyles} from "@material-ui/core";
import CountUp from "react-countup";

const useStyles=makeStyles({
    header:{
        background:'skyBlue',
        padding:10
    }
})


const CardComponenet = ({cardTitle,value,desc,lastUpdate}) => {
    const classes= useStyles();
    return (
        <Grid component={Card} style={{margin:20,borderBottom:'10px solid skyBlue'}}>
           <Box className={classes.header}>
           <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
           </Box>
           <CardContent>
               
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={2} separator=','/>
 
                </Typography>

                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                </CardContent>
        </Grid>

       

    );

   
}

export default CardComponenet;