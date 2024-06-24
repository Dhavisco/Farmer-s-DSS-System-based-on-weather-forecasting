
import img from "/assets/Plant.gif";
function Loading() {
  return (
    <div
      role="status"
      className="flex items-center place-content-center h-screen w-screen relative"
    >
      <div className="flex-1 text-center justify-center items-center flex relative flex-col">
        <img
          src={img}
          alt="loader"
          loading="lazy"
          className=""
        />{" "}
        <p
          className="lg:text-4xl mt-1 text-black text-2xl tracking-wide animate-pulse"
          style={{ fontFamily: "Dancing Script" }}
        >
          Happy Farming ...
        </p>
      </div>
    </div>
  );
}

export default Loading;
