type TechnologyCategory = {
  type: string;
  tecs: string[];
};

type TechnologiesProps = {
  [key: string]: TechnologyCategory;
};

function Tecnologies({ tecnologies }: TechnologiesProps) {
  console.log(tecnologies)
  return (
    <>

    </>
  )
}

export default Tecnologies