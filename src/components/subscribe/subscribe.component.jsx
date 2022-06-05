import './subscribe.styles.scss';

const Subscribe = () =>{
  return <>
    <div className="subcribe-comp">
      <h2>Subscribe our newsletter for newest books updates</h2>
      <form>
        <input type="email" name="email" autocomplete="off" placeholder="Type your email here" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  </>
}

export default Subscribe;
