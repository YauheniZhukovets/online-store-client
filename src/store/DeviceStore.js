import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Микроволновки'},
            {id: 2, name: 'Телефоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Lg'},
        ]
        this._devices = [
            {
                id: 1,
                name: 'Xiaomi redmi note 10',
                price: 10000,
                rating: 4,
                img: 'https://cdn21vek.by/img/galleries/7543/669/128gb256gb_xiaomi_01_62a1ba95807a7.jpeg'
            },
            {
                id: 2,
                name: 'Xiaomi redmi note 11',
                price: 11000,
                rating: 3,
                img: 'https://cdn21vek.by/img/galleries/7543/669/128gb256gb_xiaomi_01_62a1ba95807a7.jpeg'
            },
            {
                id: 3,
                name: 'Xiaomi redmi note 12',
                price: 12000,
                rating: 2,
                img: 'https://cdn21vek.by/img/galleries/7543/669/128gb256gb_xiaomi_01_62a1ba95807a7.jpeg'
            },
            {
                id: 4,
                name: 'Xiaomi redmi note 13',
                price: 13000,
                rating: 3,
                img: 'https://cdn21vek.by/img/galleries/7543/669/128gb256gb_xiaomi_01_62a1ba95807a7.jpeg'
            },
            {
                id: 5,
                name: 'Xiaomi redmi note 14',
                price: 14000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7543/669/128gb256gb_xiaomi_01_62a1ba95807a7.jpeg'
            },
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}