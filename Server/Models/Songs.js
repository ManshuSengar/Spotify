import mongoose, { model } from "mongoose";

const SongSchema = mongoose.Schema({
    title: String,
    imageUrl: String,
    artist: String,
    likes: {
        type: Number,
        defaultValue: 0,
    },
    plays: {
        type: Number,
        defaultValue: 0,
    },
})

export default model("Song", SongSchema)