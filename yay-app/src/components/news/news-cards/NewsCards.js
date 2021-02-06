import React from 'react'
import MyCard from "../../card/MyCard"
import newsImg1 from "../../../images/news-1.jpg"
const NewsCards = () => {
    // const newsInfo = [
    // ]
    return (
        <MyCard
              title="Card Heading"
              text="Some real creative text for a nice card"
              buttonText="More"
              img={newsImg1}
            ></MyCard>
    )
}

export default NewsCards
