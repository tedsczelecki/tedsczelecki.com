import _groupBy from 'lodash/groupBy';
import _orderBy from 'lodash/orderBy';

const currentYear = new Date().getFullYear();

export const experienceRaw = [
  {
    skill: 'HTML CSS/CSS preprocessors',
    yearStart: 2009,
    group: ['Frontend']
  },
  {
    skill: 'Build Tools (Webpack/Rollup)',
    yearStart: 2014,
    group: ['Frontend']
  },
  {
    skill: 'React',
    yearStart: 2016,
    group: ['Frontend']
  },
  {
    skill: 'AngularJS',
    yearStart: 2017,
    group: ['Frontend']
  },
  {
    skill: 'Angular',
    yearStart: 2018,
    group: ['Frontend']
  },
  {
    skill: 'Nginx/Apache',
    yearStart: 2012,
    group: ['Backend'],
  },
  {
    skill: 'NodeJS',
    yearStart: 2014,
    group: ['Backend'],
  },
  {
    skill: 'SQL Databases (MySql, Postgres)',
    yearStart: 2012,
    group: ['Backend'],
  },
  {
    skill: 'NoSQL databases (mongoDB, Firebase)',
    yearStart: 2014,
    group: ['Backend'],
  },
  {
    skill: 'Unity (C#)',
    yearStart: 2017,
    group: ['Everything Else']
  },
  {
    skill: 'Wordpress',
    yearStart: 2013,
    group: ['Everything Else']
  },
  {
    skill: 'Vanilla Javascript',
    yearStart: 2011,
    group: ['Frontend']
  },
  {
    skill: 'PHP',
    yearStart: 2011,
    group: ['Backend']
  },
  {
    skill: 'Command line ',
    yearStart: 2015,
    group: ['Everything Else']
  },
  {
    skill: 'IOS',
    yearStart: 2018,
    group: ['Everything Else']
  },
  {
    skill: 'Android',
    yearStart: 2017,
    group: ['Everything Else']
  },
  {
    skill: 'Java',
    yearStart: 2016,
    group: ['Everything Else']
  },
  {
    skill: 'Python',
    yearStart: 2018,
    group: ['Everything Else']
  }
];

const experienceWithTotal = _orderBy(experienceRaw.map((skill) => {
  skill.totalYears = currentYear - skill.yearStart;
  return skill;
}), 'totalYears').reverse();

export const experience = _groupBy(experienceWithTotal, 'group');

export const totalYearsExperience = Math.max(...experienceWithTotal.map(({totalYears}) => totalYears ))
