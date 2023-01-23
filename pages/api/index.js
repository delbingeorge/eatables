import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

const options = {
    params: {
        bl_latitude: "0",
        tr_latitude: "0",
        bl_longitude: "0",
        tr_longitude: "0",
        //    bl_latitude: "11.847676",
        //    tr_latitude: "12.838442",
        //    bl_longitude: "109.095887",
        //    tr_longitude: "109.149359",
    },
    headers: {
        "X-RapidAPI-Key": "58bbc898ccmsh113e658b8f2033ap17f88ajsnf1eedfe3f8e7",
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
