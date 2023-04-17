import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <div>...Loading...</div>
    </div>
  );
}
export default Loader;