import {
  WiDayCloudy,
  WiDayRainMix,
  WiDayRainWind,
  WiDaySleetStorm,
} from "react-icons/wi";

function WeatherFooter() {
  return (
    <footer>
      <div className="cloudsDiv">
        <span>15&deg;C</span> <br />
        <WiDayCloudy size={40} />
        <br />
        <span>12:00h</span>
      </div>
      <div className="cloudsDiv">
        <span>17&deg;C</span>
        <br />
        <WiDayRainMix size={40} />
        <br />
        <span>14:00h</span>
      </div>
      <div className="cloudsDiv">
        <span>18&deg;C</span>
        <br />
        <WiDayRainWind size={40} />
        <br />
        <span>15:00h</span>
      </div>
      <div className="cloudsDiv">
        <span>13&deg;C</span>
        <br />
        <WiDaySleetStorm size={40} />
        <br />
        <span>18:00h</span>
      </div>
    </footer>
  );
}
export default WeatherFooter;
