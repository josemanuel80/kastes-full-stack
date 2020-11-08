export const getAllFilms=async()=>{
    const response=await fetch('http://localhost:5000/film');
    return await response.json();
};