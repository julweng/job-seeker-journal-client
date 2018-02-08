# Job Seeker's Journal
[Job Seeker's Journal](https://job-seeker-journal.netlify.com/) is a full-stack React-Redux project that allows users to maintain a record of jobs they are applying, chart their skills, and keep track of their job application process.

This inspiration came from the fact that I would like a simple and interesting app to monitor my job hunting, and at the same time, try to avoid having to rely on writing on post-its or notebooks, typing up an excel sheet, or using apps that require subscription and provide only limited free trial.
![Snapshot of Job Seeker's Journal](/app_screen_shot.jpeg)

## What does the app do
Try the app on this [site](https://job-seeker-journal.netlify.com/)
The app currently provides users with the following functions:
1. Add and edit skills and corresponding experience in years
2. Graph skills on a radial chart, allowing users to assess their current skill sets and gauge on their potential on landing their target jobs
2. Build collections of jobs being applied
3. Edit the job application process
4. Generate a bar chart, providing users an overview of their job application process. For example, how many jobs the user have applied from January to March, and how many interviews and offers were received during that period.

## Technology
### Front End
* HTML5
* CSS3
* JavaScript
* React
* Redux
* Redux Thunk, Redux Form
* recharts, moment.js, react-fontawesome

## Testing
* enzyme
* redux-mock-store
* Travis CI

### Back End
[job-seeker-journal-api](https://github.com/julweng/job-seeker-journal-api)
