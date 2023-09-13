import { useParams } from "react-router-dom";
import { getUrl } from "../../utils/firebase.utils";
import { useEffect, useState } from "react";
import "./redirect.styles.scss"
import Spinner from "../../components/spinner/spinner.component";

const Redirect = () => {
  const { shortUrl } = useParams();
  const defaultContent = <div><p>. . . Redirecting</p> <Spinner/> </div>
  const [content, setContent] = useState(defaultContent);

  const checkPrefix = (url) => {
    if((url.slice(0,8) === "https://") || (url.slice(0,7) === "http://") ){
        return url
    }else{
        return "https://" + url
    }
  }

  useEffect(() => {
    getUrl(shortUrl)
      .then((url) => checkPrefix(url.longUrl))
      .then((url) => window.location.replace(url))
      .catch((error) => {
        console.log(error)
        setContent("Error. Unable to locate link.");
      });
  }, []);

  return <div className="redirect-container">{content}</div>;
};

export default Redirect;
