import express from "express";
import { SongService } from "../Services/SongService.js";

const songService = new SongService()

export const SongRouter = express.Router()

SongRouter.get("/", async (_, res) => res.send(songService.getAllSongs()))

SongRouter.post("/", async (req, res) => {
    try {
        const { data } = req.body;
        res.send(await songService.createSong(data))
    } catch (error) {
        res.status(400).send(error)
    }
})