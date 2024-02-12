
const WelcomeMsg = ({onGetPostClick}) =>{
    return <center className="msg">
          <h1 >There are no Post</h1>
          <button  type="button" onClick={onGetPostClick} className="btn btn-primary">Browse Post</button>
    </center>
}
export default WelcomeMsg;