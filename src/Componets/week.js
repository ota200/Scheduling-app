import Pop from'./Pop';
import App from '../App';

export default function Week(props) {

  return (
      <div className="week">

        <div>
          Monday
          {props.mon}
        </div>

        <div>
          Tuesday
          {props.tue}
        </div>

        <div>
          Wendsday
          {props.wed}
        </div>

        <div>
          Thursday
          {props.thu}
        </div>

        <div>
          Friday
          {props.fri}
        </div>

        <div>
          Saturday
          {props.sat}
        </div>

        <div>
          Sunday
          {props.sun}
        </div>

      </div>
  );
}


