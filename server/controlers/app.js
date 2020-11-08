import {createFilm} from '../models/app.js'
import {getAllFilms,updateNewFilm,deleteFilmResource,getFilmById} from '../models/app.js';

export const listOfFilms=async(req,res)=>{
    const filmList=await getAllFilms();
    const films=JSON.parse(filmList);
    res.send(films);
}

export const listById=async(req,res)=>{
    const{params:{id},body,}=req;
    const filmById=await getFilmById(id,body);
    return res.send(filmById);
}

export const postFilm=async(req,res)=>{
    const {body}=req;
    const newFilm=await createFilm(body);
    res.send(newFilm);  
}

export const updateFilm=async(req,res)=>{
    const { params:{id}, body,}=req;
    const newFilm=await updateNewFilm(id, body);
    return res.send(newFilm);
}

export const deleteFilm=async(req,res)=>{
const {params:{id},body,}=req;
const deleteMessage=await deleteFilmResource(id);
return res.send({message:deleteMessage,});
};