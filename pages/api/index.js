import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng";

const options = {
    params: {
        bl_latitude: "11.847676",
        bl_longitude: "108.473209",
        tr_longitude: "109.149359",
        tr_latitude: "12.838442",
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
