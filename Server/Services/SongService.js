import songModel from '../Models/Songs.js'

export class SongService {
    async getAllSongs() {
        return await songModel.find({})
    }

    async createSong(data) {
        const newSong = new songModel(data);
        await newSong.save()
        return newSong
    }

}