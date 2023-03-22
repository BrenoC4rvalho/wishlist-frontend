import Link from "next/link";

const home = () => {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/spiderman.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Make your wish list!</h1>
          <p className="py-6">
            Your every wish is valid! Nothing is impossible, put your wish here and make it happen!
            Everything just depends on you. Do your best and watch it happen!
          </p>
          <Link href={"/"} className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default home;
