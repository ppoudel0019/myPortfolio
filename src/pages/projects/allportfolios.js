import port1 from '../../images/img2.jpeg';
import port2 from '../../images/projects/RaceTrack.gif';
import port3 from '../../images/projects/ETDSearch.png';
import port4 from '../../images/projects/C++.png';
import port5 from '../../images/projects/clearmind.png';

const portfolios = [
    {
        id: 1,
        category: 'PHP',
        link1: 'https://github.com/ppoudel0019/ETD_Search',
        link2: 'https://www.youtube.com/watch?v=mNeqRfGIY-4',
        icon1: 'Source Code',
        icon2: 'Watch Video',
        image: port3,
        title: 'ETD Search',
        description: 'Search Engine for Electronic Theses and Dissertations.',
        techused: 'PHP, Laravel, JavaScript, Elasticsearch, HTML, CSS',
    },
    {
        id: 2,
        category: 'JavaScript',
        link1: 'https://github.com/ppoudel0019/MindMap',
        link2: 'https://clearmindmap.netlify.app/',
        icon1: 'Source Code',
        icon2: 'Watch Live',
        image: port5,
        title: 'Clear Mind',
        description: 'Wepp App to create Mind Maps',
        techused:'JavaScript, React, react-flow',
    },
    {
        id: 3,
        category: 'C++',
        link1: 'https://github.com/ppoudel0019/RaceTrack',
        icon1: 'Source Code',
        image: port2,
        title: 'Race Track',
        description: 'Random race simulator',
        techused:  'C++, GNUplot',
    },
    {
        id: 4,
        category: 'PHP',
        link1: 'https://github.com/ppoudel0019/CleanEverest_Website',

        icon1: 'Source Code',
     
        image: port1,
        title: 'Clean Everest',
        description: 'Everest Cleaning voluteer website',
        techused: 'PHP, HTML, CSS',
    },
    {
        id: 5,
        category: 'C++',
        link1: 'https://github.com/ppoudel0019/Wrestling_Random_Predictor',
        icon1: 'Source Code',
        image: port4,
        title: 'Wrestiling Random Predictor',
        description: 'Random winner Predictor for Wrestling',
        techused: 'C++',
    }
   
]

export default portfolios