type TechnologyCategory = {
    type: string;
    tecs: string[];
  };
  
  type TechnologiesProps = {
    [key: string]: TechnologyCategory;
  };
  
function Tecnologies({tecnologies}: TechnologiesProps) {
    return (
        <>
        
        </>
    )
}

export default Tecnologies