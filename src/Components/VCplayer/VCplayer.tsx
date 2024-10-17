import react from "../../assets/how-to-use-svgs-react.avif";
function VCplayer() {
  return (
    <div>
      <video className="w-full" poster={react} controls muted defaultValue={1}></video>
    </div>
  );
}

export default VCplayer;
