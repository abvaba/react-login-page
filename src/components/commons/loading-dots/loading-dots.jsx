import _ from './loading-dots.module.sass';
const LoadingDots = ({...props}) => {
  const {loadClasses} = props;
  return (
    <svg className={loadClasses} width='100%' height='100%' viewBox="0 0 132 58" xmlns="http://www.w3.org/2000/svg">
      <g fill="#ffffff">
        <circle className={_.dot1} cx="25" cy="30" r="13" />
        <circle className={_.dot2} cx="65" cy="30" r="13" />
        <circle className={_.dot3} cx="105" cy="30" r="13" />
      </g>
    </svg>
  );
};

export {LoadingDots};