import axios from "axios";

export const articlesApi=axios.create({
    baseURL: "http://localhost:4000",
})

export const getArticlesApi =()=>{
    return articlesApi.get("/article");
}

export const deleteArticleApi=(article)=>{
    return articlesApi.delete("/article/"+article.id);
}

export const getArticleApi=(id)=>{
    return articlesApi.get("/article/"+id);
}

export const saveArticleApi=(article)=>{
    return articlesApi.post("/article",article);
}

export const checkArticleApi=(article)=>{
    return articlesApi.patch("/article/"+article.id,{available:!article.available});
}

export const updateArticleApi=(article)=>{
    return articlesApi.put("/article/"+article.id,{article});
}


