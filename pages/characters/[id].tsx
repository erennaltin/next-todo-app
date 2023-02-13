import Layout from "@/components/Layouts/Layout";
import axiosClient from "@/service/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Character } from "../../types/Character";

function CharacterPage({ character }: { character: Character })  {
  return (
    <div>
      <h1>{character.name}</h1>
      <p>{process.env.NEXT_PUBLIC_TEST}</p>
      <Image src={character.image} alt="Character" height={200} width={200} />
    </div>
  );
};

CharacterPage.getLayout = function getLayout(page : typeof CharacterPage ) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps : GetServerSideProps = async (context) =>  {
  const res = await axiosClient.get(`/character/${context.query.id}`);
  const character = res.data;

  return {
    props: {
      character,
    },
  };
}

export default CharacterPage;
