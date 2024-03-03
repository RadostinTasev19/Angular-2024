import { Article } from "../models/article.model"
import { data } from "./seed"

export class ArticleData {
    getData(): Article[] {
        const article = data.map((el) => {
        return new Article (
                el.title,
                el.description,
                el.author,
                el.imageUrl
            )
        })
    return article
    }
}
