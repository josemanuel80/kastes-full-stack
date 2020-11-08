import {promises as fs} from 'fs';
import {v4 as uuidv4} from 'uuid';

export const getAllFilms=async()=>{
    const listFilms=await fs.readFile('./data/data.json');
    return listFilms;
};

export const getFilmById=async(id,data)=>{
    const listFilms=await fs.readFile('./data/data.json');
    const {films}=JSON.parse(listFilms);    
    const filmResource=films.find((item)=>item.id===id);
    return filmResource;
}

export const createFilm=async(data)=>{
    const listOfFilms= await fs.readFile('./data/data.json');
    const {films}=JSON.parse(listOfFilms);
    const newFilm={...data, id:uuidv4()};
    films.push(newFilm);
    await fs.writeFile('./data/data.json', JSON.stringify({films,}),);
    return films;
};

export const updateNewFilm=async(id,data)=>{
    const listFilms=await fs.readFile('./data/data.json');
    const {films}=JSON.parse(listFilms);
    const filmResource=films.find((item)=>item.id===id);
    if (filmResource){
        const index=films.indexOf(filmResource);
        films[index]={...data,id};
        await fs.writeFile('./data/data.json',JSON.stringify({films,}),
     );
     return {...data,id};   
    }else{
        console.log('error');
    };
}

export const deleteFilmResource=async(id)=>{
    const listFilms=await fs.readFile('./data/data.json');
    const {films}=JSON.parse(listFilms);
    const filmResource=films.find((item)=>item.id===id);
    if(filmResource){
        const index=films.indexOf(filmResource);
        films.splice(index,1);
        await fs.writeFile('./data/data.json',JSON.stringify({films,}),);
        return ' resource deleted';
    };
};


