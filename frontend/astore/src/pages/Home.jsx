import { Item } from "../components/ItemCard";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-y-4 gap-x-4">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Home;
