import React, { useContext, useRef } from 'react';
import Element from '../component/Element';
import { ModalContext } from '../context/modalContext';
import Container, {
    Column,
    WrapperColumn,
    Row,
    WrapperRow,
} from '../styles/table';
import { theme } from '../styles/global';
import { useRouter } from 'next/router';
import { useContextualRouting } from 'next-use-contextual-routing';

function Table() {
    const containerRef = useRef<HTMLHeadingElement>();
    const { handleModal } = useContext(ModalContext);
    const router = useRouter();
    const { makeContextualHref} = useContextualRouting();
    const { colors } = theme;

    let isDown = false;
    let positionX = 0;
    let scrollLeft = 0;

    const handleMouseDown = event => {
        isDown = true;
        positionX = event.pageX - containerRef.current.offsetLeft;
        scrollLeft = containerRef.current.scrollLeft;
        containerRef.current.classList.add('active');
    };

    const handleMouseLeave = () => {
        isDown = false;
        containerRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        isDown = false;
        containerRef.current.classList.remove('active');
    };

    const handleMouseMove = event => {
        if (isDown) {
            event.preventDefault();
            const x = event.pageX - containerRef.current.offsetLeft;
            const walk = (x - positionX) * 3;
            containerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleOpenModal = (symbol) => {        
      router.push(
          makeContextualHref({ id: `${symbol}` }),
          `/${symbol}`,
          {
            shallow: true,
          }
        );

      handleModal();
    }

    return (
        <Container
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <WrapperColumn>
                <Column>
                    <Element
                        number="1"
                        symbol="H"
                        name="Hydrogen"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(1)}
                    />
                    <Element
                        number="3"
                        symbol="Li"
                        name="Lithium"
                        backgroundColor={colors.red}
                        onClick={() => handleOpenModal(3)}
                    />
                    <Element
                        number="11"
                        symbol="Na"
                        name="Sodium"
                        backgroundColor={colors.red}
                        onClick={() => handleOpenModal(11)}
                    />
                    <Element
                        number="19"
                        symbol="K"
                        name="Potassium"
                        backgroundColor={colors.red}
                        onClick={() => handleOpenModal(19)}
                    />
                    <Element
                        number="37"
                        symbol="Rb"
                        name="Rubidium"
                        backgroundColor={colors.red}
                        onClick={() => handleOpenModal(37)}
                    />
                    <Element
                        number="55"
                        symbol="Cs"
                        name="Cesium"
                        backgroundColor={colors.red}
                        onClick={() => handleOpenModal(55)}
                    />
                    <Element
                        number="87"
                        symbol="Fr"
                        name="Francium"
                        backgroundColor={colors.red}
                        onClick={() => handleOpenModal(87)}
                    />
                </Column>
                <Column>
                    <Element
                        number="4"
                        symbol="Be"
                        name="Beryllium"
                        backgroundColor={colors.purple}
                        onClick={() => handleOpenModal(4)}
                    />
                    <Element
                        number="12"
                        symbol="Mg"
                        name="Magnesium"
                        backgroundColor={colors.purple}
                        onClick={() => handleOpenModal(12)}
                    />
                    <Element
                        number="20"
                        symbol="Ca"
                        name="Calcium"
                        backgroundColor={colors.purple}
                        onClick={() => handleOpenModal(20)}
                    />
                    <Element
                        number="38"
                        symbol="Sr"
                        name="Strontium"
                        backgroundColor={colors.purple}
                        onClick={() => handleOpenModal(38)}
                    />
                    <Element
                        number="56"
                        symbol="Ba"
                        name="Barium"
                        backgroundColor={colors.purple}
                        onClick={() => handleOpenModal(56)}
                    />
                    <Element
                        number="88"
                        symbol="Ra"
                        name="Radium"
                        backgroundColor={colors.purple}
                        onClick={() => handleOpenModal(88)}
                    />
                </Column>
                <Column>
                    <Element
                        number="21"
                        symbol="Sc"
                        name="Scandium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(21)}
                    />
                    <Element
                        number="39"
                        symbol="Y"
                        name="Yttrium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(39)}
                    />
                    <Element backgroundColor={colors.blue} />
                    <Element backgroundColor={colors.blue} />
                </Column>
                <Column>
                    <Element
                        number="22"
                        symbol="Ti"
                        name="Titanium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(22)}
                    />
                    <Element
                        number="40"
                        symbol="Zi"
                        name="Zirconium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(40)}
                    />
                    <Element
                        number="72"
                        symbol="Hf"
                        name="Hafnium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(72)}
                    />
                    <Element
                        number="104"
                        symbol="Rf"
                        name="Rutherfordium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(104)}
                    />
                </Column>
                <Column>
                    <Element
                        number="23"
                        symbol="V"
                        name="Vanadium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(23)}
                    />
                    <Element
                        number="41"
                        symbol="Nb"
                        name="Niobium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(41)}
                    />
                    <Element
                        number="73"
                        symbol="Ta"
                        name="Tantalum"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(73)}
                    />
                    <Element
                        number="105"
                        symbol="Db"
                        name="Dubnium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(105)}
                    />
                </Column>
                <Column>
                    <Element
                        number="24"
                        symbol="Cr"
                        name="Chromium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(24)}
                    />
                    <Element
                        number="42"
                        symbol="Mo"
                        name="Molybdenum"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(42)}
                    />
                    <Element
                        number="74"
                        symbol="W"
                        name="Tungsten"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(74)}
                    />
                    <Element
                        number="106"
                        symbol="Sg"
                        name="Seaborgium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(106)}
                    />
                </Column>
                <Column>
                    <Element
                        number="25"
                        symbol="Mn"
                        name="Manganese"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(25)}
                    />
                    <Element
                        number="43"
                        symbol="Tc"
                        name="Technetium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(43)}
                    />
                    <Element
                        number="75"
                        symbol="Re"
                        name="Rhenium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(75)}
                    />
                    <Element
                        number="107"
                        symbol="Bh"
                        name="Bohrium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(107)}
                    />
                </Column>
                <Column>
                    <Element
                        number="26"
                        symbol="Fe"
                        name="Iron"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(26)}
                    />
                    <Element
                        number="44"
                        symbol="Ru"
                        name="Ruthenium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(44)}
                    />
                    <Element
                        number="76"
                        symbol="Os"
                        name="Osmium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(76)}
                    />
                    <Element
                        number="108"
                        symbol="Hs"
                        name="Hassium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(108)}
                    />
                </Column>
                <Column>
                    <Element
                        number="27"
                        symbol="Co"
                        name="Cobalt"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(27)}
                    />
                    <Element
                        number="45"
                        symbol="Rh"
                        name="Rhodium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(45)}
                    />
                    <Element
                        number="77"
                        symbol="Ir"
                        name="Iridium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(77)}
                    />
                    <Element
                        number="109"
                        symbol="Mt"
                        name="Meitnerium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(109)}
                    />
                </Column>
                <Column>
                    <Element
                        number="28"
                        symbol="Ni"
                        name="Transition Metal"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(28)}
                    />
                    <Element
                        number="46"
                        symbol="Pd"
                        name="Palladium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(46)}
                    />
                    <Element
                        number="78"
                        symbol="Pt"
                        name="Platinum"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(78)}
                    />
                    <Element
                        number="110"
                        symbol="Ds"
                        name="Darmstadtium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(110)}
                    />
                </Column>
                <Column>
                    <Element
                        number="29"
                        symbol="Cu"
                        name="Copper"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(29)}
                    />
                    <Element
                        number="47"
                        symbol="Ag"
                        name="Silver"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(47)}
                    />
                    <Element
                        number="79"
                        symbol="Au"
                        name="Gold"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(79)}
                    />
                    <Element
                        number="111"
                        symbol="Rg"
                        name="Roentgenium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(111)}
                    />
                </Column>
                <Column>
                    <Element
                        number="30"
                        symbol="Zn"
                        name="Zinc"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(30)}
                    />
                    <Element
                        number="48"
                        symbol="Cd"
                        name="Cadmium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(48)}
                    />
                    <Element
                        number="80"
                        symbol="Hg"
                        name="Mercury"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(80)}
                    />
                    <Element
                        number="112"
                        symbol="Cn"
                        name="Copernicium"
                        backgroundColor={colors.blue}
                        onClick={() => handleOpenModal(112)}
                    />
                </Column>
                <Column>
                    <Element
                        number="5"
                        symbol="B"
                        name="Boron"
                        backgroundColor={colors.orange}
                        onClick={() => handleOpenModal(5)}
                    />
                    <Element
                        number="13"
                        symbol="Al"
                        name="Aluminum"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(13)}
                    />
                    <Element
                        number="31"
                        symbol="Ga"
                        name="Gallium"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(31)}
                    />
                    <Element
                        number="49"
                        symbol="In"
                        name="Indium"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(49)}
                    />
                    <Element
                        number="81"
                        symbol="Ti"
                        name="Thallium"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(81)}
                    />
                    <Element
                        number="113"
                        symbol="Nh"
                        name="Nihonium"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(113)}
                    />
                </Column>
                <Column>
                    <Element
                        number="6"
                        symbol="C"
                        name="Carbon"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(6)}
                    />
                    <Element
                        number="14"
                        symbol="Si"
                        name="Silicon"
                        backgroundColor={colors.orange}
                        onClick={() => handleOpenModal(14)}
                    />
                    <Element
                        number="32"
                        symbol="Ge"
                        name="Germanium"
                        backgroundColor={colors.orange}
                        onClick={() => handleOpenModal(32)}
                    />
                    <Element
                        number="50"
                        symbol="Sn"
                        name="Tin"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(50)}
                    />
                    <Element
                        number="82"
                        symbol="Pb"
                        name="Lead"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(82)}
                    />
                    <Element
                        number="114"
                        symbol="Fl"
                        name="Flerovium"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(114)}
                    />
                </Column>
                <Column>
                    <Element
                        number="7"
                        symbol="N"
                        name="Nitrogen"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(7)}
                    />
                    <Element
                        number="15"
                        symbol="P"
                        name="Phosphorus"
                        backgroundColor={colors.yellow}
                    />
                    <Element
                        number="33"
                        symbol="As"
                        name="Arsenic"
                        backgroundColor={colors.orange}
                        onClick={() => handleOpenModal(33)}
                    />
                    <Element
                        number="51"
                        symbol="Sb"
                        name="Antimony"
                        backgroundColor={colors.orange}
                        onClick={() => handleOpenModal(51)}
                    />
                    <Element
                        number="83"
                        symbol="Bi"
                        name="Bismuth"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(83)}
                    />
                    <Element
                        number="115"
                        symbol="Mc"
                        name="Moscovium"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(115)}
                    />
                </Column>
                <Column>
                    <Element
                        number="8"
                        symbol="O"
                        name="Oxygen"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(8)}
                    />
                    <Element
                        number="16"
                        symbol="S"
                        name="Sulfur"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(16)}
                    />
                    <Element
                        number="34"
                        symbol="Se"
                        name="Selenium"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(34)}
                    />
                    <Element
                        number="52"
                        symbol="Te"
                        name="Tellurium"
                        backgroundColor={colors.orange}
                        onClick={() => handleOpenModal(52)}
                    />
                    <Element
                        number="84"
                        symbol="Po"
                        name="Polonium"
                        backgroundColor={colors.orange}
                        onClick={() => handleOpenModal(84)}
                    />
                    <Element
                        number="116"
                        symbol="Lv"
                        name="Livermorium"
                        backgroundColor={colors.green}
                        onClick={() => handleOpenModal(116)}
                    />
                </Column>
                <Column>
                    <Element
                        number="9"
                        symbol="F"
                        name="Fluorine"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(9)}
                    />
                    <Element
                        number="17"
                        symbol="Cl"
                        name="Chlorine"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(17)}
                    />
                    <Element
                        number="35"
                        symbol="Br"
                        name="Bromine"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(35)}
                    />
                    <Element
                        number="53"
                        symbol="L"
                        name="Iodine"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(53)}
                    />
                    <Element
                        number="85"
                        symbol="At"
                        name="Astatine"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(83)}
                    />
                    <Element
                        number="117"
                        symbol="Ts"
                        name="Tennessine"
                        backgroundColor={colors.yellow}
                        onClick={() => handleOpenModal(117)}
                    />
                </Column>
                <Column>
                    <Element
                        number="2"
                        symbol="He"
                        name="Helium"
                        backgroundColor={colors.pink}
                        onClick={() => handleOpenModal(2)}
                    />
                    <Element
                        number="10"
                        symbol="Ne"
                        name="Neon"
                        backgroundColor={colors.pink}
                        onClick={() => handleOpenModal(10)}
                    />
                    <Element
                        number="18"
                        symbol="Ar"
                        name="Argon"
                        backgroundColor={colors.pink}
                        onClick={() => handleOpenModal(18)}
                    />
                    <Element
                        number="36"
                        symbol="Kr"
                        name="Krypton"
                        backgroundColor={colors.pink}
                        onClick={() => handleOpenModal(36)}
                    />
                    <Element
                        number="54"
                        symbol="Xe"
                        name="Xenon"
                        backgroundColor={colors.pink}
                        onClick={() => handleOpenModal(54)}
                    />
                    <Element
                        number="85"
                        symbol="Rn"
                        name="Radon"
                        backgroundColor={colors.pink}
                        onClick={() => handleOpenModal(85)}
                    />
                    <Element
                        number="117"
                        symbol="Og"
                        name="Oganesson"
                        backgroundColor={colors.pink}
                        onClick={() => handleOpenModal(117)}
                    />
                </Column>
            </WrapperColumn>
            <WrapperRow>
                <Row>
                    <Element
                        number="57"
                        symbol="La"
                        name="Lanthanum"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(57)}
                    />
                    <Element
                        number="58"
                        symbol="Ce"
                        name="Cerium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(58)}
                    />
                    <Element
                        number="59"
                        symbol="Pr"
                        name="Praseodymium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(59)}
                    />
                    <Element
                        number="60"
                        symbol="Nd"
                        name="Neodymium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(60)}
                    />
                    <Element
                        number="61"
                        symbol="Pm"
                        name="Promethium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(61)}
                    />
                    <Element
                        number="62"
                        symbol="Sm"
                        name="Samarium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(62)}
                    />
                    <Element
                        number="63"
                        symbol="Eu"
                        name="Europium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(63)}
                    />
                    <Element
                        number="64"
                        symbol="Gd"
                        name="Gadolinium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(64)}
                    />
                    <Element
                        number="65"
                        symbol="Tb"
                        name="Terbium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(65)}
                    />
                    <Element
                        number="66"
                        symbol="Dy"
                        name="Dysprosium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(66)}
                    />
                    <Element
                        number="67"
                        symbol="Ho"
                        name="Holmium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(67)}
                    />
                    <Element
                        number="68"
                        symbol="Er"
                        name="Erbium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(68)}
                    />
                    <Element
                        number="69"
                        symbol="Tm"
                        name="Thulium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(69)}
                    />
                    <Element
                        number="70"
                        symbol="Yb"
                        name="Ytterbium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(70)}
                    />
                    <Element
                        number="71"
                        symbol="Lu"
                        name="Lutetium"
                        backgroundColor={colors.turquoise}
                        onClick={() => handleOpenModal(71)}
                    />
                </Row>
                <Row>
                    <Element
                        number="89"
                        symbol="Ac"
                        name="Actinium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(89)}
                    />
                    <Element
                        number="90"
                        symbol="Th"
                        name="Thorium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(90)}
                    />
                    <Element
                        number="91"
                        symbol="Pa"
                        name="Protactinium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(91)}
                    />
                    <Element
                        number="92"
                        symbol="U"
                        name="Uranium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(92)}
                    />
                    <Element
                        number="93"
                        symbol="Np"
                        name="Neptunium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(93)}
                    />
                    <Element
                        number="94"
                        symbol="Pu"
                        name="Plutonium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(94)}
                    />
                    <Element
                        number="95"
                        symbol="Am"
                        name="Americium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(95)}
                    />
                    <Element
                        number="96"
                        symbol="Cm"
                        name="Curium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(96)}
                    />
                    <Element
                        number="97"
                        symbol="Bk"
                        name="Berkelium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(97)}
                    />
                    <Element
                        number="98"
                        symbol="Cf"
                        name="Californium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(98)}
                    />
                    <Element
                        number="99"
                        symbol="Es"
                        name="Einsteinium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(99)}
                    />
                    <Element
                        number="100"
                        symbol="Fm"
                        name="Fermium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(100)}
                    />
                    <Element
                        number="101"
                        symbol="Md"
                        name="Mendelevium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(101)}
                    />
                    <Element
                        number="102"
                        symbol="No"
                        name="Nobelium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(102)}
                    />
                    <Element
                        number="103"
                        symbol="Lr"
                        name="Lawrencium"
                        backgroundColor={colors.shamrock}
                        onClick={() => handleOpenModal(103)}
                    />
                </Row>
            </WrapperRow>
        </Container>
    );
};

export default Table;
