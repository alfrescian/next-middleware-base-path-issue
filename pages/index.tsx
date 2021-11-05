import Link from "next/link";
import { NextPage } from "next";
import { coffee } from "../coffee";

const Home: NextPage = () => {
  return (
    <>
      <h1>just a list of links</h1>
      <div>
        <ul>
          {coffee.map((it) => (
            <li key={it.id}>
              <Link href={`/blend${it.id}`}>{it.blend_name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
