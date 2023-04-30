import {useCountDown} from "hooks/use-count-down";

const CountDown = ({...props}) => {
  const {time} = props;
  const {timeCount} = useCountDown(time);

  return (
    <div>
      {time > 0 ? timeCount : '00:00' }
    </div>
  );
};

export {CountDown};