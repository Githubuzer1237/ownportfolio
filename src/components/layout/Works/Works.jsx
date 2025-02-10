// import React, { useState, useEffect } from 'react';
// import s from './Works.module.scss';
// import Top from '../../ui/Top/Top';
// import Card from '../../ui/Card/Card';
// import axios from 'axios';

// const Works = () => {
//     const [projects, setProjects] = useState([]);
//     const [totalProjects, setTotalProjects] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [nextPage, setNextPage] = useState(null);
//     const [loadingMore, setLoadingMore] = useState(false);

//     const fetchProjects = (url) => {
//         setLoading(true);
//         axios
//             .get(url)
//             .then(response => {
//                 const newProjects = response.data.results.map(project => {
//                     const technologies = project.technologies.length
//                         ? project.technologies
//                         : project._technologies
//                             .replace(/[\[\]"]/g, '')
//                             .split(',')
//                             .map(tech => tech.trim());

//                     return { ...project, technologies };
//                 });

//                 setProjects(prevProjects => [...prevProjects, ...newProjects]);
//                 setTotalProjects(response.data.count); 
//                 setNextPage(response.data.next);
//                 setLoading(false);
//                 setLoadingMore(false);
//             })
//             .catch(error => {
//                 console.error("Ошибка при загрузке данных:", error);
//                 setLoading(false);
//                 setLoadingMore(false);
//             });
//     };


//     useEffect(() => {
//         fetchProjects('https://api.valiev.uz/projects/');
//     }, []);


//     const handleLoadMore = () => {
//         if (nextPage) {
//             setLoadingMore(true);
//             fetchProjects(nextPage);
//         }
//     };

//     return (
//         <section className={s.works}>
//             <div className="container">
//                 <Top title={'Projects'} count={totalProjects} /> 

//                 {loading && !loadingMore ? (
//                     <div className={s.loader}>
//                         <h2>Loading...</h2>
//                     </div>
//                 ) : (
//                     <div className={s.wrap}>
//                         <div className={s.grid}>
//                             {projects.map((card) => (
//                                 <Card
//                                     key={card.id}
//                                     image={card.image}
//                                     name={card.name}
//                                     link={card.link}
//                                     description={card.description}
//                                     technologies={card.technologies}
//                                 />
//                             ))}
//                         </div>
//                         {nextPage && (
//                             <div className={s.loadMore}>
//                                 <button 
//                                     onClick={handleLoadMore} 
//                                     disabled={loadingMore}
//                                 >
//                                     {loadingMore ? 'Loading...' : 'More'}
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Works;


// import React, { useState, useEffect } from 'react';
// import s from './Works.module.scss';
// import Top from '../../ui/Top/Top';
// import Card from '../../ui/Card/Card';
// import axios from 'axios';

// const Works = () => {
//     const [projects, setProjects] = useState([]);
//     const [totalProjects, setTotalProjects] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [nextPage, setNextPage] = useState(null);
//     const [loadingMore, setLoadingMore] = useState(false);

//     const fetchProjects = (url) => {
//         setLoading(true);
//         axios
//             .get(url)
//             .then(response => {
//                 setProjects(prev => [...prev, ...response.data]); // Просто response.data вместо response.data.results
//                 setTotalProjects(response.data.length); // Количество проектов
//                 setNextPage(null); // У json-server нет пагинации по умолчанию
//                 setLoading(false);
//                 setLoadingMore(false);
//             })
//             .catch(error => {
//                 console.error("Ошибка при загрузке данных:", error);
//                 setLoading(false);
//                 setLoadingMore(false);
//             });
//     };
    

//     useEffect(() => {
//         fetchProjects('http://localhost:5000/projects');
//     }, []);

//     const handleLoadMore = () => {
//         if (nextPage) {
//             setLoadingMore(true);
//             fetchProjects(nextPage);
//         }
//     };

//     return (
//         <section className={s.works}>
//             <div className="container">
//                 <Top title={'Projects'} count={totalProjects} />
//                 {loading && !loadingMore ? (
//                     <div className={s.loader}>
//                         <h2>Loading...</h2>
//                     </div>
//                 ) : (
//                     <div className={s.wrap}>
//                         <div className={s.grid}>
//                             {projects.map((card) => (
//                                 <Card
//                                     key={card.id}
//                                     image={card.image}
//                                     name={card.name}
//                                     link={card.link}
//                                     description={card.description}
//                                     technologies={card.technologies}
//                                 />
//                             ))}
//                         </div>
//                         {nextPage && (
//                             <div className={s.loadMore}>
//                                 <button 
//                                     onClick={handleLoadMore} 
//                                     disabled={loadingMore}
//                                 >
//                                     {loadingMore ? 'Loading...' : 'More'}
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Works;
import React, { useState, useEffect } from 'react';
import s from './Works.module.scss';
import Top from '../../ui/Top/Top';
import Card from '../../ui/Card/Card';

const Works = () => {
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/db.json')
            .then(response => {
                if (!response.ok) throw new Error('Ошибка загрузки данных');
                return response.json();
            })
            .then(data => {
                setProjects(data.projects); // Берём из `projects`, если в `db.json` объекты внутри `projects`
                setTotalProjects(data.projects.length);
                setLoading(false);
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section className={s.works}>
            <div className="container">
                <Top title={'Projects'} count={totalProjects} />
                {loading ? (
                    <div className={s.loader}>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    <div className={s.wrap}>
                        <div className={s.grid}>
                            {projects.map((card) => (
                                <Card
                                    key={card.id}
                                    image={card.image}
                                    name={card.name}
                                    link={card.link}
                                    description={card.description}
                                    technologies={card.technologies}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Works;
