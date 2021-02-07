import React from 'react'
import MyCard from "../../card/MyCard"
import newsImg1 from "../../../images/news-1.jpg"
import newsImg2 from "../../../images/news-2.jpg"
import newsImg3 from "../../../images/news-3.jpg"
import newsImg4 from "../../../images/news-4.jpg"
import newsImg5 from "../../../images/news-5.jpg"
import newsImg6 from "../../../images/news-6.jpg"
import newsImg7 from "../../../images/news-7.jpg"
import newsImg8 from "../../../images/news-8.jpg"

const NewsCards = () => {
 
const newsArticles = [
  {
    id: 1,
    img: newsImg1,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  },
  {
    id: 2,
    img: newsImg2,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  },
  {
    id: 3,
    img: newsImg3,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  },
  {
    id: 4,
    img: newsImg4,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  },
  {
    id: 5,
    img: newsImg5,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  },
  {
    id: 6,
    img: newsImg6,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  },
  {
    id: 7,
    img: newsImg7,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  },
  {
    id: 8,
    img: newsImg8,
    title: "Nunc porttitor vel",
    text: "Nunc malesuada eget est fringilla dapibus."
  }
]

    return (
        <>
        {newsArticles.map(article => {
            return (
                <MyCard className="news-card"
                title= {article.title}
                text= {article.text}
              buttonText="More"
              img={article.img}
            ></MyCard>

            )
        })}
              
            </>
    )
}

export default NewsCards
