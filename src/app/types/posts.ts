import { Theme } from "./themes"

export interface UserId{
    themes: string[],
    posts: string[],
    _id: string,
    tel: string,
    email: string,
    username: string,
    password: string,
    created_at: string,
    updatedAt: string,
    __v: number
}

export interface Post {
    likes: string[],
    _id: string,
    text: string,
    userId: UserId,
    themeId: Theme,
    created_at: string,
    updatedAt: string,
    __v: number
}