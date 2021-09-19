import { fetchcountries } from "../Service/Api";
import { useEffect, useState } from "react";
import { NativeSelect, Typography } from "@material-ui/core";



const Countries = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([]);



    useEffect(() => {

        const fetchapi = async () => {
            setCountries(await fetchcountries());
        }
        fetchapi();


    }, [])

    return (
        <>
            <Typography style={{ marginBottom: 20 }} variant="h5" color="textSecondary">
                Reported Cases or Deaths By Country or territory
            </Typography>

            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Pakistan</option>
                {countries.map((country, i) => {

                    return (
                        <option key={i} value={country}>{country}</option>
                    )



                })}


            </NativeSelect>

        </>
    )
}

export default Countries;