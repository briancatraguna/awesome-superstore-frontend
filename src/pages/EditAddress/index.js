import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { ROUTE_PATHS } from "../../routing/routes";
import { useEffect, useState } from "react";
import { getAddressById } from "../../api/apiService";


const EditAddress = () => {
    const navigate = useNavigate();
    const [searchParams, _] = useSearchParams();

    const [addressId, setAddressId] = useState(null);

    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState(null);

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    const [postalCode, setPostalCode] = useState("");

    useEffect(() => {
        if (!searchParams.get("addressId")) {
            navigate(ROUTE_PATHS.userProfile);
        } else {
            setAddressId(searchParams.get("addressId"));
        }
    }, [searchParams, navigate]);

    useEffect(() => {
        const prepopulateAddress = async () => {
            if (addressId !== null) {
                const response = await getAddressById(addressId);
                console.log(response);
            }
        }
        prepopulateAddress();
    }, [addressId])

    return (
        <>
        </>
    )
}

export default EditAddress;