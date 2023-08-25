import SongModel from '../Models/Songs.js'

export class SongService {
    async getAllSongs() {
        return await SongModel.find({})
    }

    async createSong(data) {
        const newSong = new SongModel(data);
        await newSong.save()
        return newSong
    }

}