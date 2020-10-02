import React from 'react';
import Success from '../Success';
import img1 from '../images/cups/Champions-League.png';
import img2 from '../images/cups/Fifa-Club-World-Cup.png';
import img3 from '../images/cups/pucharzdobywcowpucharow.jpg';
import img4 from '../images/cups/European-Super-Cup.png';
import img5 from '../images/cups/la-liga.png';
import img6 from '../images/cups/Spanish-Cup.png';
import img7 from '../images/cups/superpucharhiszpanii.jpg';
import img8 from '../images/cups/ligakatalonska.jpg';
import img9 from '../images/cups/pucharkatalonii.jpg';
import img10 from '../images/cups/Supercopa-Catalunya.jpg';

const successes = [
    {
        id: 1,
        title: "Liga mistrzów",
        years: "1991/92, 2005/06, 2008/09, 2010/11, 2014/15",
        image: img1
    },
    {
        id: 2,
        title: "Klubowe Mistrzostwo Świata",
        years: "2009/10, 2011/12, 2015/16",
        image: img2
    },
    {
        id: 3,
        title: "Puchar Zdobywców Pucharów",
        years: "1978/79, 1981/82, 1988/89, 1996/97",
        image: img3
    },
    {
        id: 4,
        title: "Superpuchar Europy",
        years: "1992/93, 1997/98, 2009/10, 2011/12, 2015/16",
        image: img4
    },
    {
        id: 5,
        title: "Liga Hiszpańska",
        years: "1928/29, 1944/45, 1947/48, 1948/49, 1951/52, 1952/53, 1958/59, 1959/60, 1973/74, 1984/85, 1990/91, 1991/92, 1992/93, 1993/94, 1997/98, 1998/99, 2004/05, 2005/06, 2008/09, 2009/10, 2010/11, 2012/13, 2014/15, 2015/16, 2017/18, 2018/19",
        image: img5
    },
    {
        id: 6,
        title: "Puchar Króla",
        years: "1909/10, 1911/12, 1912/13, 1919/20, 1921/22, 1924/25, 1925/26, 1927/28, 1941/42, 1950/51, 1951/52, 1952/53, 1956/57, 1958/59, 1962/63, 1967/68, 1970/71, 1977/78, 1980/81, 1982/83, 1987/88, 1989/90, 1996/97, 1997/98, 2008/09, 2011/12, 2014/15, 2015/16, 2016/17, 2017/18",
        image: img6
    },
    {
        id: 7,
        title: "Superpuchar Hiszpanii",
        years: "1983/84, 1991/92, 1992/93, 1994/95, 1996/97, 2005/06, 2006/07, 2009/10, 2010/11, 2011/12, 2013/14, 2016/17, 2018/19",
        image: img7
    },
    {
        id: 8,
        title: "Liga Katalońska",
        years: "1901/02, 1902/03, 1904/05, 1908/09, 1909/10, 1910/11, 1912/13, 1915/16, 1918/19, 1919/20, 1920/21, 1921/22, 1923/24, 1924/25, 1925/26, 1926/27, 1927/28, 1929/30, 1930/31, 1931/32, 1934/35, 1935/36, 1937/38 (zawiera zdobyte Copa Macaya (1901/02) i Puchar Barcelony (1902/03))",
        image: img8
    },
    {
        id: 9,
        title: "Puchar Katalonii",
        years: "1990/91, 1992/93, 1999/00, 2003/04, 2004/05, 2006/07, 2012/13, 2013/14 (do sezonu 1993/94 jako Copa Generalitat)",
        image: img9
    },
    {
        id: 10,
        title: "Superpuchar Katalonii",
        years: "2014/15, 2017/18",
        image: img10
    }
]

const Successes = () => {

    const successList = successes.map(success => (
        <Success key={success.id} {...success} />
    ))
    return (
        <div className="home">
            <h1 className="title">
            <p>SUKCESY KLUBU</p></h1>
            {successList}
        </div>
    );
}

export default Successes;