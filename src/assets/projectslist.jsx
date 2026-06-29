import contactIcon from './about.svg'
import projectimg from './react_portfolio_img.png'
import SQLProjectimg from './sql_img.png'
import MachineLearningimg from './ml_img.png'
import dashboardimg from './DashboardImg.png'
import food_waste_img from './food_waste_img.png'
import deep_learning_img from './deep_learning_img.png'

const projects = [
    {
        id:1,
        title: 'Portfolio Website (React)',
        photo: projectimg,
        link: 'https://github.com/AlonShuster1/portfolio_react',
        details: 'personal portfolio built with React to showcase my projects, skills, and contact information.'
    },
    {
        id:2,
        title: 'Heart Failure Prediction (ML)',
        photo: MachineLearningimg,
        link: 'https://github.com/AlonShuster1/Heart_Failure_Prediction',
        details: 'a project using the heart failure dataset. It covers data preprocessing, feature engineering, visualizations, and training ML models with hyperparameter tuning.'
    },
    {
        id:3,
        title: 'COVID Analysis (SQL)',
        photo: SQLProjectimg,
        link: 'https://github.com/AlonShuster1/Corona_Virus_SQL',
        details: 'SQL project exploring COVID-19 data. Includes queries on cases, deaths, population impact, and vaccinations using GROUP BY, joins, CTEs, window functions, and temp tables.'
    },
    {
        id:4,
        title: 'Interactive Dashboard (Excel)',
        photo: dashboardimg,
        link: 'https://github.com/AlonShuster1/Excel_Dashboard/tree/main',
        details: 'interactive Excel dashboard that makes raw data easy to explore and understand.'
    },
    {
        id:5,
        title: 'Food Waste Prediction (ML)',
        photo: food_waste_img,
        link:'https://github.com/AlonShuster1/Food_Waste_Prediction/tree/main',
        details:'a Kaggle competition dataset, The focus is on data cleaning and preprocessing, handling missing values, fixing outliers and using pipelines.'
    }
];

export default projects;