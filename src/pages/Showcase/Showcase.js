import React from 'react';
import {
    BarChart,
    PieChart,
    Bar,
    Pie,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Cell,
    CartesianGrid,
} from 'recharts';
import styles from './Showcase.module.scss';
import Layout from "../../layout/layout";

const projects = [
    {
        title: 'Lexi - Renovations professionals in London',
        description: 'Click to see this project live',
        url: 'https://lexi.ltd',
    },
    {
        title: 'My Ecom - The online store of many things',
        description: 'Project will be live soon!',
    },
];

const insightsData1 = [
    { name: 'e-Commerce', value: 400 },
    { name: 'Brochure Website', value: 300 },
    { name: 'Promo Website', value: 300 },
];

const insightsData2 = [
    { name: 'Month 1', uv: 4000, pv: 2400 },
    { name: 'Month 2', uv: 3000, pv: 1398 },
    { name: 'Month 3', uv: 2000, pv: 9800 },
];

// const highlights = [
//     'Highlight 1',
//     'Highlight 2',
//     'Highlight 3',
// ];

const Showcase = () => {
    return (
        <Layout>
            <div className={styles.showcase}>
                <h1>Our most recent projects</h1>
                <section className={styles.customerProjects}>
                    <h2>Customer Projects</h2>
                    <div className={styles.projectList}>
                        {projects.map((project, index) => (
                            <div key={index} className={styles.project} onClick={() => window.open(project.url, '_blank')}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.status}>
                                    <span className={styles.statusCircle}></span>
                                    <span>Work in Progress</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={styles.insightsBar}>
                    <h2>Insights Bar</h2>
                    <div className={styles.insightsContainer}>
                        {/* Example charts */}
                        <div className={styles.insightSection}>
                            <h3>Client Distribution</h3>
                            <PieChart width={300} height={300}>
                                <Pie data={insightsData1} cx={150} cy={150} outerRadius={80} fill="#8884d8" dataKey="value">
                                    {insightsData1.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </div>
                        <div className={styles.insightSection}>
                            <h3>Monthly Performance</h3>
                            <BarChart width={300} height={300} data={insightsData2}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </div>
                </section>
                {/* Uncomment this section if you want to add highlights carousel back */}
                {/* <section className={styles.highlightsCarousel}> */}
                {/*     <h2>Highlights Carousel</h2> */}
                {/*     <div className={styles.embla} ref={emblaRef}> */}
                {/*         <div className={styles.embla__container}> */}
                {/*             {highlights.map((highlight, index) => ( */}
                {/*                 <div className={styles.embla__slide} key={index}> */}
                {/*                     <img */}
                {/*                         className={styles.embla__slide__img} */}
                {/*                         src={`https://via.placeholder.com/300x200?text=${highlight}`} */}
                {/*                         alt={highlight} */}
                {/*                         loading="lazy" */}
                {/*                     /> */}
                {/*                     <p>{highlight}</p> */}
                {/*                 </div> */}
                {/*             ))} */}
                {/*         </div> */}
                {/*     </div> */}
                {/* </section> */}
            </div>
        </Layout>
    );
};

export default Showcase;
