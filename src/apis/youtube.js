import axios from "axios";

const KEY = "AIzaSyAxvnUXHWhbJeVMDWUfH3vWS3UXITfobno";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
