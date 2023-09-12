import { useParams } from "react-router-dom";
import { getUrl } from "../../utils/firebase.utils";
import { useEffect, useState } from "react";

const Redirect = () => {
  const { shortUrl } = useParams();
  const defaultContent = "...Redirecting";
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    getUrl(shortUrl)
      .then((url) => window.location.replace(url.longUrl))
      .catch((error) => {
        setContent("Error. Unable to locate link.");
      });
  }, []);

  return <div>{content}</div>;
};

export default Redirect;
