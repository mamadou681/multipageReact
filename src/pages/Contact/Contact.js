import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search; // get the value of search from the url
  const queryParams = new URLSearchParams(queryString); // instantiate in other to get advantage of  URLSearchParams method
  const name = queryParams.get("name");

  return (
    <div>
      <h2> Hey, {name} Contact us here...</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
        voluptatum eaque animi in officiis possimus quidem, ullam minima
        recusandae explicabo autem non accusantium quis, eius cumque totam
        impedit amet suscipit.
      </p>
    </div>
  );
}
