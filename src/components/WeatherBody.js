import cloud from "../images/main-icon.jpg";

function WeatherBody() {
  return (
    <div className="centerDiv">
      <img className="cloudImg" src={cloud} alt="cloud" />

      <h1 className="degNumber">19&deg;C</h1>
      <p>Precipitations: Max 19&deg;C - Min 10&deg;C</p>
    </div>
  );
}
export default WeatherBody;
