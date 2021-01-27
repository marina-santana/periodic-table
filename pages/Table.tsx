import React, { useContext, useRef } from 'react'
import Element from './component/Element';
import { ModalContext } from './context/modalContext';
import Container, { Column, WrapperColumn, Row, WrapperRow } from "./styles/table";
import theme from './styles/theme';

const Table: React.FC = () => {
  const containerRef = useRef<HTMLHeadingElement>();
  const { handleModal } = useContext(ModalContext);
  const { colors } = theme;

  let isDown = false;
  let positionX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (event) => {
    isDown = true;
    positionX = event.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.classList.add('active');
  }

  const handleMouseLeave = () => {
    isDown = false;
    containerRef.current.classList.remove('active');
  }

  const handleMouseUp = () => {
    isDown = false;
    containerRef.current.classList.remove('active');
  }

  const handleMouseMove = (event) => {
    if(isDown){
      event.preventDefault();
      const x = event.pageX - containerRef.current.offsetLeft;
      const walk = (x - positionX) * 3; 
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  }

  return (
  <Container 
    ref={containerRef}
    onMouseDown={handleMouseDown} 
    onMouseLeave={handleMouseLeave} 
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}>
    <WrapperColumn>
      <Column>
        <Element number="1" symbol="H" name="Hydrogen" backgroundColor={colors.yellow} onClick={handleModal}/>
        <Element number="3" symbol="Li" name="Lithium" backgroundColor={colors.red}/>
        <Element number="11" symbol="Na" name="Sodium" backgroundColor={colors.red}/>
        <Element number="19" symbol="K" name="Potassium" backgroundColor={colors.red}/>
        <Element number="37" symbol="Rb" name="Rubidium" backgroundColor={colors.red}/>
        <Element number="55" symbol="Cs" name="Cesium" backgroundColor={colors.red}/>
        <Element number="87" symbol="Fr" name="Francium" backgroundColor={colors.red}/>
      </Column>
      <Column>
        <Element number="4" symbol="Be" name="Beryllium" backgroundColor={colors.purple}/>
        <Element number="12" symbol="Mg" name="Magnesium" backgroundColor={colors.purple}/>
        <Element number="20" symbol="Ca" name="Calcium" backgroundColor={colors.purple}/>
        <Element number="38" symbol="Sr" name="Strontium" backgroundColor={colors.purple}/>
        <Element number="56" symbol="Ba" name="Barium" backgroundColor={colors.purple}/>
        <Element number="88" symbol="Ra" name="Radium" backgroundColor={colors.purple}/>
      </Column>
      <Column>
        <Element number="21" symbol="Sc" name="Scandium" backgroundColor={colors.blue}/>
        <Element number="39" symbol="Y" name="Yttrium" backgroundColor={colors.blue}/>
        <Element backgroundColor={colors.blue}/>
        <Element backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="22" symbol="Ti" name="Titanium" backgroundColor={colors.blue}/>
        <Element number="40" symbol="Zi" name="Zirconium" backgroundColor={colors.blue}/>
        <Element number="72" symbol="Hf" name="Hafnium" backgroundColor={colors.blue}/>
        <Element number="104" symbol="Rf" name="Rutherfordium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="23" symbol="V" name="Vanadium" backgroundColor={colors.blue}/>
        <Element number="41" symbol="Nb" name="Niobium" backgroundColor={colors.blue}/>
        <Element number="73" symbol="Ta" name="Tantalum" backgroundColor={colors.blue}/>
        <Element number="105" symbol="Db" name="Dubnium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="24" symbol="Cr" name="Chromium" backgroundColor={colors.blue}/>
        <Element number="42" symbol="Mo" name="Molybdenum" backgroundColor={colors.blue}/>
        <Element number="74" symbol="W" name="Tungsten" backgroundColor={colors.blue}/>
        <Element number="106" symbol="Sg" name="Seaborgium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="25" symbol="Mn" name="Manganese" backgroundColor={colors.blue}/>
        <Element number="43" symbol="Tc" name="Technetium" backgroundColor={colors.blue}/>
        <Element number="75" symbol="Re" name="Rhenium" backgroundColor={colors.blue}/>
        <Element number="107" symbol="Bh" name="Bohrium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="26" symbol="Fe" name="Iron" backgroundColor={colors.blue}/>
        <Element number="44" symbol="Ru" name="Ruthenium" backgroundColor={colors.blue}/>
        <Element number="76" symbol="Os" name="Osmium" backgroundColor={colors.blue}/>
        <Element number="108" symbol="Hs" name="Hassium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="27" symbol="Co" name="Cobalt" backgroundColor={colors.blue}/>
        <Element number="45" symbol="Rh" name="Rhodium" backgroundColor={colors.blue}/>
        <Element number="77" symbol="Ir" name="Iridium" backgroundColor={colors.blue}/>
        <Element number="109" symbol="Mt" name="Meitnerium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="28" symbol="Ni" name="Transition Metal" backgroundColor={colors.blue}/>
        <Element number="46" symbol="Pd" name="Palladium" backgroundColor={colors.blue}/>
        <Element number="78" symbol="Pt" name="Platinum" backgroundColor={colors.blue}/>
        <Element number="110" symbol="Ds" name="Darmstadtium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="29" symbol="Cu" name="Copper" backgroundColor={colors.blue}/>
        <Element number="47" symbol="Ag" name="Silver" backgroundColor={colors.blue}/>
        <Element number="79" symbol="Au" name="Gold" backgroundColor={colors.blue}/>
        <Element number="111" symbol="Rg" name="Roentgenium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="30" symbol="Zn" name="Zinc" backgroundColor={colors.blue}/>
        <Element number="48" symbol="Cd" name="Cadmium" backgroundColor={colors.blue}/>
        <Element number="80" symbol="Hg" name="Mercury" backgroundColor={colors.blue}/>
        <Element number="112" symbol="Cn" name="Copernicium" backgroundColor={colors.blue}/>
      </Column>
      <Column>
        <Element number="5" symbol="B" name="Boron" backgroundColor={colors.orange}/>
        <Element number="13" symbol="Al" name="Aluminum" backgroundColor={colors.green}/>
        <Element number="31" symbol="Ga" name="Gallium" backgroundColor={colors.green}/>
        <Element number="49" symbol="In" name="Indium" backgroundColor={colors.green}/>
        <Element number="81" symbol="Ti" name="Thallium" backgroundColor={colors.green}/>
        <Element number="113" symbol="Nh" name="Nihonium" backgroundColor={colors.green}/>
      </Column>
      <Column>
        <Element number="6" symbol="C" name="Carbon" backgroundColor={colors.yellow}/>
        <Element number="14" symbol="Si" name="Silicon" backgroundColor={colors.orange}/>
        <Element number="32" symbol="Ge" name="Germanium" backgroundColor={colors.orange}/>
        <Element number="50" symbol="Sn" name="Tin" backgroundColor={colors.green}/>
        <Element number="82" symbol="Pb" name="Lead" backgroundColor={colors.green}/>
        <Element number="114" symbol="Fl" name="Flerovium" backgroundColor={colors.green}/>
      </Column>
      <Column>
        <Element number="7" symbol="N" name="Nitrogen" backgroundColor={colors.yellow}/>
        <Element number="15" symbol="P" name="Phosphorus" backgroundColor={colors.yellow}/>
        <Element number="33" symbol="As" name="Arsenic" backgroundColor={colors.orange}/>
        <Element number="51" symbol="Sb" name="Antimony" backgroundColor={colors.orange}/>
        <Element number="83" symbol="Bi" name="Bismuth" backgroundColor={colors.green}/>
        <Element number="115" symbol="Mc" name="Moscovium" backgroundColor={colors.green}/>
      </Column>
      <Column>
        <Element number="8" symbol="O" name="Oxygen" backgroundColor={colors.yellow}/>
        <Element number="16" symbol="S" name="Sulfur" backgroundColor={colors.yellow}/>
        <Element number="34" symbol="Se" name="Selenium" backgroundColor={colors.yellow}/>
        <Element number="52" symbol="Te" name="Tellurium" backgroundColor={colors.orange}/>
        <Element number="84" symbol="Po" name="Polonium" backgroundColor={colors.orange}/>
        <Element number="116" symbol="Lv" name="Livermorium" backgroundColor={colors.green}/>
      </Column>
      <Column>
        <Element number="9" symbol="F" name="Fluorine" backgroundColor={colors.yellow}/>
        <Element number="17" symbol="Cl" name="Chlorine" backgroundColor={colors.yellow}/>
        <Element number="35" symbol="Br" name="Bromine" backgroundColor={colors.yellow}/>
        <Element number="53" symbol="L" name="Iodine" backgroundColor={colors.yellow}/>
        <Element number="85" symbol="At" name="Astatine" backgroundColor={colors.yellow}/>
        <Element number="117" symbol="Ts" name="Tennessine" backgroundColor={colors.yellow}/>
      </Column>
      <Column>
        <Element number="2" symbol="He" name="Helium" backgroundColor={colors.pink}/>
        <Element number="10" symbol="Ne" name="Neon" backgroundColor={colors.pink}/>
        <Element number="18" symbol="Ar" name="Argon" backgroundColor={colors.pink}/>
        <Element number="36" symbol="Kr" name="Krypton" backgroundColor={colors.pink}/>
        <Element number="54" symbol="Xe" name="Xenon" backgroundColor={colors.pink}/>
        <Element number="85" symbol="Rn" name="Radon" backgroundColor={colors.pink}/>
        <Element number="117" symbol="Og" name="Oganesson" backgroundColor={colors.pink}/>
      </Column>
    </WrapperColumn>
    <WrapperRow>
      <Row>
        <Element number="57" symbol="La" name="Lanthanum" backgroundColor={colors.turquoise}/>
        <Element number="58" symbol="Ce" name="Cerium" backgroundColor={colors.turquoise}/>
        <Element number="59" symbol="Pr" name="Praseodymium" backgroundColor={colors.turquoise}/>
        <Element number="60" symbol="Nd" name="Neodymium" backgroundColor={colors.turquoise}/>
        <Element number="61" symbol="Pm" name="Promethium" backgroundColor={colors.turquoise}/>
        <Element number="62" symbol="Sm" name="Samarium" backgroundColor={colors.turquoise}/>
        <Element number="63" symbol="Eu" name="Europium" backgroundColor={colors.turquoise}/>
        <Element number="64" symbol="Gd" name="Gadolinium" backgroundColor={colors.turquoise}/>
        <Element number="65" symbol="Tb" name="Terbium" backgroundColor={colors.turquoise}/>
        <Element number="66" symbol="Dy" name="Dysprosium" backgroundColor={colors.turquoise}/>
        <Element number="67" symbol="Ho" name="Holmium" backgroundColor={colors.turquoise}/>
        <Element number="68" symbol="Er" name="Erbium" backgroundColor={colors.turquoise}/>
        <Element number="69" symbol="Tm" name="Thulium" backgroundColor={colors.turquoise}/>
        <Element number="70" symbol="Yb" name="Ytterbium" backgroundColor={colors.turquoise}/>
        <Element number="71" symbol="Lu" name="Lutetium" backgroundColor={colors.turquoise}/>
      </Row>
      <Row>
        <Element number="89" symbol="Ac" name="Actinium" backgroundColor={colors.shamrock}/>
        <Element number="90" symbol="Th" name="Thorium" backgroundColor={colors.shamrock}/>
        <Element number="91" symbol="Pa" name="Protactinium" backgroundColor={colors.shamrock}/>
        <Element number="92" symbol="U" name="Uranium" backgroundColor={colors.shamrock}/>
        <Element number="93" symbol="Np" name="Neptunium" backgroundColor={colors.shamrock}/>
        <Element number="94" symbol="Pu" name="Plutonium" backgroundColor={colors.shamrock}/>
        <Element number="95" symbol="Am" name="Americium" backgroundColor={colors.shamrock}/>
        <Element number="96" symbol="Cm" name="Curium" backgroundColor={colors.shamrock}/>
        <Element number="97" symbol="Bk" name="Berkelium" backgroundColor={colors.shamrock}/>
        <Element number="98" symbol="Cf" name="Californium" backgroundColor={colors.shamrock}/>
        <Element number="99" symbol="Es" name="Einsteinium" backgroundColor={colors.shamrock}/>
        <Element number="100" symbol="Fm" name="Fermium" backgroundColor={colors.shamrock}/>
        <Element number="101" symbol="Md" name="Mendelevium" backgroundColor={colors.shamrock}/>
        <Element number="102" symbol="No" name="Nobelium" backgroundColor={colors.shamrock}/>
        <Element number="103" symbol="Lr" name="Lawrencium" backgroundColor={colors.shamrock}/>
      </Row>
    </WrapperRow>
  </Container>)
}

export default Table;
