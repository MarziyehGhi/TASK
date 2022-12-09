import axios from "axios";

export const BASE_URL = 'https://localhost:3000';

export const MAIN_INSTANCE = axios.create({
    url: BASE_URL
})