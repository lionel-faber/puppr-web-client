import { useState, useEffect } from "react";
import { Skeleton, Image } from "antd";
import { Card } from "antd";
import styles from "./ViewPets.module.css";

export default function ViewPets({ pets }) {
  return (
    <div className={styles.root}>
      {pets.map((pet) => {
        return <PetCard key={pet._id} pet={pet} />;
      })}
    </div>
  );
}

function PetCard({ pet }) {
  return (
    <Card
      style={{ width: 300, margin: "10px auto" }}
      cover={
        <Image
          alt={pet.name}
          src={"https://puppr-india.herokuapp.com" + pet.image_url}
          placeholder={
            <Skeleton.Image
              style={{ width: 300, zIndex: -1, position: "relative" }}
            />
          }
        />
      }
    >
      <Card.Meta
        title={pet.name + " - " + pet.age + " year(s) old"}
        description={pet.about}
      />
    </Card>
  );
}
