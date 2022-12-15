const axios = require("axios");


const playMusic = async (req, res) => {
    try {

        const options = {
            method: 'GET',
            url: 'https://spotify81.p.rapidapi.com/top_200_tracks',
            headers: {
                'X-RapidAPI-Key': '3a726f1ab8mshe8a8d6dd95e222bp1ce3dajsnf9d99c53fa55',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };
        
        let music = axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        //if(!music) return res.status(404).send({message : "Music Does Not Found !!"})
        return res.status(200).send({data : "music"})
    }
    catch (err) {
        return res.send({ message: err.message })
    }
}


module.exports.playMusic = playMusic