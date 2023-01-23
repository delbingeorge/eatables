import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

const options = {
    params: {
        latitude: "12.861454",
        longitude: "74.851650",
    },
    headers: {
        "X-RapidAPI-Key": "0e97b8c780msh87eb09389299fb4p1b3d66jsn67cc0885f34c",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
};

export const getPlacesData = async () => {
    try {
        const {
            data: { data },
        } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error);
    }
};
