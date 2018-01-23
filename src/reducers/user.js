export default function () {
  return {
    skills: [
      { id: 1, name: 'HTML5', experience: 1 },
      {
        id: 2, name: 'CSS3', experience: 1
      },
      { id: 3, name: 'JavaScript', experience: 1 },
      { id: 4, name: 'React', experience: 0.5 },
    ],
    progressPerSeason: [
      {
        id: 1,
        period: 'Jan-Mar',
        phone: 2,
        'on-site': 0,
        offer: 0,
        applied: 10
      },
      {
        id: 2,
        period: 'Apr-Jun',
        phone: 5,
        'on-site': 2,
        offer: 0,
        applied: 16
      },
      {
        id: 3,
        period: 'Jul-Sept',
        phone: 6,
        'on-site': 3,
        offer: 2,
        applied: 21
      },
      {
        id: 4,
        period: 'Oct-Dec',
        phone: 0,
        'on-site': 0,
        offer: 0,
        applied: 0
      },
      {
        id: 5,
        period: '12 mo',
        phone: 13,
        'on-site': 5,
        offer: 2,
        applied: 47
      }
    ],
    job: {
      id: 1,
      title: 'front-end developer',
      company: 'Illumina',
      location: 'San Diego, CA',
      dateApplied: '01/13/2018',
      skills: ['HTML5', 'CSS3'],
      experiences: [
        {
          months: 1,
          years: 1
        },
        {
          months: 2,
          years: 1
        }
      ]
    },
    jobList: [
      {
        id: 1,
        title: 'front-end developer',
        company: 'Illumina',
        location: 'San Diego, CA',
        dateApplied: '2018-01-03',
        required: {
          skills: ['HTML5', 'CSS3'],
          experiences: [
            {
              months: 1,
              years: 1
            },
            {
              months: 2,
              years: 1
            }
          ]
        },
        progress: [
          'resume submitted', 'phone interview', 'on-site interview', 'Offer received']
      },
      {
        id: 2,
        title: 'front-end developer',
        company: 'Expedia',
        location: 'Bellevue, WA',
        dateApplied: '2018-02-01',
        required: {
          skills: ['HTML5', 'CSS3'],
          experiences: [
            {
              months: 1,
              years: 1
            },
            {
              months: 2,
              years: 1
            }
          ]
        },
        progress: [
          'resume submitted']
      },
    ],
  }
}
