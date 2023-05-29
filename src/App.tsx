import { Wrapper } from "@googlemaps/react-wrapper";
import ENV from "./data/env";
import FreightMap from "./components/FreightMap";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Wrapper apiKey={ENV.GOOGLE_MAPS_API_KEY}>
        <FreightMap center={{ lat: 40.7128, lng: -74.006 }} zoom={5} />
      </Wrapper>
    </>
  );
}

export default App;
