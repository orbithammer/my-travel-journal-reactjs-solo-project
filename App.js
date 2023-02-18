import React from "react"
import data from "./data"
import Header from "./components/Header"
import Card from "./components/Card"

export default function App() {
    const cards = data.map(card=>{
        return (
            <Card 
                key={card.title}
                card={card}
            />
        )
    })
    return (
        <div>
            <Header />
            <main>
                {cards}
            </main>
        </div>
    )
}