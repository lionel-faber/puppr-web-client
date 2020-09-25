import { useState, useEffect } from "react";
import { Card } from "antd";
import styles from "./ViewPets.module.css"

export default function ViewPets({ pets }) {
    return <div className={styles.root}>
        {pets.map((pet) => {
            return <Card
                key={pet.name}
                style={{ width: 300, margin: "10px auto" }}
                cover={
                    <img
                        alt={pet.name}
                        src={"https://puppr-india.herokuapp.com" + pet.image_url}
                    />
                }
            >
                <Card.Meta
                    title={pet.name + " - " + pet.age + " year(s) old"}
                    description={pet.about}
                />
            </Card>
        })}
    </div>
}