import axios from "axios";

const unsplashNewYork = "https://api.unsplash.com/search/photos?page=1&query=newyork&client_id=6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";
export const ImageExport = () => {
    return axios.get(`${unsplashNewYork}`)
}

// const unsplashLondon = "https://api.unsplash.com/search/photos?page=1&query=london&client_id=6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";
// export const ImageExport = () => {
//     return axios.get(`${unsplashLondon}`)
// }

// const unsplashNewDelhi = "https://api.unsplash.com/search/photos?page=1&query=new delhi&client_id=6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";
// export const ImageExport = () => {
//     return axios.get(`${unsplashNewDelhi}`)
// }