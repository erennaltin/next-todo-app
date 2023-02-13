import axiosClient from "@/service/client";
import Image from "next/image";
import { GetCharacterResults, Character } from "../../types/Character";

const CharacterPage = ({ character }: { character: Character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <Image src={character.image} alt="Character" height={200} width={200} />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await axiosClient.get("/character");
  const { results }: GetCharacterResults = res.data;
  return {
    paths: results.map((character) => {
      return {params: {
        id: String(character.id)
      }}
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await axiosClient.get(`/character/${params.id}`);
  const character = res.data;
  console.log(character);
  return {
    props: {
      character,
    },
  };
}

export default CharacterPage;
