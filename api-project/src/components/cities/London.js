import React from "react";
import { EverythingLondon } from "../../lib/NewsApi";
import CityCard from "../cityIndex/CityCard";

const London = () => {
  const [state, setState] = React.useState({ londonNews: [] });

  const fetchLondonFromApi = async () => {
    try {
      const res = await EverythingLondon();
      setState({ londonNews: res.data.articles });
    } catch (err) {
      console.log("an error has occured fetching London news", err);
    }
  };
  React.useEffect(() => {
    fetchLondonFromApi();
  }, []);
  console.log(state);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {state.londonNews.map((london) => (
            <CityCard
              key={london.key}
              title={london.title}
              description={london.description}
              url={london.url}
              urlToImage={london.urlToImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default London;
