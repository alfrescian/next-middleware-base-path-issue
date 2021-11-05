import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import { coffee } from "../../coffee";

const Blend: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blend,
}) => {
  return (
    <>
      <h1>{blend.blend_name}</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blendId = context.params?.blendId;

  const blend = coffee.find((it) => String(it.id) === blendId);
  if (!blendId || !blend) {
    return { notFound: true };
  }

  return {
    props: {
      blend,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: coffee.map((it) => ({ params: { blendId: String(it.id) } })),
    fallback: "blocking",
  };
};

export default Blend;
