import React from 'react';

export default function () {
  return {
    nav: {
      userNav: [{
        text: 'Dashboard',
        href: '/dashboard'
      },
      {
        text: 'Profile',
        href: '/profile'
      },
      {
        text: 'Add Job',
        href: '/add-job'
      },
      {
        text: 'Job Collection',
        href: '/job-collection'
      }
    ],
    landingNav: [{
        text: 'Home',
        href: '/',
      },
      {
        text: 'Register',
        href: '/register'
      },
      {
        text: 'Log In/Demo',
        href: '/login'
      }]
    },
    header: {
      landing: {
        headerId: 'landing-header',
        h1Id: 'app-title',
        h1Text: `Job Seeker's Journal`,
        h2Text: <h2>Track & Manage Jobs</h2>
      },
      profile: {
        headerId: 'user-header',
        h1Id: 'user-header-title',
        h1Text: 'Edit Profile'
      },
      dashboard: {
        headerId: 'user-header',
        h1Id: 'user-header-title',
        h1Text: 'Profile Summary'
      },
      editJob: {
        headerId: 'user-header',
        h1Id: 'user-header-title',
        h1Text: '',
      },
      jobCollection: {
        headerId: 'user-header',
        h1Id: 'user-header-title',
        h1Text: 'Job Collection',
      },
      addJob: {
        headerId: 'user-header',
        h1Id: 'user-header-title',
        h1Text: 'Add Job',
      }
    },
    skills: [
      {
        id: '1',
        skill: 'HTML',
        experience: {
          months: 0,
          years: 1
        }
      },
      {
        id: '2',
        skill: 'CSS3',
        experience: {
          months: 0,
          years: 1
        }
      }
    ],
    jobFormLabel: {
      title: 'Job Title',
      company: 'Company',
      location: 'Location'
    },
    monthButton: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
  }
}
