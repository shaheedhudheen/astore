import zuck from "../assets/image.jpeg";

export const Item = () => {
  return (
    <div className="w-72 p-1 rounded-md m-2 border border-gray-300">
      <img src={zuck} alt="" className="rounded-md" />
      <div>
        <h3 className="text-xl font-bold text-gray-900">Zuckerberg animated</h3>
        <h4 className="text-lg font-semibold text-gray-800">$20000</h4>
        <h5 className="font-medium text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequuntur, laboriosam!
        </h5>
        <p className="font-medium text-gray-500">Here it is location</p>
      </div>
    </div>
  );
};
