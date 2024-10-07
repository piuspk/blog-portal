import { Button } from "flowbite-react";
import pk from "../../assets/pk.jpg"
export const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about me?</h2>
        <p className="text-gray-500 my-2">
          Checkout my portfolio..!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-tr-none "
        >
          <a
            href="https://ragnar-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ragnar's Portfolio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={pk} />
      </div>
    </div>
  );
};
