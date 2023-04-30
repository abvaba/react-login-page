import _ from './auth-page-layout.module.sass';
const AuthPageLayout = ({...props}) => {
  const {children} = props;
  return (
    <main className={_.main_container}>
      {children}
    </main>
  );
};

export {AuthPageLayout};