const Card = () => {
  return (
    <div className="relative bg-white rounded-lg w-[14rem] h-[14rem] card overflow-hidden boxShadow-black">
      <h2 className="text-white">Card</h2>
      <div
        className={`card-desc bg-[#f5fcff] border-black border-2 w-[12rem] h-[11rem] absolute bottom-[-9rem] left-[1rem] rounded-lg hover:bottom-[-1rem] transition-all duration-300`}
      ></div>
    </div>
  );
};
export default Card;
