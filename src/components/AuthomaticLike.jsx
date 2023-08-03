import { useState } from "react"; 
 
const AuthomaticLike = () => { 
  const [like, setLike] = useState(false);

  function addLike() {
      setInterval(() => {
        setLike(!like);
      }, 1000);
  }
  addLike();

    return ( 
        <> 
            <button> 
                {like ? '❤️' : '🤍'} 
            </button> 
        </> 
    ); 
}; 
export default AuthomaticLike;