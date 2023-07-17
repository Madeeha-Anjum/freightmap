import { Link } from "react-router-dom";
import Icon from "../Icons/Icon";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";

const RouteLegend = () => {
  // TODO default all routes to be selected in checkbox

  return (
    <>
      <div className="flex flex-col items-center h-full ">
        <section className="flex flex-col items-center justify-center flex-grow space-y-12">
          <div className="text-xl">What routes do you want to see ?</div>
          {/* TODO convert to input type checkbox  */}

          <div className="flex p-2 space-x-9 bg-white/30 backdrop-blur-2xl rounded-2xl hover:cursor-pointer">
            <IconButton title="Ground" className="text-white bg-red-800 ">
              <Icon.Truck className="w-full"></Icon.Truck>
            </IconButton>
            <Icon.OpenEye className="w-5"></Icon.OpenEye>
          </div>
          <div className="flex p-2 space-x-9 bg-white/30 backdrop-blur-2xl rounded-2xl hover:cursor-pointer">
            <IconButton title="Sea" className="text-white bg-green-800 ">
              <Icon.Ship className="w-full"></Icon.Ship>
            </IconButton>
            <Icon.OpenEye className="w-5"></Icon.OpenEye>
          </div>
          <div className="flex p-2 space-x-9 bg-white/30 backdrop-blur-2xl rounded-2xl hover:cursor-pointer">
            <IconButton className="text-white bg-blue-800" title="Air">
              <Icon.Plane className="w-full"></Icon.Plane>
            </IconButton>
            <Icon.OpenEye className="w-5"></Icon.OpenEye>
          </div>
        </section>
        <div>
          {/* TODO: only display if user is logged in */}
          <Button title="Start drawing">
            <Link to="/select-route">Start drawing route</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default RouteLegend;
