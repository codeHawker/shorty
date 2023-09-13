import { useState } from "react";
import { randomUrl } from "../../utils/shortUrl.utils";
import { addUrl } from "../../utils/firebase.utils";
import "./shortner-form.styles.scss"
import Spinner from "../spinner/spinner.component";

const defaultFormFields = {
  longUrl: "",
  shortUrl: "",
  isLoading: false
};

const ShortnerForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { longUrl, shortUrl, isLoading } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormFields({ ...formFields, shortUrl: "", isLoading: true });
    shortenUrl();
  };

  const shortenUrl = async () => {
    const shortenedUrl = randomUrl();
    console.log("shortened URL:", shortenedUrl);
    await addUrl(longUrl, shortenedUrl);
    setFormFields({ ...formFields, shortUrl: shortenedUrl, isLoading: false });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="shortner-form-container">
      <form className="shortner-form" onSubmit={handleSubmit}>
        <input
          label="longUrl"
          type="text"
          required
          onChange={handleChange}
          name="longUrl"
          value={longUrl}
        />
        <button type="submit">Shorten!</button>
      </form>

      {
      isLoading && (
        <div className="loading-spinner">
          <Spinner/>
        </div>
      )}

      {
      shortUrl && (
        <div className="shortened-url-container">
          <p>
            Shortened URL: <a href={shortUrl}>{window.location.href}{shortUrl}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ShortnerForm;
