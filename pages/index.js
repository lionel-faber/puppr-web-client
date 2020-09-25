import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout/PageLayout";
import AddPet from "../components/AddPet/AddPet";
import ViewPets from "../components/ViewPets/ViewPets";

export default function Home({ pets }) {
  const [currentTab, setCurrentTab] = React.useState("view");

  const onTabChanged = (item) => {
    console.log(item.key);
    setCurrentTab(item.key);
  };

  const getContent = (tab) => {
    switch (tab) {
      case "view":
        return <ViewPets pets={pets} />;
      case "add":
        return <AddPet />;
    }
  };

  return (
    <PageLayout onTabChanged={onTabChanged}>
      {getContent(currentTab)}
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://puppr-india.herokuapp.com/api/pets/all"
  );
  const data = await response.json();
  const pets = data["DATA"];
  return {
    props: {
      pets,
    },
  };
}
