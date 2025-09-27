import contactIcon from './about.svg'
import projectimg from './react_portfolio_img.png'
import SQLProjectimg from './sql_img.png'
import MachineLearningimg from './ml_img.png'

const projects = [
    {
        id:1,
        title: 'React Portfolio Website',
        photo: projectimg,
        link: 'https://github.com/AlonShuster1/portfolio_react',
        details: 'personal portfolio built with React to showcase my projects, skills, and contact information.'
    },
    {
        id:2,
        title: 'Heart Failure Prediction with ML',
        photo: MachineLearningimg,
        link: 'https://github.com/AlonShuster1/Heart_Failure_Prediction',
        details: 'a project using the heart failure dataset. It covers data preprocessing, feature engineering, visualizations, and training ML models with hyperparameter tuning.'
    },
    {
        id:3,
        title: 'SQL COVID Analysis',
        photo: SQLProjectimg,
        link: 'https://github.com/AlonShuster1/Corona_Virus_SQL',
        details: 'SQL project exploring COVID-19 data. Includes queries on cases, deaths, population impact, and vaccinations using GROUP BY, joins, CTEs, window functions, and temp tables.'
    }
];

export default projects;