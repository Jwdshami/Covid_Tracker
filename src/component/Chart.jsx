import { Box, makeStyles } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';



const useStyles = makeStyles({
    constainer: {
        width:'70%',
        marginTop:20


    }

})
const Chart = ({ data: { confirmed, recovered, deaths } }) => {

    const classes = useStyles();

    return (

        <Box className={classes.constainer}>
            {
                confirmed ? (

                    <Bar
                        data={{
                            labels: ['Infected', 'Recovered', 'Deaths'],
                            datasets: [{
                                label: 'Peoples',
                                data: [confirmed.value, recovered.value, deaths.value],
                                backgroundColor: [
                                    'rgba(0, 0, 255, 0.5)',
                                    'rgba(0, 255, 0, 0.5)',
                                    'rgba(255, 0, 0, 0.5)',

                                ],

                            }]
                        }}
                        options={{
                            legend: { display: false },
                            titles: { display: true, text: 'Current State in Country' }


                        }

                        }

                    />) : ''
            }
        </Box>


    )
}
export default Chart;